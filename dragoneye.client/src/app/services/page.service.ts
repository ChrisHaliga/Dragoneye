import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Page, NavigationItem } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private apiService: ApiService) { }

  /**
   * Get all pages from the backend
   */
  getPages(): Observable<Page[]> {
    return this.apiService.get<Page[]>('pages')
      .pipe(
        map(pages => this.normalizePages(pages))
      );
  }

  /**
   * Get a specific page by ID from the backend
   */
  getPageById(id: string): Observable<Page | null> {
    return this.apiService.get<Page>(`pages/${encodeURIComponent(id)}`)
      .pipe(
        map(page => this.normalizePage(page))
      );
  }

  /**
   * Get navigation structure from the backend
   */
  getNavigation(): Observable<NavigationItem[]> {
    return this.apiService.get<NavigationItem[]>('pages/navigation');
  }

  /**
   * Normalize page data from API (handle date strings, etc.)
   */
  private normalizePages(pages: any[]): Page[] {
    return pages.map(page => this.normalizePage(page));
  }

  /**
   * Normalize a single page from API
   */
  private normalizePage(page: any): Page {
    return {
      ...page,
      updated: new Date(page.updated)
    };
  }
}