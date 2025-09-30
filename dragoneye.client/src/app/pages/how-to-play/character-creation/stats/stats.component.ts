import { Component, OnInit } from '@angular/core';
import { SkillTreeData } from '../../../../models/skilltree.model';
import { SkillTreeService } from '../../../../services/skilltree.service';

@Component({
  selector: 'app-stats',
  standalone: false,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent implements OnInit {
  skillTreeData: SkillTreeData | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(private skillTreeService: SkillTreeService) {}

  ngOnInit(): void {
    this.loadSkillTreeData();
  }

  private loadSkillTreeData(): void {
    this.skillTreeService.getSkillTreeData().subscribe({
      next: (data) => {
        this.skillTreeData = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load skill tree data';
        this.isLoading = false;
        console.error('Error loading skill tree data:', err);
      }
    });
  }
}
