import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Culture } from './models/page.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Game Design Wiki';
  sidebarCollapsed = true; // Track sidebar state
  isCultureEditorOpen = false;
  editingCulture: Culture | null = null;
  cultureEditorActiveTab = 'basic';
  
  @ViewChild('sidebar') sidebar!: SidebarComponent;
  
  constructor(private router: Router) {}
  
  toggleMobileSidebar(): void {
    if (this.sidebar) {
      this.sidebar.toggleSidebar();
    }
  }
  
  onSidebarCollapseChange(collapsed: boolean | Event): void {
    // Handle both boolean values and events
    if (typeof collapsed === 'boolean') {
      this.sidebarCollapsed = collapsed;
    } else {
      // If it's an event, get the state from the sidebar component
      this.sidebarCollapsed = this.sidebar?.isCollapsed ?? true;
    }
  }

  // Called from navbar for creating new culture
  openCultureEditor(): void {
    this.editingCulture = null;
    this.cultureEditorActiveTab = 'basic';
    this.isCultureEditorOpen = true;
  }

  // Called from floating edit button for editing existing culture
  openCultureEditorForEdit(data: {culture: Culture, activeTab: string}): void {
    this.editingCulture = data.culture;
    this.cultureEditorActiveTab = data.activeTab;
    this.isCultureEditorOpen = true;
  }

  closeCultureEditor(): void {
    this.isCultureEditorOpen = false;
    this.editingCulture = null;
    this.cultureEditorActiveTab = 'basic';
  }

  onCultureCreated(culture: Culture): void {
    console.log('Culture created:', culture);
    this.closeCultureEditor();
    // Navigate to the new culture page
    this.router.navigate(['/wiki/culture-overview', culture.id]);
  }

  onCultureUpdated(culture: Culture): void {
    console.log('Culture updated:', culture);
    this.closeCultureEditor();
    // Reload the current page to show updated content
    window.location.reload();
  }
}
