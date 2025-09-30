import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-node',
  standalone: false,
  templateUrl: './skill-node.component.html',
  styleUrl: './skill-node.component.css'
})
export class SkillNodeComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() isCentral: boolean = false;
}
