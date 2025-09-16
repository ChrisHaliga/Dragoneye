import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Culture } from '../../models/page.model';
import { CultureService } from '../../services/culture.service';

@Component({
  selector: 'app-floating-culture-edit',
  standalone: false,
  templateUrl: './floating-culture-edit.component.html',
  styleUrl: './floating-culture-edit.component.css'
})
export class FloatingCultureEditComponent implements OnInit, OnDestroy {
  @Output() editCulture = new EventEmitter<{culture: Culture, activeTab: string}>();

  isVisible = false;
  isLoading = false;
  currentCultureId = '';
  currentTab = 'basic';
  
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cultureService: CultureService
  ) {}

  ngOnInit(): void {
    // Listen to route changes
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.updateVisibilityAndContext();
      });

    // Check initial route
    this.updateVisibilityAndContext();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateVisibilityAndContext(): void {
    const url = this.router.url;
    
    // Check if we're on a culture page
    const cultureMatch = url.match(/\/wiki\/culture-overview\/([^\/]+)(?:\/(.+))?/);
    
    if (cultureMatch) {
      this.isVisible = true;
      this.currentCultureId = cultureMatch[1];
      
      // Determine the current tab based on the route
      const section = cultureMatch[2];
      this.currentTab = this.mapSectionToTab(section);
    } else {
      this.isVisible = false;
      this.currentCultureId = '';
      this.currentTab = 'basic';
    }
  }

  private mapSectionToTab(section: string | undefined): string {
    if (!section) return 'basic'; // Overview page
    
    switch (section) {
      case 'politics': return 'politics';
      case 'geography': return 'geography';
      case 'economics': return 'economics';
      case 'history': return 'history';
      case 'culture': return 'culture';
      case 'religion': return 'religion';
      case 'law': return 'law';
      case 'science': return 'science';
      default: return 'basic';
    }
  }

  onEditClick(): void {
    if (!this.currentCultureId || this.isLoading) return;

    this.isLoading = true;

    this.cultureService.getCultureById(this.currentCultureId).subscribe({
      next: (culture) => {
        this.editCulture.emit({
          culture: culture,
          activeTab: this.currentTab
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading culture for editing:', error);
        this.isLoading = false;
      }
    });
  }
}
