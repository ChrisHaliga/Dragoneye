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

  getFeatureCards() {
    return [
      {
        backgroundImage: '/assets/images/character-creation-bg.jpg',
        gradientColor: 'rgba(52, 152, 219, 0.8)',
        badgeText: 'Quick Start',
        badgeStyle: 'badge-primary',
        title: 'Character Creation',
        buttons: [
          { text: 'Create Character', class: 'btn-primary', action: () => this.navigateToCharacterCreator() }
        ]
      },
      {
        backgroundImage: '/assets/images/lore-bg.jpg',
        gradientColor: 'rgba(155, 89, 182, 0.8)',
        badgeText: 'Explore',
        badgeStyle: 'badge-secondary',
        title: 'World Lore',
        buttons: [
          { text: 'Explore Lore', class: 'btn-secondary', action: () => this.navigateToLore() }
        ]
      }
    ];
  }
}
