import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-play',
  standalone: false,
  templateUrl: './how-to-play.component.html',
  styleUrl: './how-to-play.component.css'
})
export class HowToPlayComponent {

  navigateToGettingStarted() {
    window.location.href = '/wiki/how-to-play/getting-started';
  }

  navigateToCharacterCreator() {
    window.location.href = '/wiki/how-to-play/character-creation';
  }
}
