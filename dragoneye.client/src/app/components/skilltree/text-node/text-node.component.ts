import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-node',
  standalone: false,
  templateUrl: './text-node.component.html',
  styleUrl: './text-node.component.css'
})
export class TextNodeComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() textTransform: string = '';
  @Input() isCentral: boolean = false;
}
