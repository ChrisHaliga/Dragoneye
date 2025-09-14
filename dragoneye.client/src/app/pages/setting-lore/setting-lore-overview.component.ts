import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-setting-lore-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './setting-lore-overview.component.html',
  styles: [`
    .page-container {
      padding: 2rem;
      max-width: 1200px;
    }
  `]
})
export class SettingLoreOverviewComponent {
}