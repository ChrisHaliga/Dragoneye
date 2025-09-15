import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CultureService, CultureData } from '../../../services/culture.service';

@Component({
  selector: 'app-culture-overview',
  standalone: false,
  templateUrl: './culture-overview.component.html',
  styleUrl: './culture-overview.component.css'
})
export class CultureOverviewComponent implements OnInit, AfterViewInit {
  culture: CultureData | null = null;
  loading = true;
  error: string | null = null;
  cultureId: string = '';
  category: string | null = null;
  private shouldScrollToCategory = false;

  constructor(
    private route: ActivatedRoute,
    private cultureService: CultureService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cultureId = params['id'];
      
      // Extract category from URL path
      const urlSegments = this.route.snapshot.url;
      if (urlSegments.length > 2) {
        this.category = urlSegments[2].path;
        this.shouldScrollToCategory = true;
      } else {
        this.category = null;
        this.shouldScrollToCategory = false;
      }
      
      if (this.cultureId) {
        this.loadCulture();
      }
    });
  }

  ngAfterViewInit(): void {
    // Scroll to category section after view is initialized
    if (this.shouldScrollToCategory && this.category) {
      setTimeout(() => {
        this.scrollToCategory(this.category!);
      }, 100);
    }
  }

  private loadCulture(): void {
    this.loading = true;
    this.error = null;
    
    this.cultureService.getCultureById(this.cultureId).subscribe({
      next: (culture) => {
        this.culture = culture;
        this.loading = false;
        
        // Scroll to category after data is loaded
        if (this.shouldScrollToCategory && this.category) {
          setTimeout(() => {
            this.scrollToCategory(this.category!);
          }, 100);
        }
      },
      error: (error) => {
        console.error('Error loading culture:', error);
        this.error = 'Failed to load culture information';
        this.loading = false;
      }
    });
  }

  private scrollToCategory(category: string): void {
    const element = document.getElementById(`section-${category}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Add highlight effect
      element.classList.add('highlight-section');
      setTimeout(() => {
        element.classList.remove('highlight-section');
      }, 2000);
    }
  }
}
