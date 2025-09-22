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
    window.location.href = '/wiki/how-to-play/character-creation';
  }

  navigateToQuickPlay(): void {
    window.location.href = '/wiki/Game-Mechanics/Quick-Start-Guide';
  }

  navigateToWiki(): void {
    this.router.navigate(['/wiki/World/World-Overview']);
  }

  navigateToGettingStarted(): void {
    this.router.navigate(['/wiki/Core-Mechanics/Card-System']);
  }

  navigateToOrder(): void {
    // Navigate to ordering/purchasing page
    window.location.href = '/order';
  }

  navigateToLore(section?: string): void {
    // Navigate to lore section, optionally with specific subsection
    if (section) {
      this.router.navigate(['/wiki/World', section]);
    } else {
      this.router.navigate(['/wiki/World/World-Overview']);
    }
  }

  navigateToContact(): void {
    // Navigate to contact page
    this.router.navigate(['/contact']);
  }

  navigateToDonate(): void {
    // Navigate to donation page
    window.location.href = '/donate';
  }

  scrollToFeatures(): void {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
