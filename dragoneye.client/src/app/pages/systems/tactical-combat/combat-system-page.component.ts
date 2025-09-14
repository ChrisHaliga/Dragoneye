import { Component } from '@angular/core';

@Component({
  selector: 'app-combat-system-page',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="page-header mb-4">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <h1 class="page-title">Combat System</h1>
            <div class="page-meta">
              <span class="badge bg-warning me-2">
                <i class="bi bi-flask me-1"></i>Testing
              </span>
              <span class="text-muted">
                <i class="bi bi-calendar3 me-1"></i>Updated September 12, 2025
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
        <h1>Combat System</h1>

        <p>Combat in our RPG uses the Card System with special timing and interaction rules.</p>

        <h2>Initiative and Turns</h2>

        <ol>
          <li><strong>Initiative Phase</strong>: All participants draw initiative cards</li>
          <li><strong>Action Phase</strong>: Players act in initiative order</li>
          <li><strong>Resolution Phase</strong>: Apply all effects and damage</li>
        </ol>

        <h2>Action Economy</h2>

        <p>Each character has:</p>
        <ul>
          <li><strong>3 Action Points (AP)</strong> per turn</li>
          <li><strong>Variable Spirit Points (SP)</strong> based on character level and domain</li>
        </ul>

        <h2>Combat Actions</h2>

        <h3>Primary Actions (Cost varies)</h3>
        <ul>
          <li><strong>Attack</strong>: Use attack cards to damage enemies</li>
          <li><strong>Defend</strong>: Increase defense for the round</li>
          <li><strong>Cast</strong>: Use magical abilities</li>
        </ul>

        <h3>Reactions (0 AP, may cost SP)</h3>
        <ul>
          <li><strong>Block</strong>: Reduce incoming damage</li>
          <li><strong>Counter</strong>: Attack immediately after being attacked</li>
          <li><strong>Dodge</strong>: Avoid area effects</li>
        </ul>

        <h2>Damage and Health</h2>

        <ul>
          <li><strong>Health Points</strong>: Track character vitality</li>
          <li><strong>Armor</strong>: Reduces physical damage</li>
          <li><strong>Resistance</strong>: Reduces magical damage</li>
        </ul>

        <h2>Special Combat Rules</h2>

        <h3>Flanking</h3>
        <p>Characters attacking from opposite sides gain +2 to their attack cards.</p>

        <h3>High Ground</h3>
        <p>Elevated position provides +1 to ranged attack cards.</p>

        <p>See <a routerLink="/pages/warrior-domain" class="wiki-link">Warrior Domain</a> for combat-focused character builds.</p>

        <div class="page-tags mt-4">
          <span class="badge bg-light text-dark me-2">combat</span>
          <span class="badge bg-light text-dark me-2">rules</span>
          <span class="badge bg-light text-dark me-2">turn-based</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 2rem;
      max-width: 1200px;
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
export class CombatSystemPageComponent { }