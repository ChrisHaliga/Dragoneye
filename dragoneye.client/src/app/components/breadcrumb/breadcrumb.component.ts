import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PageService } from '../../services/page.service';
import { filter } from 'rxjs/operators';

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
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.generateBreadcrumb();
    });
  }

  private generateBreadcrumb(): void {
    const url = this.router.url;
    this.breadcrumbs = [
      { label: 'Home', route: '/' }
    ];
    
    // Parse hierarchical route: /section/subsection/title
    const urlParts = url.split('/').filter(part => part.length > 0);
    
    if (urlParts.length >= 1) {
      // Add Section
      const section = this.decodeUrlSegment(urlParts[0]);
      this.breadcrumbs.push({ 
        label: section, 
        route: `/${urlParts[0]}` 
      });
      
      if (urlParts.length >= 2) {
        // Add Subsection
        const subsection = this.decodeUrlSegment(urlParts[1]);
        this.breadcrumbs.push({ 
          label: subsection, 
          route: `/${urlParts[0]}/${urlParts[1]}` 
        });
        
        if (urlParts.length >= 3) {
          // Add Page Title (no route for current page)
          const title = this.decodeUrlSegment(urlParts[2]);
          this.breadcrumbs.push({ 
            label: title 
          });
        }
      }
    }
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
