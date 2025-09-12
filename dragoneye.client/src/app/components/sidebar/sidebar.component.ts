import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { NavigationItem } from '../../models/page.model';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  navigationItems: NavigationItem[] = [];
  searchTerm: string = '';
  isCollapsed: boolean = false;
  isLoading: boolean = true;

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.loadNavigation();
  }

  loadNavigation(): void {
    this.isLoading = true;
    this.pageService.getNavigation().subscribe({
      next: (items) => {
        this.navigationItems = items;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading navigation:', error);
        this.navigationItems = [];
        this.isLoading = false;
      }
    });
  }

  onSearch(): void {
    // TODO: Implement search functionality
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onNewPage(): void {
    // TODO: Implement new page functionality
  }

  onRecentChanges(): void {
    // TODO: Implement recent changes functionality
  }
}
