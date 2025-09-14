import { Component } from '@angular/core';

@Component({
  selector: 'app-card-system-page',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="page-header mb-4">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <h1 class="page-title">Card System</h1>
            <div class="page-meta">
              <span class="badge bg-success me-2">
                <i class="bi bi-lock-fill me-1"></i>Locked
              </span>
              <span class="text-muted">
                <i class="bi bi-calendar3 me-1"></i>Updated September 8, 2025
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
        <h1>Card System Overview</h1>

        <p>The <strong>Card System</strong> is the core mechanic of our tabletop RPG. Every character action, from combat to social encounters, is resolved using cards.</p>

        <h2>Basic Mechanics</h2>

        <ul>
          <li><strong>Action Points (AP)</strong>: Each card costs a certain amount of AP to play</li>
          <li><strong>Spirit Points (SP)</strong>: Some cards require SP, representing magical or spiritual energy</li>
          <li><strong>Card Types</strong>: Action Cards, Reaction Cards, and Passive Cards</li>
        </ul>

        <h2>Card Resolution</h2>

        <p>When a card is played, the player:</p>

        <ol>
          <li>Declares the action and target</li>
          <li>Spends the required AP/SP</li>
          <li>Resolves any immediate effects</li>
          <li>Applies ongoing effects if applicable</li>
        </ol>

        <h3>Example Cards</h3>

        <ul>
          <li><strong>Strike</strong>: Basic attack card (1 AP)</li>
          <li><strong>Dodge</strong>: Defensive reaction (0 AP, 1 SP)</li>
          <li><strong>Inspiration</strong>: Buff allies (+2 to next action)</li>
        </ul>

        <h2>Advanced Rules</h2>

        <p>Cards can be <strong>combined</strong> in certain situations to create more powerful effects. See <a routerLink="/pages/combat-system" class="wiki-link">Combat System</a> for detailed combat applications.</p>

        <div class="page-tags mt-4">
          <span class="badge bg-light text-dark me-2">cards</span>
          <span class="badge bg-light text-dark me-2">mechanics</span>
          <span class="badge bg-light text-dark me-2">core-rules</span>
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
export class CardSystemPageComponent { }