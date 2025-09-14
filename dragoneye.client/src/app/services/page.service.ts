import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Page, NavigationItem, Homepage } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  /**
   * Get all pages - returns empty array since we've moved to hardcoded components
   */
  getPages(): Observable<Page[]> {
    return of([]);
  }

  /**
   * Get a specific page by ID - returns null since we've moved to hardcoded components
   */
  getPageById(id: string): Observable<Page | null> {
    return of(null);
  }

  /**
   * Get a specific page by title - returns null since we've moved to hardcoded components
   */
  getPageByTitle(title: string): Observable<Page | null> {
    return of(null);
  }

  /**
   * Get page by hierarchical path - returns null since we've moved to hardcoded components
   */
  getPageByPath(section: string, subsection?: string, title?: string): Observable<Page | null> {
    return of(null);
  }

  /**
   * Check if a section has its own content page - returns false since we've moved to hardcoded components
   */
  hasSectionPage(section: string): Observable<boolean> {
    return of(false);
  }

  /**
   * Check if a subsection has its own content page - returns false since we've moved to hardcoded components
   */
  hasSubsectionPage(section: string, subsection: string): Observable<boolean> {
    return of(false);
  }

  /**
   * Get hardcoded navigation structure - returns empty array since navigation is now hardcoded in sidebar
   */
  getNavigation(): Observable<NavigationItem[]> {
    return of([]);
  }

  /**
   * Get homepage configuration - returns basic homepage data for edit functionality
   */
  getHomepage(): Observable<Homepage> {
    const basicHomepage: Homepage = {
      id: 'homepage',
      title: 'Dragoneye Design Wiki',
      subtitle: 'Your comprehensive game design documentation hub',
      heroContent: 'Welcome to the complete documentation for our tabletop RPG. Everything you need to understand and play the game is here.',
      quickAccessCards: [],
      recentUpdates: [],
      stats: [],
      gettingStarted: {
        title: 'Getting Started',
        steps: []
      },
      updated: new Date(),
      getStartedButtonText: 'Get Started',
      exploreButtonText: 'Explore',
      exploreGameTitle: 'Explore the Game',
      exploreGameSubtitle: 'Jump into any area of the design documentation',
      quickLinkActionText: 'Explore',
      gettingStartedSubtitle: 'Follow this path to understand the game from the ground up',
      startLearningButtonText: 'Start Learning',
      loadingText: 'Loading...',
      errorHeading: 'Error Loading Content',
      retryButtonText: 'Retry'
    };
    return of(basicHomepage);
  }

  /**
   * Update homepage configuration (in-memory only)
   */
  updateHomepage(homepage: Homepage): Observable<Homepage> {
    // For hardcoded data, we just return the updated homepage
    // In a real app, this would persist to storage
    homepage.updated = new Date();
    return of(homepage);
  }

  /**
   * Helper method to decode URL segments back to readable format
   */
  private decodeUrlSegment(segment: string): string {
    return decodeURIComponent(segment)
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}