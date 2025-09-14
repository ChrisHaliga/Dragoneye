import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

interface BreadcrumbItem {
  label: string;
  route?: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: false,
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumbs: BreadcrumbItem[] = [];
  private routerSubscription: Subscription = new Subscription();

  // Define friendly labels for URL segments
  private readonly segmentLabels: { [key: string]: string } = {
    'wiki': 'Wiki',
    'game-mechanics': 'Game Mechanics',
    'core-systems': 'Core Systems',
    'card-system': 'Card System',
    'systems': 'Systems',
    'tactical-combat': 'Tactical Combat',
    'combat-system': 'Combat System',
    'adventure-mechanics': 'Adventure Mechanics',
    'content': 'Content',
    'character-domains': 'Character Domains',
    'warrior-domain': 'Warrior Domain',
    'scholar-domain': 'Scholar Domain',
    'player-races': 'Player Races',
    'human-race': 'Human Race',
    'elf-race': 'Elf Race',
    'dwarf-race': 'Dwarf Race',
    'setting-lore': 'Setting & Lore',
    'world-building': 'World Building',
    'world-overview': 'World Overview'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Generate initial breadcrumbs
    this.generateBreadcrumb();
    
    // Listen to route changes
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.generateBreadcrumb();
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  private generateBreadcrumb(): void {
    const url = this.router.url;
    
    // Skip breadcrumbs for home page
    if (url === '/' || url === '/home') {
      this.breadcrumbs = [];
      return;
    }

    this.breadcrumbs = [];
    
    // Split URL into segments and filter out empty ones
    const urlParts = url.split('/').filter(part => part.length > 0);
    
    // Skip if no segments or if it's an edit route
    if (urlParts.length === 0 || url.includes('/edit/')) {
      this.breadcrumbs = [];
      return;
    }

    // Build breadcrumbs for each segment (excluding 'wiki' if present)
    const relevantParts = urlParts[0] === 'wiki' ? urlParts.slice(1) : urlParts;
    
    relevantParts.forEach((segment, index) => {
      const isLast = index === relevantParts.length - 1;
      
      // Build the correct route path up to this segment
      let routePath = '';
      if (urlParts[0] === 'wiki') {
        routePath = '/wiki/' + relevantParts.slice(0, index + 1).join('/');
      } else {
        routePath = '/' + relevantParts.slice(0, index + 1).join('/');
      }
      
      // Get friendly label for this segment
      const label = this.getFriendlyLabel(segment);
      
      this.breadcrumbs.push({
        label,
        route: isLast ? undefined : routePath, // No route for current page
        isActive: isLast
      });
    });
  }

  private getFriendlyLabel(segment: string): string {
    // Check if we have a predefined label
    if (this.segmentLabels[segment]) {
      return this.segmentLabels[segment];
    }

    // Convert kebab-case to Title Case as fallback
    return this.decodeUrlSegment(segment);
  }

  private decodeUrlSegment(segment: string): string {
    return decodeURIComponent(segment)
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  navigateTo(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }
}
