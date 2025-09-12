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
      const id = params['id'];
      if (id) {
        this.loadPage(id);
      } else {
        // Default to Card System page if no ID
        this.loadPage('Card System');
      }
    });
  }

  loadPage(id: string): void {
    this.loading = true;
    this.error = '';
    
    console.log('Loading page with id:', id);
    
    this.pageService.getPageById(id).subscribe({
      next: (page) => {
        console.log('Page loaded successfully:', page);
        if (page) {
          this.page = page;
          this.error = '';
        } else {
          console.log('Page is null or undefined');
          this.error = 'Page not found';
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading page:', error);
        this.error = 'Unable to load page';
        this.loading = false;
      }
    });
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
