import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Component initialization
  }

  navigateToCharacterCreator(): void {
    this.router.navigate(['/wiki/Characters/Character-Creation']);
  }

  navigateToQuickPlay(): void {
    this.router.navigate(['/wiki/Game-Mechanics/Quick-Start-Guide']);
  }

  navigateToWiki(): void {
    this.router.navigate(['/wiki/World/World-Overview']);
  }

  navigateToGettingStarted(): void {
    this.router.navigate(['/wiki/Core-Mechanics/Card-System']);
  }

  scrollToFeatures(): void {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
