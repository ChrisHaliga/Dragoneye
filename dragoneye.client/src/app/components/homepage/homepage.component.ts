import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { Homepage, QuickAccessCard, RecentUpdate, StatCard, GettingStartedStep, Page } from '../../models/page.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  homepage: Homepage | null = null;
  isLoading = true;
  error: string | null = null;
  private pages: Page[] = []; // Cache pages for route generation

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.loadHomepage();
    this.loadPages();
  }

  private loadPages(): void {
    this.pageService.getPages().subscribe({
      next: (pages) => {
        this.pages = pages;
      },
      error: (error) => {
        console.error('Error loading pages:', error);
      }
    });
  }

  loadHomepage(): void {
    this.isLoading = true;
    this.error = null;
    
    this.pageService.getHomepage().subscribe({
      next: (homepage) => {
        this.homepage = homepage;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading homepage:', error);
        this.error = 'Failed to load homepage content';
        this.isLoading = false;
        // Fallback to default content
        this.setDefaultHomepage();
      }
    });
  }

  scrollToQuickLinks(): void {
    const element = document.getElementById('quickLinks');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getPageRoute(pageId: string): string {
    // Find the page from cached data
    const page = this.pages.find(p => p.id === pageId || p.title === pageId);
    
    if (page && page.section) {
      const section = encodeURIComponent(page.section);
      const subsection = page.subsection ? encodeURIComponent(page.subsection) : null;
      const title = encodeURIComponent(page.title);
      
      if (subsection) {
        return `/wiki/${section}/${subsection}/${title}`;
      } else {
        return `/wiki/${section}/${title}`;
      }
    }
    
    // Fallback to homepage if page not found or no section
    return `/`;
  }

  getTimeAgo(date: Date): string {
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 14) return '1 week ago';
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return `${Math.floor(diffInDays / 30)} months ago`;
  }

  private setDefaultHomepage(): void {
    // Updated homepage content with real sections from the sidebar
    this.homepage = {
      id: 'homepage',
      title: 'Dragoneye Design Wiki',
      subtitle: 'Your comprehensive game design documentation hub',
      heroContent: 'Explore the complete design documentation for our tactical card game. From core mechanics to rich lore, everything you need to understand the game world.',
      quickAccessCards: [
        {
          pageId: 'Card System',
          title: 'Card System',
          description: 'The core card mechanics that drive all gameplay interactions and decisions',
          icon: 'bi-collection',
          badgeText: 'Core System',
          badgeColor: 'bg-primary',
          displayOrder: 1
        },
        {
          pageId: 'Combat System',
          title: 'Combat System',
          description: 'Tactical combat mechanics, positioning, and strategic card play',
          icon: 'bi-shield-shaded',
          badgeText: 'Combat',
          badgeColor: 'bg-success',
          displayOrder: 2
        },
        {
          pageId: 'Warrior Domain',
          title: 'Character Domains',
          description: 'Explore character archetypes and abilities that define your playstyle',
          icon: 'bi-person-gear',
          badgeText: 'Characters',
          badgeColor: 'bg-info',
          displayOrder: 3
        },
        {
          pageId: 'World Overview',
          title: 'World & Lore',
          description: 'The rich world of Aethermoor, its history, cultures, and mysteries',
          icon: 'bi-globe',
          badgeText: 'Lore',
          badgeColor: 'bg-warning',
          displayOrder: 4
        }
      ],
      recentUpdates: [],
      stats: [],
      gettingStarted: {
        title: 'Getting Started',
        steps: [
          {
            title: 'Learn the Basics',
            description: 'Start with the core card system to understand fundamental gameplay',
            icon: 'bi-1-circle-fill',
            pageId: 'Card System',
            stepNumber: 1
          },
          {
            title: 'Master Combat',
            description: 'Learn the tactical combat system and strategic positioning',
            icon: 'bi-2-circle-fill',
            pageId: 'Combat System',
            stepNumber: 2
          },
          {
            title: 'Choose Your Path',
            description: 'Explore character domains to find your preferred playstyle',
            icon: 'bi-3-circle-fill',
            pageId: 'Warrior Domain',
            stepNumber: 3
          }
        ]
      },
      updated: new Date()
    };
  }

  // TrackBy functions for ngFor performance
  trackByPageId(index: number, card: QuickAccessCard): string {
    return card.pageId;
  }

  trackByUpdatePageId(index: number, update: RecentUpdate): string {
    return update.pageId;
  }

  trackByStatLabel(index: number, stat: StatCard): string {
    return stat.label;
  }

  trackByStepNumber(index: number, step: GettingStartedStep): number {
    return step.stepNumber;
  }
}
