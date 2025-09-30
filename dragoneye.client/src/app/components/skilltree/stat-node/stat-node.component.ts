import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-node',
  standalone: false,
  templateUrl: './stat-node.component.html',
  styleUrl: './stat-node.component.css'
})
export class StatNodeComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() isCentral: boolean = false;
}
