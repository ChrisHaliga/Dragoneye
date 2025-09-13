import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../../services/page.service';
import { Page, CertaintyLabels, CertaintyColors, CertaintyIcons } from '../../models/page.model';

@Component({
  selector: 'app-page-view',
  standalone: false,
  templateUrl: './page-view.component.html',
  styleUrl: './page-view.component.css'
})
export class PageViewComponent implements OnInit {
  page?: Page;
  loading: boolean = true;
  error: string = '';
  
  // Expose helper objects to template
  certaintyLabels = CertaintyLabels;
  certaintyColors = CertaintyColors;
  certaintyIcons = CertaintyIcons;

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Handle new hierarchical routes
      const section = params['section'];
      const subsection = params['subsection'];
      const title = params['title'];
      const legacyId = params['id'];
      
      if (legacyId) {
        // Legacy route: /pages/:id
        this.loadPageByTitle(legacyId);
      } else if (section) {
        // New hierarchical routes
        this.loadPageByPath(section, subsection, title);
      } else {
        // Default to Card System page if no parameters
        this.loadPageByTitle('Card System');
      }
    });
  }

  loadPageByPath(section: string, subsection?: string, title?: string): void {
    this.loading = true;
    this.error = '';
    
    console.log('Loading page with path:', { section, subsection, title });
    
    this.pageService.getPageByPath(section, subsection, title).subscribe({
      next: (page: Page | null) => {
        console.log('Page loaded successfully:', page);
        if (page) {
          this.page = page;
          this.error = '';
        } else {
          console.log('Page not found for path:', { section, subsection, title });
          this.error = 'Page not found';
        }
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error loading page:', error);
        this.error = 'Unable to load page';
        this.loading = false;
      }
    });
  }

  loadPageByTitle(title: string): void {
    this.loading = true;
    this.error = '';
    
    console.log('Loading page with title:', title);
    
    this.pageService.getPageByTitle(title).subscribe({
      next: (page: Page | null) => {
        console.log('Page loaded successfully:', page);
        if (page) {
          this.page = page;
          this.error = '';
        } else {
          console.log('Page not found for title:', title);
          this.error = 'Page not found';
        }
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error loading page:', error);
        this.error = 'Unable to load page';
        this.loading = false;
      }
    });
  }

  private decodeUrlSegment(segment: string): string {
    // Convert URL-encoded segment back to original title
    // e.g., "card-system" -> "Card System"
    return decodeURIComponent(segment)
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  onEdit(): void {
    // TODO: Implement edit functionality
  }

  onHistory(): void {
    // TODO: Implement history functionality
  }

  onShare(): void {
    // TODO: Implement share functionality
  }

  formatContent(content: string): string {
    if (!content) return '';
    
    // Simple processing to handle wiki-style links and basic formatting
    return content
      .replace(/\[\[([^\]]+)\]\]/g, '<a href="#" class="wiki-link">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  }
}
