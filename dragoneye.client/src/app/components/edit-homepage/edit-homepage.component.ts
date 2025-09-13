import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { Homepage, QuickAccessCard, GettingStartedStep } from '../../models/page.model';

@Component({
  selector: 'app-edit-homepage',
  standalone: false,
  templateUrl: './edit-homepage.component.html',
  styleUrl: './edit-homepage.component.css'
})
export class EditHomepageComponent implements OnInit {
  homepage: Homepage | null = null;
  isLoading = true;
  isSaving = false;
  error: string | null = null;
  successMessage: string | null = null;

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.loadHomepage();
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

  private setDefaultHomepage(): void {
    this.homepage = {
      id: 'homepage',
      title: 'Dragoneye Design Wiki',
      subtitle: 'Your comprehensive game design documentation hub',
      heroContent: 'Explore the complete design documentation for our tactical card game.',
      quickAccessCards: [
        {
          pageId: 'Card System',
          title: 'Card System',
          description: 'The core card mechanics that drive all gameplay',
          icon: 'bi-collection',
          badgeText: 'Core System',
          badgeColor: 'bg-primary',
          displayOrder: 1
        }
      ],
      recentUpdates: [],
      stats: [],
      gettingStarted: {
        title: 'Getting Started',
        steps: [
          {
            title: 'Learn the Basics',
            description: 'Start with the core card system',
            icon: 'bi-1-circle-fill',
            pageId: 'Card System',
            stepNumber: 1
          }
        ]
      },
      updated: new Date(),
      
      // Default UI text
      getStartedButtonText: 'Get Started',
      exploreButtonText: 'Explore',
      exploreGameTitle: 'Explore the Game',
      exploreGameSubtitle: 'Jump into any area of the design documentation',
      quickLinkActionText: 'Explore',
      gettingStartedSubtitle: 'Follow this path to understand the game from the ground up',
      startLearningButtonText: 'Start Learning',
      loadingText: 'Loading homepage...',
      errorHeading: 'Error Loading Homepage',
      retryButtonText: 'Retry'
    };
  }

  onSave(): void {
    if (!this.homepage) return;
    
    this.isSaving = true;
    this.error = null;
    this.successMessage = null;

    this.pageService.updateHomepage(this.homepage).subscribe({
      next: (updatedHomepage) => {
        this.isSaving = false;
        this.successMessage = 'Homepage updated successfully!';
        // Redirect to homepage after a brief success message
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      },
      error: (error) => {
        console.error('Error saving homepage:', error);
        this.error = 'Failed to save homepage changes';
        this.isSaving = false;
      }
    });
  }

  addQuickAccessCard(): void {
    if (!this.homepage) return;
    
    const newCard: QuickAccessCard = {
      pageId: '',
      title: 'New Card',
      description: 'Card description',
      icon: 'bi-card-text',
      badgeText: 'New',
      badgeColor: 'bg-secondary',
      displayOrder: this.homepage.quickAccessCards.length + 1
    };
    
    this.homepage.quickAccessCards.push(newCard);
  }

  removeQuickAccessCard(index: number): void {
    if (!this.homepage) return;
    this.homepage.quickAccessCards.splice(index, 1);
  }

  addGettingStartedStep(): void {
    if (!this.homepage) return;
    
    const newStep: GettingStartedStep = {
      title: 'New Step',
      description: 'Step description',
      icon: `bi-${this.homepage.gettingStarted.steps.length + 1}-circle-fill`,
      pageId: '',
      stepNumber: this.homepage.gettingStarted.steps.length + 1
    };
    
    this.homepage.gettingStarted.steps.push(newStep);
  }

  removeGettingStartedStep(index: number): void {
    if (!this.homepage) return;
    this.homepage.gettingStarted.steps.splice(index, 1);
    // Update step numbers
    this.homepage.gettingStarted.steps.forEach((step, i) => {
      step.stepNumber = i + 1;
      step.icon = `bi-${i + 1}-circle-fill`;
    });
  }
}
