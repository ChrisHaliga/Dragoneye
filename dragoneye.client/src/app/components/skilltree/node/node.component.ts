import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-node',
  standalone: false,
  template: `
    <app-specialization-node *ngIf="type === 'specialization'" [x]="x" [y]="y" [isCentral]="isCentral"></app-specialization-node>
    <app-stat-node *ngIf="type === 'stat'" [x]="x" [y]="y" [isCentral]="isCentral"></app-stat-node>
    <app-text-node *ngIf="type === 'text'" [x]="x" [y]="y" [isCentral]="isCentral" [textTransform]="textTransform"></app-text-node>
  `
})
export class NodeComponent {
  @Input() type: 'text' | 'specialization' | 'stat' = 'text';
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() textTransform: string = '';
  @Input() isCentral: boolean = false;
}