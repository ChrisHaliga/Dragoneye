import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PageService } from '../../services/page.service';
import { Page } from '../../models/page.model';

interface NavigationSection {
  name: string;
  icon: string;
  isExpanded: boolean;
  hasContent: boolean;  // Whether this section has its own content page
  subsections: NavigationSubsection[];
}

interface NavigationSubsection {
  name: string;
  icon: string;
  isExpanded: boolean;
  hasContent: boolean;  // Whether this subsection has its own content page
  pages: NavigationPage[];
}

interface NavigationPage {
  title: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  sections: NavigationSection[] = [];
  searchTerm: string = '';
  isCollapsed: boolean = false;
  isLoading: boolean = true;
  
  @Output() collapsedChange = new EventEmitter<boolean>();

  constructor(private pageService: PageService, private router: Router) { 
    // Start collapsed on mobile
    this.isCollapsed = window.innerWidth <= 768;
    // Emit initial state after component initialization
    setTimeout(() => this.collapsedChange.emit(this.isCollapsed), 0);
  }

  ngOnInit(): void {
    this.loadNavigation();
    
    // Listen for route changes to update expanded state
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateExpandedState(event.url);
      // Trigger change detection for active state updates
      // The active state will automatically update via the template binding
    });
  }

  loadNavigation(): void {
    this.isLoading = true;
    this.pageService.getPages().subscribe({
      next: (pages) => {
        console.log('Loaded pages for navigation:', pages);
        this.sections = this.buildNavigationFromPages(pages);
        console.log('Built navigation sections:', this.sections);
        this.updateExpandedState(this.router.url);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading pages:', error);
        this.sections = [];
        this.isLoading = false;
      }
    });
  }

  private buildNavigationFromPages(pages: Page[]): NavigationSection[] {
    const sectionMap: { [sectionName: string]: { [subsectionName: string]: Page[] } } = {};

    // Group pages by section and subsection
    for (let page of pages) {
      if (!page.section) continue;

      if (!sectionMap[page.section]) {
        sectionMap[page.section] = {};
      }

      const subsectionKey = page.subsection || '_direct';
      if (!sectionMap[page.section][subsectionKey]) {
        sectionMap[page.section][subsectionKey] = [];
      }

      sectionMap[page.section][subsectionKey].push(page);
    }

    // Convert to NavigationSection array
    const sections: NavigationSection[] = [];

    for (const sectionName of Object.keys(sectionMap)) {
      const subsections: NavigationSubsection[] = [];

      // Check if this section has its own content page
      const hasSectionContent = pages.some(p => 
        p.section === sectionName && !p.subsection && p.title === sectionName
      );

      for (const subsectionKey of Object.keys(sectionMap[sectionName])) {
        if (subsectionKey === '_direct') {
          // Pages without subsections - skip for now, handle differently if needed
          continue;
        }

        const pagesInSubsection = sectionMap[sectionName][subsectionKey];
        
        // Check if this subsection has its own content page
        const hasSubsectionContent = pagesInSubsection.some(p => 
          p.subsection === subsectionKey && p.title === subsectionKey
        );

        const navigationPages: NavigationPage[] = pagesInSubsection
          .filter(page => page.title !== subsectionKey) // Exclude subsection content page from children
          .map(page => ({
            title: page.title,
            route: `/${this.encodeUrlSegment(sectionName)}/${this.encodeUrlSegment(subsectionKey)}/${this.encodeUrlSegment(page.title)}`,
            icon: this.getPageIcon(page.title)
          }));

        subsections.push({
          name: subsectionKey,
          icon: this.getSubsectionIcon(subsectionKey),
          isExpanded: false, // Start collapsed
          hasContent: hasSubsectionContent,
          pages: navigationPages.sort((a, b) => a.title.localeCompare(b.title))
        });
      }

      sections.push({
        name: sectionName,
        icon: this.getSectionIcon(sectionName),
        isExpanded: false, // Start collapsed
        hasContent: hasSectionContent,
        subsections: subsections.sort((a, b) => a.name.localeCompare(b.name))
      });
    }

    return sections.sort((a, b) => this.getSectionOrder(a.name) - this.getSectionOrder(b.name));
  }

  toggleSection(section: NavigationSection): void {
    section.isExpanded = !section.isExpanded;
  }

  toggleSubsection(subsection: NavigationSubsection): void {
    subsection.isExpanded = !subsection.isExpanded;
  }

  navigateToSection(section: NavigationSection): void {
    if (section.hasContent) {
      const route = `/${this.encodeUrlSegment(section.name)}`;
      this.router.navigate([route]);
      this.onPageClick();
    }
  }

  navigateToSubsection(section: NavigationSection, subsection: NavigationSubsection): void {
    if (subsection.hasContent) {
      const route = `/${this.encodeUrlSegment(section.name)}/${this.encodeUrlSegment(subsection.name)}`;
      this.router.navigate([route]);
      this.onPageClick();
    }
  }

  onSectionContentClick(event: Event, section: NavigationSection): void {
    if (section.hasContent) {
      event.stopPropagation(); // Prevent the container toggle
      this.navigateToSection(section);
    }
  }

  onSubsectionContentClick(event: Event, section: NavigationSection, subsection: NavigationSubsection): void {
    if (subsection.hasContent) {
      event.stopPropagation(); // Prevent the container toggle
      this.navigateToSubsection(section, subsection);
    }
  }

  private updateExpandedState(url: string): void {
    // Parse the URL to get section, subsection, and page
    const urlParts = url.split('/').filter(part => part.length > 0);
    
    if (urlParts.length === 0) {
      // Home page - collapse everything
      this.collapseAll();
      return;
    }

    const currentSection = this.decodeUrlSegment(urlParts[0]);
    const currentSubsection = urlParts.length > 1 ? this.decodeUrlSegment(urlParts[1]) : null;

    // Collapse all sections and subsections first
    this.collapseAll();

    // Expand only the current path
    this.sections.forEach(section => {
      if (section.name === currentSection) {
        section.isExpanded = true;
        
        if (currentSubsection) {
          section.subsections.forEach(subsection => {
            if (subsection.name === currentSubsection) {
              subsection.isExpanded = true;
            }
          });
        }
      }
    });
  }

  private collapseAll(): void {
    this.sections.forEach(section => {
      section.isExpanded = false;
      section.subsections.forEach(subsection => {
        subsection.isExpanded = false;
      });
    });
  }

  private decodeUrlSegment(segment: string): string {
    return decodeURIComponent(segment)
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  trackByName(index: number, item: any): string {
    return item.name || item.title;
  }

  private encodeUrlSegment(str: string): string {
    return encodeURIComponent(str.toLowerCase().replace(/\s+/g, '-'));
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

  onSearch(): void {
    // TODO: Implement search functionality
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed);
  }

  onNewPage(): void {
    // TODO: Implement new page functionality
  }

  onRecentChanges(): void {
    // TODO: Implement recent changes functionality
  }

  onPageClick(): void {
    // Close sidebar on mobile when a page is clicked
    if (this.isMobile()) {
      this.isCollapsed = true;
      this.collapsedChange.emit(this.isCollapsed);
    }
  }

  private isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  isSectionActive(section: NavigationSection): boolean {
    const currentUrl = this.router.url;
    const urlParts = currentUrl.split('/').filter(part => part.length > 0);
    
    if (urlParts.length === 0) return false; // Home page
    
    const currentSection = this.decodeUrlSegment(urlParts[0]);
    return currentSection === section.name;
  }
}
