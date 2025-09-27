import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureCardButton } from '../feature-card/feature-card.component';

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

  // Feature card data
  getFeatureCards() {
    return [
      {
        backgroundImage: 'placeholder-images/rogue-elf.png',
        gradientColor: 'rgba(75,0,130,0.4)',
        badgeText: 'Tools',
        badgeStyle: 'primary' as const,
        title: 'Build the character you\'ve always imagined',
        buttons: [
          {
            text: 'Create',
            style: 'primary' as const,
            action: () => this.navigateToCharacterCreator(),
            width: '95px'
          }
        ] as FeatureCardButton[]
      },
      {
        backgroundImage: 'placeholder-images/mage-fighter-battle.png',
        gradientColor: 'rgba(220,20,60,0.4)',
        badgeText: 'Play',
        badgeStyle: 'danger' as const,
        title: 'Play online or order the starter set',
        buttons: [
          {
            text: 'Play',
            style: 'danger' as const,
            action: () => this.navigateToQuickPlay(),
            width: '85px'
          },
          {
            text: 'Order Now',
            style: 'danger' as const,
            action: () => this.navigateToOrder(),
            width: '110px'
          }
        ] as FeatureCardButton[]
      },
      {
        backgroundImage: 'placeholder-images/old-wizard.png',
        gradientColor: 'rgba(255,215,0,0.4)',
        badgeText: 'Lore',
        badgeStyle: 'warning' as const,
        title: 'Discover rich cultures and forgotten worlds',
        buttons: [
          {
            text: 'Chaos',
            style: 'warning' as const,
            action: () => this.navigateToAgeOfChaos(),
            width: '75px'
          },
          {
            text: 'Order',
            style: 'warning' as const,
            action: () => this.navigateToAgeOfOrder(),
            width: '75px'
          },
          {
            text: 'Ascension',
            style: 'warning' as const,
            action: () => this.navigateToAgeOfAscension(),
            width: '85px'
          }
        ] as FeatureCardButton[]
      },
      {
        backgroundImage: 'placeholder-images/beggar.png',
        gradientColor: 'rgba(139,69,19,0.4)',
        badgeText: 'Support',
        badgeStyle: 'secondary' as const,
        title: 'Purge this realm of artificial forces',
        buttons: [
          {
            text: 'Donate',
            style: 'secondary' as const,
            action: () => this.navigateToDonate(),
            width: '85px'
          },
          {
            text: 'Contact',
            style: 'secondary' as const,
            action: () => this.navigateToContact(),
            width: '95px'
          }
        ] as FeatureCardButton[]
      }
    ];
  }

  // Navigation methods
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

  // Updated navigation methods for the ages
  navigateToAgeOfChaos(): void {
    this.router.navigate(['/wiki/age-of-chaos']);
  }

  navigateToAgeOfOrder(): void {
    this.router.navigate(['/wiki/age-of-order']);
  }

  navigateToAgeOfAscension(): void {
    this.router.navigate(['/wiki/age-of-ascension']);
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
