import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface FeatureCardButton {
  text: string;
  style: 'primary' | 'danger' | 'warning' | 'secondary';
  action: () => void;
  width?: string;
}

@Component({
  selector: 'app-feature-card',
  standalone: false,
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.css'
})
export class FeatureCardComponent {
  @Input() backgroundImage!: string;
  @Input() gradientColor!: string; // The color for the bottom of the gradient
  @Input() badgeText!: string;
  @Input() badgeStyle!: 'primary' | 'danger' | 'warning' | 'secondary';
  @Input() title!: string;
  @Input() buttons: FeatureCardButton[] = [];
  @Input() clickable: boolean = false;
  @Output() cardClick = new EventEmitter<void>();

  onCardClick(): void {
    if (this.clickable) {
      this.cardClick.emit();
    }
  }

  onButtonClick(event: Event, button: FeatureCardButton): void {
    event.stopPropagation();
    button.action();
  }

  getBadgeClass(): string {
    return `bg-${this.badgeStyle}`;
  }

  getButtonClass(style: string): string {
    return `btn-outline-${style}`;
  }

  getButtonStyles(button: FeatureCardButton): any {
    const baseStyles = {
      'font-size': '0.75rem',
      'padding': '6px 12px',
      'color': 'white',
      'font-weight': 'bold',
      'border-radius': '4px',
      'font-family': 'inherit'
    };

    // Add style-specific properties
    switch (button.style) {
      case 'primary':
        return {
          ...baseStyles,
          'border': '2px solid #60a5fa',
          'background': 'rgba(96, 165, 250, 0.33)',
          'width': button.width || '95px',
          'min-width': button.width || '95px'
        };
      case 'danger':
        return {
          ...baseStyles,
          'border': '2px solid #f87171',
          'background': 'rgba(248, 113, 113, 0.33)',
          'width': button.width || '85px',
          'min-width': button.width || '85px'
        };
      case 'warning':
        return {
          ...baseStyles,
          'border': '2px solid #fde047',
          'background': 'rgba(253, 224, 71, 0.33)',
          'font-size': '0.7rem',
          'padding': '5px 8px',
          'width': button.width || '75px',
          'min-width': button.width || '75px'
        };
      case 'secondary':
        return {
          ...baseStyles,
          'border': '2px solid #9ca3af',
          'background': 'rgba(156, 163, 175, 0.33)',
          'width': button.width || '85px',
          'min-width': button.width || '85px'
        };
      default:
        return baseStyles;
    }
  }

  getGradientStyle(): string {
    return `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, ${this.gradientColor} 100%)`;
  }
}
