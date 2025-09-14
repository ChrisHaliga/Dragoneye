import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tactical-combat-overview',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-container">
      <header class="page-header">
        <div class="page-header-content">
          <div class="page-title-section">
            <h1 class="page-title">Tactical Combat</h1>
            <p class="page-description">
              Turn-based strategic combat system with positioning, timing, and resource management at its core.
            </p>
          </div>
          <div class="page-actions">
            <button class="btn btn-outline-secondary btn-sm">
              <i class="bi bi-pencil me-1"></i>Edit
            </button>
            <button class="btn btn-outline-secondary btn-sm">
              <i class="bi bi-clock me-1"></i>History
            </button>
          </div>
        </div>
      </header>

      <main class="page-content">
        <section class="overview-section">
          <div class="overview-card">
            <div class="overview-content">
              <h2>Combat Overview</h2>
              <p>
                The tactical combat system emphasizes strategic positioning, careful resource management, and timing. 
                Every decision matters, from where you position your character to when you use your most powerful abilities.
              </p>
              <div class="key-features">
                <div class="feature-item">
                  <i class="bi bi-grid-3x3-gap text-primary"></i>
                  <span>Grid-based positioning</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-clock text-success"></i>
                  <span>Action Point economy</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-lightning text-warning"></i>
                  <span>Reaction system</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-bullseye text-danger"></i>
                  <span>Environmental tactics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="featured-pages">
          <h2>Combat System Pages</h2>
          <div class="pages-grid">
            <a routerLink="/wiki/systems/tactical-combat/combat-system" class="page-card combat-system">
              <div class="card-icon">
                <i class="bi bi-shield-shaded"></i>
              </div>
              <div class="card-content">
                <h3>Combat System</h3>
                <p>Core mechanics of tactical combat including turns, actions, and positioning.</p>
                <div class="card-meta">
                  <span class="badge bg-primary">Core System</span>
                </div>
              </div>
              <div class="card-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
            </a>

            <div class="page-card coming-soon positioning">
              <div class="card-icon">
                <i class="bi bi-grid-3x3"></i>
              </div>
              <div class="card-content">
                <h3>Positioning & Movement</h3>
                <p>How movement, positioning, and terrain affect combat effectiveness.</p>
                <div class="card-meta">
                  <span class="badge bg-secondary">Coming Soon</span>
                </div>
              </div>
            </div>

            <div class="page-card coming-soon conditions">
              <div class="card-icon">
                <i class="bi bi-heart-pulse"></i>
              </div>
              <div class="card-content">
                <h3>Status Conditions</h3>
                <p>Buffs, debuffs, and environmental effects that modify combat performance.</p>
                <div class="card-meta">
                  <span class="badge bg-secondary">Coming Soon</span>
                </div>
              </div>
            </div>

            <div class="page-card coming-soon environmental">
              <div class="card-icon">
                <i class="bi bi-hurricane"></i>
              </div>
              <div class="card-content">
                <h3>Environmental Combat</h3>
                <p>Using terrain, weather, and environmental hazards in tactical combat.</p>
                <div class="card-meta">
                  <span class="badge bg-secondary">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="combat-flow">
          <h2>Combat Flow</h2>
          <div class="flow-diagram">
            <div class="flow-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Initiative</h4>
                <p>Determine turn order based on character speed and circumstances</p>
              </div>
            </div>
            <div class="flow-arrow">
              <i class="bi bi-arrow-right"></i>
            </div>
            <div class="flow-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Actions</h4>
                <p>Spend Action Points on movement, attacks, and special abilities</p>
              </div>
            </div>
            <div class="flow-arrow">
              <i class="bi bi-arrow-right"></i>
            </div>
            <div class="flow-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Reactions</h4>
                <p>Respond to opponent actions with defensive or counter-measures</p>
              </div>
            </div>
            <div class="flow-arrow">
              <i class="bi bi-arrow-right"></i>
            </div>
            <div class="flow-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Resolution</h4>
                <p>Apply damage, effects, and status changes from all actions</p>
              </div>
            </div>
          </div>
        </section>

        <section class="tactical-principles">
          <h2>Tactical Principles</h2>
          <div class="principles-grid">
            <div class="principle-card">
              <div class="principle-icon">
                <i class="bi bi-compass text-primary"></i>
              </div>
              <div class="principle-content">
                <h4>Positioning Matters</h4>
                <p>High ground, flanking, and cover provide significant tactical advantages. Control the battlefield to control the fight.</p>
              </div>
            </div>
            <div class="principle-card">
              <div class="principle-icon">
                <i class="bi bi-hourglass-split text-success"></i>
              </div>
              <div class="principle-content">
                <h4>Resource Management</h4>
                <p>Action Points are limited each turn. Plan your actions carefully to maximize effectiveness.</p>
              </div>
            </div>
            <div class="principle-card">
              <div class="principle-icon">
                <i class="bi bi-people text-warning"></i>
              </div>
              <div class="principle-content">
                <h4>Team Coordination</h4>
                <p>Combine abilities with allies for devastating combinations. Timing and teamwork are essential.</p>
              </div>
            </div>
            <div class="principle-card">
              <div class="principle-icon">
                <i class="bi bi-lightning text-danger"></i>
              </div>
              <div class="principle-content">
                <h4>Adaptability</h4>
                <p>Combat conditions change rapidly. Successful fighters adapt their strategy to emerging threats.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="learning-path">
          <h2>Learning Path</h2>
          <div class="learning-steps">
            <div class="learning-step">
              <div class="step-badge">Start Here</div>
              <h4>Combat Basics</h4>
              <p>Learn the fundamental mechanics of turns, actions, and basic attacks.</p>
              <a routerLink="/wiki/systems/tactical-combat/combat-system" class="btn btn-primary btn-sm">
                Read Combat System
              </a>
            </div>
            <div class="learning-step">
              <div class="step-badge">Next</div>
              <h4>Positioning & Movement</h4>
              <p>Understand how movement and positioning affect combat effectiveness.</p>
              <button class="btn btn-secondary btn-sm" disabled>
                Coming Soon
              </button>
            </div>
            <div class="learning-step">
              <div class="step-badge">Advanced</div>
              <h4>Environmental Tactics</h4>
              <p>Master the use of terrain, weather, and environmental hazards in combat.</p>
              <button class="btn btn-secondary btn-sm" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </section>

        <section class="related-content">
          <h2>Related Content</h2>
          <div class="related-links">
            <a routerLink="/wiki/game-mechanics/core-systems/card-system" class="related-link">
              <i class="bi bi-collection me-2"></i>Card System
            </a>
            <a routerLink="/wiki/systems/adventure-mechanics" class="related-link">
              <i class="bi bi-map me-2"></i>Adventure Mechanics
            </a>
            <a routerLink="/wiki/content/character-domains" class="related-link">
              <i class="bi bi-person-gear me-2"></i>Character Domains
            </a>
          </div>
        </section>
      </main>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 2rem;
      max-width: 1200px;
    }

    .page-header {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e1e5e9;
    }

    .page-header-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;
    }

    .page-title-section {
      flex: 1;
    }

    .breadcrumb-nav {
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
      color: #6c757d;
    }

    .breadcrumb-link {
      color: #007bff;
      text-decoration: none;
    }

    .breadcrumb-link:hover {
      text-decoration: underline;
    }

    .breadcrumb-current {
      color: #6c757d;
    }

    .page-title {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .page-description {
      color: #6c757d;
      font-size: 1.1rem;
      margin: 0;
    }

    .page-actions {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .overview-section {
      margin-bottom: 3rem;
    }

    .overview-card {
      background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
      color: white;
      border-radius: 12px;
      padding: 2rem;
    }

    .overview-content h2 {
      margin: 0 0 1rem 0;
      font-size: 1.75rem;
    }

    .overview-content p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .key-features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      backdrop-filter: blur(10px);
    }

    .feature-item i {
      font-size: 1.25rem;
    }

    .featured-pages,
    .combat-flow,
    .tactical-principles,
    .learning-path,
    .related-content {
      margin-bottom: 3rem;
    }

    .featured-pages h2,
    .combat-flow h2,
    .tactical-principles h2,
    .learning-path h2,
    .related-content h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #dc3545;
    }

    .pages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .page-card {
      display: flex;
      align-items: center;
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
      border-left: 4px solid transparent;
    }

    .page-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      text-decoration: none;
      color: inherit;
    }

    .page-card.combat-system {
      border-left-color: #dc3545;
    }

    .page-card.coming-soon {
      opacity: 0.7;
      cursor: default;
    }

    .page-card.coming-soon:hover {
      transform: none;
      box-shadow: none;
    }

    .card-icon {
      font-size: 2rem;
      color: #dc3545;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    .card-content {
      flex: 1;
    }

    .card-content h3 {
      margin: 0 0 0.5rem 0;
      color: #2c3e50;
      font-size: 1.25rem;
    }

    .card-content p {
      margin: 0 0 0.75rem 0;
      color: #6c757d;
      line-height: 1.4;
    }

    .card-meta {
      display: flex;
      gap: 0.5rem;
    }

    .card-arrow {
      color: #dc3545;
      font-size: 1.25rem;
      margin-left: 1rem;
      flex-shrink: 0;
    }

    .flow-diagram {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .flow-step {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      flex: 1;
      min-width: 200px;
    }

    .step-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #dc3545;
      color: white;
      border-radius: 50%;
      font-weight: bold;
      flex-shrink: 0;
    }

    .step-content h4 {
      margin: 0 0 0.5rem 0;
      color: #2c3e50;
    }

    .step-content p {
      margin: 0;
      color: #6c757d;
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .flow-arrow {
      color: #dc3545;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .principles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .principle-card {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      border-left: 4px solid #dc3545;
    }

    .principle-icon {
      font-size: 1.5rem;
      margin-top: 0.25rem;
      flex-shrink: 0;
    }

    .principle-content h4 {
      margin: 0 0 0.75rem 0;
      color: #2c3e50;
    }

    .principle-content p {
      margin: 0;
      color: #6c757d;
      line-height: 1.5;
    }

    .learning-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .learning-step {
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      text-align: center;
    }

    .step-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: #dc3545;
      color: white;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .learning-step h4 {
      color: #2c3e50;
      margin-bottom: 0.75rem;
    }

    .learning-step p {
      color: #6c757d;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .related-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .related-link {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      background: #f8f9fa;
      border: 1px solid #e9ecef;
      border-radius: 6px;
      text-decoration: none;
      color: #495057;
      transition: all 0.3s ease;
    }

    .related-link:hover {
      background: #dc3545;
      color: white;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .page-container {
        padding: 1rem;
      }

      .page-header-content {
        flex-direction: column;
        gap: 1rem;
      }

      .page-title {
        font-size: 2rem;
      }

      .key-features {
        grid-template-columns: 1fr;
      }

      .pages-grid {
        grid-template-columns: 1fr;
      }

      .flow-diagram {
        flex-direction: column;
      }

      .flow-arrow {
        transform: rotate(90deg);
      }

      .principles-grid {
        grid-template-columns: 1fr;
      }

      .learning-steps {
        grid-template-columns: 1fr;
      }

      .related-links {
        flex-direction: column;
      }
    }
  `]
})
export class TacticalCombatOverviewComponent {
}