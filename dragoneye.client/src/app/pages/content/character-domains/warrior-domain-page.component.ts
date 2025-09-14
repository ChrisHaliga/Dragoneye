import { Component } from '@angular/core';

@Component({
  selector: 'app-warrior-domain-page',
  standalone: true,
  template: `
    <div class="page-content">
      <div class="page-header mb-4">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <h1 class="page-title">Warrior Domain</h1>
            <div class="page-meta">
              <span class="badge bg-success me-2">
                <i class="bi bi-lock-fill me-1"></i>Locked
              </span>
              <span class="text-muted">
                <i class="bi bi-calendar3 me-1"></i>Updated September 10, 2025
              </span>
            </div>
          </div>
          <div class="page-actions">
            <button class="btn btn-outline-secondary btn-sm me-2">
              <i class="bi bi-pencil me-1"></i>Edit
            </button>
            <button class="btn btn-outline-secondary btn-sm me-2">
              <i class="bi bi-clock-history me-1"></i>History
            </button>
            <button class="btn btn-outline-secondary btn-sm">
              <i class="bi bi-share me-1"></i>Share
            </button>
          </div>
        </div>
      </div>

      <div class="content-body">
        <h1>Warrior Domain</h1>

        <p>The Warrior Domain focuses on martial prowess, weapons mastery, and battlefield tactics.</p>

        <h2>Core Abilities</h2>

        <h3><strong>Weapon Mastery</strong></h3>
        <p>Warriors gain access to specialized weapon cards for:</p>
        <ul>
          <li>Swords and axes</li>
          <li>Bows and crossbows</li>
          <li>Polearms and shields</li>
        </ul>

        <h3><strong>Combat Training</strong></h3>
        <ul>
          <li>Additional attack cards per level</li>
          <li>Improved defensive reactions</li>
          <li>Leadership abilities in group combat</li>
        </ul>

        <h2>Domain Cards</h2>

        <h3>Level 1 Cards</h3>
        <ul>
          <li><strong>Power Strike</strong>: Enhanced attack (+2 damage, 2 AP)</li>
          <li><strong>Shield Wall</strong>: Protect adjacent allies (1 AP, ongoing)</li>
          <li><strong>Battle Cry</strong>: Boost ally morale (+1 to all actions, 2 AP)</li>
        </ul>

        <h3>Level 3 Cards</h3>
        <ul>
          <li><strong>Whirlwind</strong>: Attack all adjacent enemies (3 AP)</li>
          <li><strong>Taunt</strong>: Force enemy to target you (1 AP, 1 SP)</li>
          <li><strong>Second Wind</strong>: Recover health mid-combat (2 AP, 2 SP)</li>
        </ul>

        <h3>Level 5 Cards</h3>
        <ul>
          <li><strong>Execute</strong>: Massive damage to wounded foes (3 AP, 2 SP)</li>
          <li><strong>Rallying Presence</strong>: Allies gain extra AP (2 AP, 3 SP)</li>
        </ul>

        <h2>Character Progression</h2>

        <p>Warriors advance by:</p>
        <ul>
          <li>Mastering weapon types</li>
          <li>Learning tactical maneuvers</li>
          <li>Developing leadership skills</li>
        </ul>

        <p>See <a routerLink="/pages/combat-system" class="wiki-link">Combat System</a> for how Warrior abilities integrate with battle mechanics.</p>

        <div class="page-tags mt-4">
          <span class="badge bg-light text-dark me-2">domain</span>
          <span class="badge bg-light text-dark me-2">warrior</span>
          <span class="badge bg-light text-dark me-2">combat</span>
          <span class="badge bg-light text-dark me-2">character-class</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    .page-title {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .page-meta {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .content-body {
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .content-body h1 {
      color: #2c3e50;
      border-bottom: 2px solid #3498db;
      padding-bottom: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .content-body h2 {
      color: #34495e;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    .content-body h3 {
      color: #7f8c8d;
      margin-top: 1.5rem;
      margin-bottom: 0.8rem;
    }

    .wiki-link {
      color: #3498db;
      text-decoration: none;
    }

    .wiki-link:hover {
      text-decoration: underline;
    }

    .page-tags {
      border-top: 1px solid #ecf0f1;
      padding-top: 1rem;
    }
  `]
})
export class WarriorDomainPageComponent { }