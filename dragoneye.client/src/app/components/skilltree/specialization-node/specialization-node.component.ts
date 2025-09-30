import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specialization-node',
  standalone: false,
  templateUrl: './specialization-node.component.html',
  styleUrl: './specialization-node.component.css'
})
export class SpecializationNodeComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() isCentral: boolean = false;

  getPolygonPoints(): string {
    const size = 4;
    // Create a diamond shape
    return `${this.x},${this.y - size} ${this.x + size},${this.y} ${this.x},${this.y + size} ${this.x - size},${this.y}`;
  }
}
