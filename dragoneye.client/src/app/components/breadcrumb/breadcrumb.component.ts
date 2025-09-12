import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../../services/page.service';

interface BreadcrumbItem {
  label: string;
  route?: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: false,
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: BreadcrumbItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageService: PageService
  ) { }

  ngOnInit(): void {
    this.generateBreadcrumb();
    
    // Listen to route changes
    this.router.events.subscribe(() => {
      this.generateBreadcrumb();
    });
  }

  private generateBreadcrumb(): void {
    // TODO: Generate breadcrumb based on actual page hierarchy
    const url = this.router.url;
    this.breadcrumbs = [
      { label: 'Home', route: '/' }
    ];
    
    // Add current page if we're on a page route
    if (url.startsWith('/pages/')) {
      const pageId = decodeURIComponent(url.replace('/pages/', ''));
      this.breadcrumbs.push({ label: pageId });
    }
  }

  navigateTo(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }
}
