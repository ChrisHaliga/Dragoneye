import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CertaintyLevel, CertaintyLabels, CertaintyColors, CertaintyIcons } from '../../models/page.model';

@Component({
  selector: 'app-page-header',
  standalone: false,
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() certainty: CertaintyLevel = CertaintyLevel.Ideas;
  @Input() updated: Date = new Date();

  @Output() edit = new EventEmitter<void>();
  @Output() history = new EventEmitter<void>();
  @Output() share = new EventEmitter<void>();

  // Expose helper objects to template
  certaintyLabels = CertaintyLabels;
  certaintyColors = CertaintyColors;
  certaintyIcons = CertaintyIcons;

  onEdit(): void {
    this.edit.emit();
  }

  onHistory(): void {
    this.history.emit();
  }

  onShare(): void {
    this.share.emit();
  }
}
