import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationItem } from '../../models/page.model';
import { CultureService, CultureSummary } from '../../services/culture.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  navigation: NavigationItem[] = [
    {
      title: 'How to Play',
      icon: 'bi-book',
      route: '/wiki/how-to-play',
      isExpanded: false,
      children: [
        {
          title: 'Getting Started',
          icon: 'bi-play-circle',
          route: '/wiki/how-to-play/getting-started',
          isExpanded: false,
          children: [
            { title: 'Player Guide', route: '/wiki/how-to-play/getting-started/player-guide', icon: 'bi-person' },
            { title: 'GM Guide', route: '/wiki/how-to-play/getting-started/gm-guide', icon: 'bi-person-gear' }
          ]
        },
        {
          title: 'Character Creation',
          icon: 'bi-person-plus',
          route: '/wiki/how-to-play/character-creation',
          isExpanded: false,
          children: [
            { title: 'Race', route: '/wiki/how-to-play/character-creation/race', icon: 'bi-people' },
            { title: 'Domains', route: '/wiki/how-to-play/character-creation/domains', icon: 'bi-collection' },
            { title: 'Stats', route: '/wiki/how-to-play/character-creation/stats', icon: 'bi-bar-chart' },
            { title: 'Background', route: '/wiki/how-to-play/character-creation/background', icon: 'bi-journal-text' },
            { title: 'Personality', route: '/wiki/how-to-play/character-creation/personality', icon: 'bi-emoji-smile' }
          ]
        },
        {
          title: 'Core Mechanics',
          icon: 'bi-gear',
          route: '/wiki/how-to-play/core-mechanics',
          isExpanded: false,
          children: [
            { title: 'Resolution Cards', route: '/wiki/how-to-play/core-mechanics/resolution-cards', icon: 'bi-card-heading' },
            { title: 'Stats & Progression', route: '/wiki/how-to-play/core-mechanics/stats-and-progression', icon: 'bi-graph-up' },
            { title: 'Skill Checks', route: '/wiki/how-to-play/core-mechanics/skill-challenges', icon: 'bi-check-circle' }
          ]
        },
        {
          title: 'Combat',
          icon: 'bi-shield-shaded',
          route: '/wiki/how-to-play/combat',
          isExpanded: false,
          children: [
            { title: 'The Battlefield', route: '/wiki/how-to-play/combat/the-battlefield', icon: 'bi-hexagon' },
            { title: 'Status Effects', route: '/wiki/how-to-play/combat/status-effects', icon: 'bi-shield-exclamation' },
            { title: 'Turns & Initiative', route: '/wiki/how-to-play/combat/turns-and-initiative', icon: 'bi-stopwatch' },
            { title: 'Actions & Passives', route: '/wiki/how-to-play/combat/actions-and-passives', icon: 'bi-lightning' }
          ]
        },
        {
          title: 'Roleplaying',
          icon: 'bi-chat-quote',
          route: '/wiki/how-to-play/roleplaying',
          isExpanded: false,
          children: [
            { title: 'Collaborative Storytelling', route: '/wiki/how-to-play/roleplaying/collaborative-storytelling', icon: 'bi-people-fill' },
            { title: 'Plotting & Motivations', route: '/wiki/how-to-play/roleplaying/plotting-and-motivations', icon: 'bi-diagram-2' },
            { title: 'In Character', route: '/wiki/how-to-play/roleplaying/in-character', icon: 'bi-person-badge' },
            { title: 'Out of Character', route: '/wiki/how-to-play/roleplaying/out-of-character', icon: 'bi-chat-square-text' },
            { title: 'Character Evolution', route: '/wiki/how-to-play/roleplaying/character-evolution', icon: 'bi-arrow-up-circle' }
          ]
        }
      ]
    },
    {
      title: 'Age of Chaos',
      icon: 'bi-1-circle',
      route: '/wiki/age-of-chaos',
      isExpanded: false,
      children: [] // Will be populated with cultures
    },
    {
      title: 'Age of Order',
      icon: 'bi-2-circle',
      route: '/wiki/age-of-order',
      isExpanded: false,
      children: [] // Will be populated with cultures
    },
    {
      title: 'Age of Ascension',
      icon: 'bi-3-circle',
      route: '/wiki/age-of-ascension',
      isExpanded: false,
      children: [] // Will be populated with cultures
    }
  ];
  searchTerm: string = '';
  isCollapsed: boolean = false;
  isLoading: boolean = false;
  
  @Output() collapsedChange = new EventEmitter<boolean>();

  constructor(private router: Router, private cultureService: CultureService) { 
    // Start collapsed on mobile
    this.isCollapsed = window.innerWidth <= 768;
    // Emit initial state after component initialization
    setTimeout(() => this.collapsedChange.emit(this.isCollapsed), 0);
  }

  ngOnInit(): void {
    // Load cultures and populate age sections
    this.loadCultures();
    
    // Listen for route changes to update expanded state
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateExpandedState(event.url);
    });
    
    // Set initial expanded state
    this.updateExpandedState(this.router.url);
  }

  toggleSection(section: NavigationItem): void {
    section.isExpanded = !section.isExpanded;
  }

  private loadCultures(): void {
    console.log('Loading cultures for sidebar...');
    this.cultureService.getAllCultures().subscribe({
      next: (cultures) => {
        this.populateAgesWithCultures(cultures);
      },
      error: (error) => {
        // Continue with empty culture lists if loading fails
      }
    });
  }

  private populateAgesWithCultures(cultures: CultureSummary[]): void {
    // Find age sections and add cultures as children
    const ageOfChaos = this.navigation.find(item => item.title === 'Age of Chaos');
    const ageOfOrder = this.navigation.find(item => item.title === 'Age of Order');
    const ageOfAscension = this.navigation.find(item => item.title === 'Age of Ascension');

    // Define culture subcategories (3rd order navigation)
    const cultureSubcategories = [
      { title: 'Politics', route: 'politics', icon: 'bi-building' },
      { title: 'Geography', route: 'geography', icon: 'bi-geo-alt' },
      { title: 'Economics', route: 'economics', icon: 'bi-currency-exchange' },
      { title: 'History', route: 'history', icon: 'bi-clock-history' },
      { title: 'Culture', route: 'culture', icon: 'bi-people' },
      { title: 'Religion', route: 'religion', icon: 'bi-star' },
      { title: 'Law', route: 'law', icon: 'bi-shield-check' },
      { title: 'Science', route: 'science', icon: 'bi-lightbulb' }
    ];

    if (ageOfChaos) {
      ageOfChaos.children = cultures
        .filter(culture => culture.age === 'chaos')
        .map(culture => ({
          title: culture.name,
          route: `/wiki/culture-overview/${culture.id}`,
          icon: 'bi-people',
          isExpanded: false,
          children: cultureSubcategories.map(subcategory => ({
            title: subcategory.title,
            route: `/wiki/culture-overview/${culture.id}/${subcategory.route}`,
            icon: subcategory.icon
          }))
        }));
    }

    if (ageOfOrder) {
      ageOfOrder.children = cultures
        .filter(culture => culture.age === 'order')
        .map(culture => ({
          title: culture.name,
          route: `/wiki/culture-overview/${culture.id}`,
          icon: 'bi-people',
          isExpanded: false,
          children: cultureSubcategories.map(subcategory => ({
            title: subcategory.title,
            route: `/wiki/culture-overview/${culture.id}/${subcategory.route}`,
            icon: subcategory.icon
          }))
        }));
    }

    if (ageOfAscension) {
      ageOfAscension.children = cultures
        .filter(culture => culture.age === 'ascension')
        .map(culture => ({
          title: culture.name,
          route: `/wiki/culture-overview/${culture.id}`,
          icon: 'bi-people',
          isExpanded: false,
          children: cultureSubcategories.map(subcategory => ({
            title: subcategory.title,
            route: `/wiki/culture-overview/${culture.id}/${subcategory.route}`,
            icon: subcategory.icon
          }))
        }));
    }
  }

  navigateToItem(item: NavigationItem): void {
    if (item.route) {
      this.router.navigate([item.route]);
      this.onPageClick();
    }
  }

  onItemClick(event: Event, item: NavigationItem): void {
    if (item.route) {
      event.stopPropagation();
      this.navigateToItem(item);
    }
  }

  private updateExpandedState(url: string): void {
    // Parse the URL to extract the current path
    const urlParts = url.split('/').filter(part => part.length > 0);
    
    if (urlParts.length === 0) {
      // Home page - collapse everything
      this.collapseAll();
      return;
    }

    // Collapse all first
    this.collapseAll();

    // Expand path to current page
    this.expandPathForUrl(this.navigation, urlParts);
  }

  private expandPathForUrl(items: NavigationItem[], urlParts: string[]): void {
    for (const item of items) {
      if (item.route && this.routeMatchesUrlParts(item.route, urlParts)) {
        // This item is in the current path, expand it and its parents
        item.isExpanded = true;
        if (item.children) {
          this.expandPathForUrl(item.children, urlParts);
        }
        return;
      }
      
      if (item.children) {
        // Check children and expand if any match
        const hasMatchingChild = this.hasMatchingChildRoute(item.children, urlParts);
        if (hasMatchingChild) {
          item.isExpanded = true;
          this.expandPathForUrl(item.children, urlParts);
        }
      }
    }
  }

  private routeMatchesUrlParts(route: string, urlParts: string[]): boolean {
    const routeParts = route.split('/').filter(part => part.length > 0);
    if (routeParts.length !== urlParts.length) return false;
    
    return routeParts.every((part, index) => 
      part.toLowerCase() === urlParts[index]?.toLowerCase()
    );
  }

  private hasMatchingChildRoute(items: NavigationItem[], urlParts: string[]): boolean {
    for (const item of items) {
      if (item.route && this.routeMatchesUrlParts(item.route, urlParts)) {
        return true;
      }
      if (item.children && this.hasMatchingChildRoute(item.children, urlParts)) {
        return true;
      }
    }
    return false;
  }

  private collapseAll(): void {
    this.collapseItems(this.navigation);
  }

  private collapseItems(items: NavigationItem[]): void {
    items.forEach(item => {
      item.isExpanded = false;
      if (item.children) {
        this.collapseItems(item.children);
      }
    });
  }

  private decodeUrlSegment(segment: string): string {
    return decodeURIComponent(segment)
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  trackByTitle(index: number, item: NavigationItem): string {
    return item.title;
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

  isItemActive(item: NavigationItem): boolean {
    const currentUrl = this.router.url;
    return item.route === currentUrl;
  }
}
