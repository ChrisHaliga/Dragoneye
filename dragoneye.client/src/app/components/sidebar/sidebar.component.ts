import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationItem } from '../../models/page.model';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  navigation: NavigationItem[] = [
    {
      title: 'Game Mechanics',
      icon: 'bi-gear',
      route: '/wiki/game-mechanics',
      isExpanded: false,
      children: [
        {
          title: 'Core Systems',
          icon: 'bi-cpu',
          route: '/wiki/game-mechanics/core-systems',
          isExpanded: false,
          children: [
            { title: 'Card System', route: '/wiki/game-mechanics/core-systems/card-system', icon: 'bi-collection' }
          ]
        }
      ]
    },
    {
      title: 'Systems',
      icon: 'bi-diagram-3',
      route: '/wiki/systems',
      isExpanded: false,
      children: [
        {
          title: 'Tactical Combat',
          icon: 'bi-shield-fill',
          route: '/wiki/systems/tactical-combat',
          isExpanded: false,
          children: [
            { title: 'Combat System', route: '/wiki/systems/tactical-combat/combat-system', icon: 'bi-crosshair' }
          ]
        },
        {
          title: 'Adventure Mechanics',
          icon: 'bi-compass',
          route: '/wiki/systems/adventure-mechanics',
          isExpanded: false,
          children: []
        }
      ]
    },
    {
      title: 'Content',
      icon: 'bi-person-circle',
      route: '/wiki/content',
      isExpanded: false,
      children: [
        {
          title: 'Character Domains',
          icon: 'bi-person-gear',
          route: '/wiki/content/character-domains',
          isExpanded: false,
          children: [
            { title: 'Warrior Domain', route: '/wiki/content/character-domains/warrior-domain', icon: 'bi-shield-shaded' },
            { title: 'Scholar Domain', route: '/wiki/content/character-domains/scholar-domain', icon: 'bi-book' }
          ]
        },
        {
          title: 'Player Races',
          icon: 'bi-people',
          route: '/wiki/content/player-races',
          isExpanded: false,
          children: [
            { title: 'Human Race', route: '/wiki/content/player-races/human-race', icon: 'bi-person' },
            { title: 'Elf Race', route: '/wiki/content/player-races/elf-race', icon: 'bi-tree' },
            { title: 'Dwarf Race', route: '/wiki/content/player-races/dwarf-race', icon: 'bi-hammer' }
          ]
        }
      ]
    },
    {
      title: 'Setting & Lore',
      icon: 'bi-globe',
      route: '/wiki/setting-lore',
      isExpanded: false,
      children: [
        {
          title: 'World Building',
          icon: 'bi-map',
          route: '/wiki/setting-lore/world-building',
          isExpanded: false,
          children: [
            { title: 'World Overview', route: '/wiki/setting-lore/world-building/world-overview', icon: 'bi-globe-americas' }
          ]
        }
      ]
    }
  ];
  searchTerm: string = '';
  isCollapsed: boolean = false;
  isLoading: boolean = false;
  
  @Output() collapsedChange = new EventEmitter<boolean>();

  constructor(private router: Router) { 
    // Start collapsed on mobile
    this.isCollapsed = window.innerWidth <= 768;
    // Emit initial state after component initialization
    setTimeout(() => this.collapsedChange.emit(this.isCollapsed), 0);
  }

  ngOnInit(): void {
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
