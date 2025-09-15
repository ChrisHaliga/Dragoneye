import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CultureService, CultureData } from '../../../services/culture.service';

@Component({
  selector: 'app-economics',
  standalone: false,
  templateUrl: './economics.component.html',
  styleUrl: './economics.component.css'
})
export class EconomicsComponent implements OnInit {
  culture: CultureData | null = null;
  loading = true;
  error: string | null = null;
  cultureId: string = '';

  constructor(
    private route: ActivatedRoute,
    private cultureService: CultureService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cultureId = params['id'];
      if (this.cultureId) {
        this.loadCulture();
      }
    });
  }

  private loadCulture(): void {
    this.loading = true;
    this.error = null;
    
    this.cultureService.getCultureById(this.cultureId).subscribe({
      next: (culture) => {
        this.culture = culture;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading culture:', error);
        this.error = 'Failed to load culture information';
        this.loading = false;
      }
    });
  }
}
