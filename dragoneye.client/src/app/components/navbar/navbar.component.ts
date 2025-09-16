import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() mobileToggle = new EventEmitter<void>();
  @Output() addCulture = new EventEmitter<void>();
  
  searchTerm: string = '';

  constructor(private router: Router) { }

  onMobileToggle(): void {
    this.mobileToggle.emit();
  }

  onSearch(): void {
    if (this.searchTerm.trim()) {
      console.log('Searching for:', this.searchTerm);
      // TODO: Implement search functionality
      // this.router.navigate(['/search'], { queryParams: { q: this.searchTerm } });
    }
  }

  onNewPage(): void {
    console.log('New page requested');
    // TODO: Implement new page functionality
    // this.router.navigate(['/new']);
  }

  onCardEditor(): void {
    console.log('Card editor requested');
    // TODO: Implement card editor functionality
    // this.router.navigate(['/tools/card-editor']);
  }

  onDomainEditor(): void {
    console.log('Domain editor requested');
    // TODO: Implement domain editor functionality
    // this.router.navigate(['/tools/domain-editor']);
  }

  onRecentChanges(): void {
    console.log('Recent changes requested');
    // TODO: Implement recent changes functionality
    // this.router.navigate(['/recent']);
  }

  onAddCulture(): void {
    this.addCulture.emit();
  }
}
