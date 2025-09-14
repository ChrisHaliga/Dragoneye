import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-domains-overview',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-container">
      <header class="page-header">
        <div class="page-header-content">
          <div class="page-title-section">
            <h1 class="page-title">Character Domains</h1>
            <p class="page-description">
              Specialized paths of training and expertise that define a character's unique abilities and role in adventures.
            </p>
          </div>
        </div>
      </header>

      <main class="page-content">
        <section class="overview-section">
          <div class="overview-card">
            <div class="overview-content">
              <h2>Domain System Overview</h2>
              <p>
                Character domains represent specialized training and natural aptitude in specific areas of expertise. 
                Each domain provides unique abilities, exclusive cards, and distinct approaches to problem-solving.
              </p>
              <div class="key-features">
                <div class="feature-item">
                  <i class="bi bi-collection text-primary"></i>
                  <span>Exclusive Domain Cards</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-star text-success"></i>
                  <span>Unique Abilities</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-graph-up text-warning"></i>
                  <span>Progressive Mastery</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-people text-danger"></i>
                  <span>Complementary Roles</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="featured-pages">
          <h2>Available Domains</h2>
          <div class="pages-grid">
            <a routerLink="/wiki/content/character-domains/warrior-domain" class="page-card warrior">
              <div class="card-icon">
                <i class="bi bi-shield-shaded"></i>
              </div>
              <div class="card-content">
                <h3>Warrior Domain</h3>
                <p>Masters of combat, tactics, and physical prowess. Frontline fighters who protect allies and devastate enemies.</p>
                <div class="card-meta">
                  <span class="badge bg-danger">Combat</span>
                  <span class="badge bg-primary">Protection</span>
                </div>
              </div>
              <div class="card-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
            </a>

            <a routerLink="/wiki/content/character-domains/scholar-domain" class="page-card scholar">
              <div class="card-icon">
                <i class="bi bi-book"></i>
              </div>
              <div class="card-content">
                <h3>Scholar Domain</h3>
                <p>Masters of knowledge, magic, and investigation. Versatile spellcasters who solve problems through intellect.</p>
                <div class="card-meta">
                  <span class="badge bg-primary">Magic</span>
                  <span class="badge bg-info">Knowledge</span>
                </div>
              </div>
              <div class="card-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
            </a>

            <div class="page-card coming-soon rogue">
              <div class="card-icon">
                <i class="bi bi-eye"></i>
              </div>
              <div class="card-content">
                <h3>Rogue Domain</h3>
                <p>Masters of stealth, precision, and cunning. Specialists in infiltration, reconnaissance, and surgical strikes.</p>
                <div class="card-meta">
                  <span class="badge bg-secondary">Coming Soon</span>
                </div>
              </div>
            </div>

            <div class="page-card coming-soon healer">
              <div class="card-icon">
                <i class="bi bi-heart-pulse"></i>
              </div>
              <div class="card-content">
                <h3>Healer Domain</h3>
                <p>Masters of restoration and support magic. Essential allies who keep the party healthy and empowered.</p>
                <div class="card-meta">
                  <span class="badge bg-secondary">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="domain-progression">
          <h2>Domain Progression</h2>
          <div class="progression-steps">
            <div class="progression-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Novice (Level 1)</h4>
                <p>Basic domain abilities and first set of domain cards. Foundation skills that define your character's primary approach.</p>
              </div>
            </div>
            <div class="progression-arrow">
              <i class="bi bi-arrow-right"></i>
            </div>
            <div class="progression-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Adept (Level 3)</h4>
                <p>Enhanced abilities and specialized cards. Your character becomes notably more effective in their domain focus.</p>
              </div>
            </div>
            <div class="progression-arrow">
              <i class="bi bi-arrow-right"></i>
            </div>
            <div class="progression-step">
              <div class="step-number">5</div>
              <div class="step-content">
                <h4>Expert (Level 5)</h4>
                <p>Powerful signature abilities and advanced cards. Your character becomes a true master of their domain.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="domain-roles">
          <h2>Domain Roles in Party</h2>
          <div class="roles-grid">
            <div class="role-card">
              <div class="role-icon">
                <i class="bi bi-shield text-danger"></i>
              </div>
              <div class="role-content">
                <h4>Defender</h4>
                <p>Protects allies by drawing enemy attention, absorbing damage, and controlling battlefield positioning.</p>
                <div class="domain-examples">
                  <strong>Domains:</strong> Warrior, Guardian
                </div>
              </div>
            </div>
            <div class="role-card">
              <div class="role-icon">
                <i class="bi bi-lightning text-warning"></i>
              </div>
              <div class="role-content">
                <h4>Striker</h4>
                <p>Deals significant damage to enemies through powerful attacks, spells, or precise strikes.</p>
                <div class="domain-examples">
                  <strong>Domains:</strong> Warrior, Rogue, Scholar
                </div>
              </div>
            </div>
            <div class="role-card">
              <div class="role-icon">
                <i class="bi bi-heart-pulse text-success"></i>
              </div>
              <div class="role-content">
                <h4>Support</h4>
                <p>Enhances ally capabilities through healing, buffs, and tactical advantages.</p>
                <div class="domain-examples">
                  <strong>Domains:</strong> Healer, Scholar
                </div>
              </div>
            </div>
            <div class="role-card">
              <div class="role-icon">
                <i class="bi bi-eye text-info"></i>
              </div>
              <div class="role-content">
                <h4>Controller</h4>
                <p>Manipulates the battlefield through area effects, crowd control, and environmental manipulation.</p>
                <div class="domain-examples">
                  <strong>Domains:</strong> Scholar, Rogue
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="choosing-domain">
          <h2>Choosing Your Domain</h2>
          <div class="choice-factors">
            <div class="factor-item">
              <h4><i class="bi bi-person-check text-primary me-2"></i>Personal Preference</h4>
              <p>What type of character do you want to play? What role appeals to you in group adventures?</p>
            </div>
            <div class="factor-item">
              <h4><i class="bi bi-people text-success me-2"></i>Party Composition</h4>
              <p>What roles does your party need? How can your domain complement your allies' abilities?</p>
            </div>
            <div class="factor-item">
              <h4><i class="bi bi-map text-warning me-2"></i>Campaign Style</h4>
              <p>What type of challenges will you face? Does your domain match the expected adventure style?</p>
            </div>
            <div class="factor-item">
              <h4><i class="bi bi-star text-danger me-2"></i>Character Concept</h4>
              <p>What's your character's background and motivation? Which domain best supports your story?</p>
            </div>
          </div>
        </section>

        <section class="related-content">
          <h2>Related Content</h2>
          <div class="related-links">
            <a routerLink="/wiki/content/player-races" class="related-link">
              <i class="bi bi-people me-2"></i>Player Races
            </a>
            <a routerLink="/wiki/game-mechanics/core-systems/card-system" class="related-link">
              <i class="bi bi-collection me-2"></i>Card System
            </a>
            <a routerLink="/wiki/systems/tactical-combat" class="related-link">
              <i class="bi bi-shield me-2"></i>Combat System
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

    .overview-section {
      margin-bottom: 3rem;
    }

    .overview-card {
      background: linear-gradient(135deg, #6f42c1 0%, #17a2b8 100%);
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
    .domain-progression,
    .domain-roles,
    .choosing-domain,
    .related-content {
      margin-bottom: 3rem;
    }

    .featured-pages h2,
    .domain-progression h2,
    .domain-roles h2,
    .choosing-domain h2,
    .related-content h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #6f42c1;
    }

    .pages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

    .page-card.warrior {
      border-left-color: #dc3545;
    }

    .page-card.scholar {
      border-left-color: #6f42c1;
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
      color: #6f42c1;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    .page-card.warrior .card-icon {
      color: #dc3545;
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
      flex-wrap: wrap;
    }

    .card-arrow {
      color: #6f42c1;
      font-size: 1.25rem;
      margin-left: 1rem;
      flex-shrink: 0;
    }

    .progression-steps {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .progression-step {
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
      background: #6f42c1;
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

    .progression-arrow {
      color: #6f42c1;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .roles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .role-card {
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      border-left: 4px solid #6f42c1;
      text-align: center;
    }

    .role-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .role-content h4 {
      color: #2c3e50;
      margin-bottom: 0.75rem;
    }

    .role-content p {
      color: #6c757d;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .domain-examples {
      font-size: 0.9rem;
      color: #495057;
    }

    .choice-factors {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .factor-item {
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      border-left: 4px solid #6f42c1;
    }

    .factor-item h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .factor-item p {
      color: #6c757d;
      margin: 0;
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
      background: #6f42c1;
      color: white;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .page-container {
        padding: 1rem;
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

      .progression-steps {
        flex-direction: column;
      }

      .progression-arrow {
        transform: rotate(90deg);
      }

      .roles-grid {
        grid-template-columns: 1fr;
      }

      .choice-factors {
        grid-template-columns: 1fr;
      }

      .related-links {
        flex-direction: column;
      }
    }
  `]
})
export class CharacterDomainsOverviewComponent {
}