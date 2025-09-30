import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: false,
  template: `
    <div class="feature-card" [style.background-image]="'url(' + backgroundImage + ')'" 
         [style.background]="gradientOverlay">
      <div class="card-content">
        <div class="badge" [ngClass]="badgeStyle" *ngIf="badgeText">{{badgeText}}</div>
        <h3 *ngIf="title">{{title}}</h3>
        <div class="buttons" *ngIf="buttons && buttons.length > 0">
          <button *ngFor="let button of buttons" 
                  class="btn" 
                  [ngClass]="button.class"
                  (click)="button.action && button.action()">
            {{button.text}}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .feature-card {
      background-size: cover;
      background-position: center;
      border-radius: 8px;
      overflow: hidden;
      min-height: 200px;
      display: flex;
      align-items: flex-end;
      position: relative;
    }
    
    .card-content {
      background: rgba(0,0,0,0.7);
      color: white;
      padding: 1rem;
      width: 100%;
    }
    
    .badge {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }
    
    .buttons {
      margin-top: 1rem;
    }
    
    .buttons .btn {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
    }
  `]
})
export class FeatureCardComponent {
  @Input() backgroundImage: string = '';
  @Input() gradientColor: string = '';
  @Input() badgeText: string = '';
  @Input() badgeStyle: string = '';
  @Input() title: string = '';
  @Input() buttons: Array<{text: string, class: string, action?: () => void}> = [];
  @Input() clickable: boolean = false;

  get gradientOverlay(): string {
    if (this.gradientColor) {
      return `linear-gradient(rgba(0,0,0,0.3), ${this.gradientColor}), url(${this.backgroundImage})`;
    }
    return '';
  }
}