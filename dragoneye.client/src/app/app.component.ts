import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Game Design Wiki';
  sidebarCollapsed = true; // Track sidebar state
  
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
}
