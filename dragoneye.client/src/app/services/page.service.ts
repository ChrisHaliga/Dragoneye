import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Page, NavigationItem, Homepage, CertaintyLevel } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private apiService: ApiService) { }

  /**
   * Get all pages from the backend
   */
  getPages(): Observable<Page[]> {
    return this.apiService.get<Page[]>('pages')
      .pipe(
        map(pages => this.normalizePages(pages)),
        map(pages => this.addMockHierarchicalPages(pages))
      );
  }

  /**
   * Get a specific page by ID from the backend
   */
  getPageById(id: string): Observable<Page | null> {
    return this.apiService.get<Page>(`pages/${encodeURIComponent(id)}`)
      .pipe(
        map(page => this.normalizePage(page))
      );
  }

  /**
   * Get a specific page by title
   */
  getPageByTitle(title: string): Observable<Page | null> {
    return this.getPages().pipe(
      map(pages => pages.find(p => p.title === title) || null)
    );
  }

  /**
   * Get page by hierarchical path (section, subsection, title)
   */
  getPageByPath(section: string, subsection?: string, title?: string): Observable<Page | null> {
    return this.getPages().pipe(
      map(pages => {
        return pages.find(page => {
          // Convert URL segments back to readable format for comparison
          const decodedSection = this.decodeUrlSegment(section);
          const decodedSubsection = subsection ? this.decodeUrlSegment(subsection) : undefined;
          const decodedTitle = title ? this.decodeUrlSegment(title) : undefined;
          
          // Check if page matches the path
          if (page.section !== decodedSection) return false;
          
          // For section-level pages
          if (!subsection && !title) {
            return !page.subsection && page.title === decodedSection;
          }
          
          // For subsection-level pages  
          if (subsection && !title) {
            return page.subsection === decodedSubsection && page.title === decodedSubsection;
          }
          
          // For regular pages
          if (subsection && title) {
            return page.subsection === decodedSubsection && page.title === decodedTitle;
          }
          
          return false;
        }) || null;
      })
    );
  }

  /**
   * Check if a section has its own content page
   */
  hasSectionPage(section: string): Observable<boolean> {
    const decodedSection = this.decodeUrlSegment(section);
    return this.getPages().pipe(
      map(pages => pages.some(page => 
        page.section === decodedSection && 
        !page.subsection && 
        page.title === decodedSection
      ))
    );
  }

  /**
   * Check if a subsection has its own content page
   */
  hasSubsectionPage(section: string, subsection: string): Observable<boolean> {
    const decodedSection = this.decodeUrlSegment(section);
    const decodedSubsection = this.decodeUrlSegment(subsection);
    return this.getPages().pipe(
      map(pages => pages.some(page => 
        page.section === decodedSection && 
        page.subsection === decodedSubsection && 
        page.title === decodedSubsection
      ))
    );
  }

  /**
   * Get navigation structure generated from pages
   */
  getNavigation(): Observable<NavigationItem[]> {
    return this.getPages().pipe(
      map(pages => this.generateNavigationFromPages(pages))
    );
  }

  /**
   * Get homepage configuration from the backend
   */
  getHomepage(): Observable<Homepage> {
    return this.apiService.get<Homepage>('homepage')
      .pipe(
        map(homepage => this.normalizeHomepage(homepage))
      );
  }

  /**
   * Update homepage configuration
   */
  updateHomepage(homepage: Homepage): Observable<Homepage> {
    return this.apiService.put<Homepage>('homepage', homepage)
      .pipe(
        map(homepage => this.normalizeHomepage(homepage))
      );
  }

  /**
   * Normalize page data from API (handle date strings, etc.)
   */
  private normalizePages(pages: any[]): Page[] {
    return pages.map(page => this.normalizePage(page));
  }

  /**
   * Normalize a single page from API
   */
  private normalizePage(page: any): Page {
    return {
      ...page,
      updated: new Date(page.updated)
    };
  }

  /**
   * Normalize homepage data from API
   */
  private normalizeHomepage(homepage: any): Homepage {
    return {
      ...homepage,
      updated: new Date(homepage.updated),
      recentUpdates: homepage.recentUpdates?.map((update: any) => ({
        ...update,
        updateDate: new Date(update.updateDate)
      })) || []
    };
  }

  /**
   * Add mock hierarchical pages for testing until backend is updated
   */
  private addMockHierarchicalPages(pages: Page[]): Page[] {
    const mockPages: Page[] = [
      // Section pages
      {
        id: 'core-mechanics-section',
        title: 'Core Mechanics',
        section: 'Core Mechanics',
        content: `
          <h2>Core Mechanics Overview</h2>
          <p>Welcome to the Core Mechanics section. This contains all the fundamental game mechanics that drive gameplay.</p>
          
          <h3>What You'll Find Here:</h3>
          <ul>
            <li><strong>Card Fundamentals</strong> - Basic card system concepts</li>
            <li><strong>Resources</strong> - How resources work in the game</li>
            <li><strong>Combat</strong> - Combat mechanics and resolution</li>
          </ul>
          
          <p>Explore the subsections to learn more about each mechanic in detail.</p>
        `,
        tags: ['overview', 'mechanics'],
        certainty: CertaintyLevel.Testing,
        updated: new Date()
      },
      {
        id: 'systems-section',
        title: 'Systems',
        section: 'Systems',
        content: `
          <h2>Game Systems Overview</h2>
          <p>This section covers the various interconnected systems that make up the game.</p>
          
          <h3>System Categories:</h3>
          <ul>
            <li><strong>Social Mechanics</strong> - How characters interact</li>
            <li><strong>Adventure Mechanics</strong> - Exploration and discovery</li>
          </ul>
        `,
        tags: ['overview', 'systems'],
        certainty: CertaintyLevel.Testing,
        updated: new Date()
      },
      
      // Subsection pages
      {
        id: 'card-fundamentals-subsection',
        title: 'Card Fundamentals',
        section: 'Core Mechanics',
        subsection: 'Card Fundamentals',
        content: `
          <h2>Card Fundamentals</h2>
          <p>This subsection covers the basic concepts of how cards work in the game.</p>
          
          <h3>Key Concepts:</h3>
          <ul>
            <li>Card anatomy and structure</li>
            <li>Card types and their purposes</li>
            <li>How cards interact with each other</li>
          </ul>
          
          <p>Browse the individual pages to learn about specific card mechanics.</p>
        `,
        tags: ['cards', 'fundamentals'],
        certainty: CertaintyLevel.Testing,
        updated: new Date()
      },
      {
        id: 'social-mechanics-subsection',
        title: 'Social Mechanics',
        section: 'Systems',
        subsection: 'Social Mechanics',
        content: `
          <h2>Social Mechanics</h2>
          <p>Overview of how characters interact socially within the game world.</p>
          
          <h3>Topics Covered:</h3>
          <ul>
            <li>Conversation systems</li>
            <li>Reputation mechanics</li>
            <li>Relationship tracking</li>
          </ul>
        `,
        tags: ['social', 'interactions'],
        certainty: CertaintyLevel.Ideas,
        updated: new Date()
      }
    ];

    // Only add mock pages if they don't already exist
    const existingTitles = pages.map(p => p.title);
    const newMockPages = mockPages.filter(mock => !existingTitles.includes(mock.title));
    
    return [...pages, ...newMockPages];
  }

  /**
   * Generate navigation structure from pages
   */
  private generateNavigationFromPages(pages: Page[]): NavigationItem[] {
    const navigation: NavigationItem[] = [];
    
    // Group pages by Section, then by Subsection
    const sections = this.groupBy(pages, 'section');
    
    for (const [sectionName, sectionPages] of Object.entries(sections)) {
      if (!sectionName || sectionName.trim() === '') continue;
      
      const sectionItem: NavigationItem = {
        title: sectionName,
        icon: this.getSectionIcon(sectionName),
        isExpanded: true,
        children: []
      };
      
      // Group pages within this section by subsection
      const subsections = this.groupBy(sectionPages, 'subsection');
      
      for (const [subsectionName, subsectionPages] of Object.entries(subsections)) {
        if (!subsectionName || subsectionName.trim() === '') {
          // Pages without subsections go directly under the section
          for (const page of subsectionPages.sort((a, b) => a.title.localeCompare(b.title))) {
            sectionItem.children!.push({
              title: page.title,
              route: `/wiki/${this.encodeUrlSegment(sectionName)}/${this.encodeUrlSegment(page.title)}`,
              icon: this.getPageIcon(page.title)
            });
          }
        } else {
          // Create subsection with pages
          const subsectionItem: NavigationItem = {
            title: subsectionName,
            icon: this.getSubsectionIcon(subsectionName),
            isExpanded: true,
            children: []
          };
          
          for (const page of subsectionPages.sort((a, b) => a.title.localeCompare(b.title))) {
            subsectionItem.children!.push({
              title: page.title,
              route: `/wiki/${this.encodeUrlSegment(sectionName)}/${this.encodeUrlSegment(subsectionName)}/${this.encodeUrlSegment(page.title)}`,
              icon: this.getPageIcon(page.title)
            });
          }
          
          sectionItem.children!.push(subsectionItem);
        }
      }
      
      navigation.push(sectionItem);
    }
    
    return navigation.sort((a, b) => this.getSectionOrder(a.title) - this.getSectionOrder(b.title));
  }

  private groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    return array.reduce((groups, item) => {
      const groupKey = (item[key] as string) || '';
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    }, {} as Record<string, T[]>);
  }

  private encodeUrlSegment(str: string): string {
    return encodeURIComponent(str.toLowerCase().replace(/\s+/g, '-'));
  }

  private decodeUrlSegment(segment: string): string {
    return decodeURIComponent(segment)
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private getSectionOrder(section: string): number {
    switch (section) {
      case 'Core Mechanics': return 1;
      case 'Systems': return 2;
      case 'Content': return 3;
      case 'Setting & Lore': return 4;
      default: return 99;
    }
  }

  private getSectionIcon(section: string): string {
    switch (section) {
      case 'Core Mechanics': return 'bi-gear';
      case 'Systems': return 'bi-diagram-3';
      case 'Content': return 'bi-book';
      case 'Setting & Lore': return 'bi-globe';
      default: return 'bi-folder';
    }
  }

  private getSubsectionIcon(subsection: string): string {
    switch (subsection) {
      case 'Card Fundamentals': return 'bi-grid-3x3-gap';
      case 'Card Types': return 'bi-layers';
      case 'Resources': return 'bi-battery-half';
      case 'Tactical Combat': return 'bi-shield-check';
      case 'Social Mechanics': return 'bi-chat-dots';
      case 'Adventure Mechanics': return 'bi-compass';
      case 'Character Domains': return 'bi-person-badge';
      case 'Player Races': return 'bi-people';
      case 'World Building': return 'bi-map';
      default: return 'bi-folder2';
    }
  }

  private getPageIcon(pageTitle: string): string {
    switch (pageTitle) {
      case 'Card System': return 'bi-grid-3x3-gap';
      case 'Action Cards': return 'bi-layers';
      case 'Resource Management': return 'bi-battery-half';
      case 'Combat System': return 'bi-shield-check';
      case 'Social Encounters': return 'bi-chat-dots';
      case 'Exploration System': return 'bi-compass';
      case 'Warrior Domain': return 'bi-shield-fill-exclamation';
      case 'Scholar Domain': return 'bi-mortarboard';
      case 'Human Race': return 'bi-person';
      case 'World Overview': return 'bi-map';
      default: return 'bi-file-text';
    }
  }
}