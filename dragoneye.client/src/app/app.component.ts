import { Component, ViewChild } from '@angular/core';
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
    // TODO: Refresh any culture lists or navigate to the new culture
    this.closeCultureEditor();
  }

  onCultureUpdated(culture: Culture): void {
    console.log('Culture updated:', culture);
    // TODO: Refresh the current culture page or handle navigation
    this.closeCultureEditor();
  }
}
