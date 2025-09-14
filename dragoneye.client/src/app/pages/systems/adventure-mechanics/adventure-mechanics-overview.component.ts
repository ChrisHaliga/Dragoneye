import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adventure-mechanics-overview',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-container">
      <header class="page-header">
        <div class="page-header-content">
          <div class="page-title-section">
            <div class="breadcrumb-nav">
              <a routerLink="/wiki/systems" class="breadcrumb-link">Systems</a>
              <i class="bi bi-chevron-right mx-2"></i>
              <span class="breadcrumb-current">Adventure Mechanics</span>
            </div>
            <h1 class="page-title">Adventure Mechanics</h1>
            <p class="page-description">
              Systems that govern exploration, social interaction, and non-combat challenges in the world of Aethermoor.
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
              <h2>Adventure Overview</h2>
              <p>
                Adventure mechanics handle everything that happens outside of tactical combat - from navigating 
                treacherous terrain to negotiating with powerful NPCs, solving ancient puzzles, and managing resources 
                during long journeys.
              </p>
              <div class="key-features">
                <div class="feature-item">
                  <i class="bi bi-compass text-primary"></i>
                  <span>Exploration & Discovery</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-chat-heart text-success"></i>
                  <span>Social Interactions</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-puzzle text-warning"></i>
                  <span>Environmental Challenges</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-hourglass text-danger"></i>
                  <span>Time & Resource Management</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="featured-pages">
          <h2>Adventure System Pages</h2>
          <div class="pages-grid">
            <div class="page-card coming-soon exploration">
              <div class="card-icon">
                <i class="bi bi-map"></i>
              </div>
              <div class="card-content">
                <h3>Exploration System</h3>
                <p>Rules for discovering new locations, navigating terrain, and uncovering secrets.</p>
                <div class="card-meta">
                  <span class="badge bg-secondary">Coming Soon</span>
                </div>
              </div>
            </div>

            <div class="page-card coming-soon social">
              <div class="card-icon">
                <i class="bi bi-people"></i>
              </div>
              <div class="card-content">
                <h3>Social Encounters</h3>
                <p>Negotiation, persuasion, and relationship mechanics for interacting with NPCs.</p>
                <div class="card-meta">
                  <span class="badge bg-secondary">Coming Soon</span>
                </div>
              </div>
            </div>

            <div class="page-card coming-soon puzzles">
              <div class="card-icon">
                <i class="bi bi-puzzle-fill"></i>
              </div>
              <div class="card-content">
                <h3>Puzzles & Challenges</h3>
                <p>Environmental obstacles, ancient mechanisms, and intellectual challenges.</p>
                <div class="card-meta">
                  <span class="badge bg-secondary">Coming Soon</span>
                </div>
              </div>
            </div>

            <div class="page-card coming-soon travel">
              <div class="card-icon">
                <i class="bi bi-signpost"></i>
              </div>
              <div class="card-content">
                <h3>Travel & Survival</h3>
                <p>Long-distance travel, weather, supplies, and wilderness survival mechanics.</p>
                <div class="card-meta">
                  <span class="badge bg-secondary">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="adventure-pillars">
          <h2>The Four Pillars of Adventure</h2>
          <div class="pillars-grid">
            <div class="pillar-card exploration">
              <div class="pillar-icon">
                <i class="bi bi-compass"></i>
              </div>
              <div class="pillar-content">
                <h3>Exploration</h3>
                <p>Discovering new places, uncovering hidden secrets, and navigating dangerous terrain. Every location has mysteries waiting to be revealed.</p>
                <div class="pillar-features">
                  <div class="feature">🗺️ Regional mapping</div>
                  <div class="feature">🔍 Secret discovery</div>
                  <div class="feature">🏞️ Environmental navigation</div>
                </div>
              </div>
            </div>
            
            <div class="pillar-card social">
              <div class="pillar-icon">
                <i class="bi bi-chat-heart"></i>
              </div>
              <div class="pillar-content">
                <h3>Social Interaction</h3>
                <p>Building relationships, gathering information, and resolving conflicts through dialogue and negotiation rather than violence.</p>
                <div class="pillar-features">
                  <div class="feature">💬 Dialogue trees</div>
                  <div class="feature">🤝 Reputation systems</div>
                  <div class="feature">🎭 Roleplay rewards</div>
                </div>
              </div>
            </div>
            
            <div class="pillar-card problem-solving">
              <div class="pillar-icon">
                <i class="bi bi-puzzle"></i>
              </div>
              <div class="pillar-content">
                <h3>Problem Solving</h3>
                <p>Overcoming obstacles through creative thinking, puzzle-solving, and clever use of character abilities and environmental elements.</p>
                <div class="pillar-features">
                  <div class="feature">🧩 Logic puzzles</div>
                  <div class="feature">⚙️ Mechanism challenges</div>
                  <div class="feature">🔧 Creative solutions</div>
                </div>
              </div>
            </div>
            
            <div class="pillar-card survival">
              <div class="pillar-icon">
                <i class="bi bi-hourglass-split"></i>
              </div>
              <div class="pillar-content">
                <h3>Resource Management</h3>
                <p>Managing time, supplies, and character resources during extended adventures. Every journey requires careful planning and adaptation.</p>
                <div class="pillar-features">
                  <div class="feature">🎒 Supply management</div>
                  <div class="feature">⏰ Time constraints</div>
                  <div class="feature">🌤️ Weather effects</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="adventure-flow">
          <h2>Adventure Structure</h2>
          <div class="flow-diagram">
            <div class="flow-step">
              <div class="step-icon">
                <i class="bi bi-flag"></i>
              </div>
              <div class="step-content">
                <h4>Quest Hook</h4>
                <p>Interesting opportunities or problems that drive characters to adventure</p>
              </div>
            </div>
            <div class="flow-arrow">
              <i class="bi bi-arrow-right"></i>
            </div>
            <div class="flow-step">
              <div class="step-icon">
                <i class="bi bi-compass"></i>
              </div>
              <div class="step-content">
                <h4>Investigation</h4>
                <p>Gathering information, exploring locations, and understanding the situation</p>
              </div>
            </div>
            <div class="flow-arrow">
              <i class="bi bi-arrow-right"></i>
            </div>
            <div class="flow-step">
              <div class="step-icon">
                <i class="bi bi-exclamation-triangle"></i>
              </div>
              <div class="step-content">
                <h4>Challenges</h4>
                <p>Obstacles that test character abilities and player decision-making</p>
              </div>
            </div>
            <div class="flow-arrow">
              <i class="bi bi-arrow-right"></i>
            </div>
            <div class="flow-step">
              <div class="step-icon">
                <i class="bi bi-trophy"></i>
              </div>
              <div class="step-content">
                <h4>Resolution</h4>
                <p>Consequences of character choices and rewards for overcoming challenges</p>
              </div>
            </div>
          </div>
        </section>

        <section class="challenge-types">
          <h2>Types of Adventure Challenges</h2>
          <div class="challenges-grid">
            <div class="challenge-card">
              <div class="challenge-icon">
                <i class="bi bi-geo-alt text-primary"></i>
              </div>
              <div class="challenge-content">
                <h4>Environmental</h4>
                <p>Natural hazards, weather conditions, difficult terrain, and geographic obstacles that must be overcome or navigated.</p>
              </div>
            </div>
            <div class="challenge-card">
              <div class="challenge-icon">
                <i class="bi bi-gear text-success"></i>
              </div>
              <div class="challenge-content">
                <h4>Mechanical</h4>
                <p>Ancient devices, magical constructs, locked doors, and complex mechanisms requiring skill or ingenuity to operate.</p>
              </div>
            </div>
            <div class="challenge-card">
              <div class="challenge-icon">
                <i class="bi bi-people text-warning"></i>
              </div>
              <div class="challenge-content">
                <h4>Social</h4>
                <p>Negotiations, cultural barriers, political intrigue, and relationship dynamics that require diplomatic solutions.</p>
              </div>
            </div>
            <div class="challenge-card">
              <div class="challenge-icon">
                <i class="bi bi-clock text-danger"></i>
              </div>
              <div class="challenge-content">
                <h4>Temporal</h4>
                <p>Time-sensitive situations, deadlines, aging effects, and scenarios where timing is critical to success.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="design-principles">
          <h2>Adventure Design Principles</h2>
          <div class="principles-list">
            <div class="principle-item">
              <div class="principle-icon">
                <i class="bi bi-lightbulb"></i>
              </div>
              <div class="principle-content">
                <h4>Multiple Solutions</h4>
                <p>Every significant challenge should have multiple viable approaches, allowing different character builds and player preferences to succeed.</p>
              </div>
            </div>
            <div class="principle-item">
              <div class="principle-icon">
                <i class="bi bi-arrow-through-heart"></i>
              </div>
              <div class="principle-content">
                <h4>Meaningful Consequences</h4>
                <p>Player choices should have lasting effects on the world, relationships, and future adventure opportunities.</p>
              </div>
            </div>
            <div class="principle-item">
              <div class="principle-icon">
                <i class="bi bi-graph-up"></i>
              </div>
              <div class="principle-content">
                <h4>Progressive Complexity</h4>
                <p>Challenges should start simple and gradually increase in complexity as characters grow in power and players gain experience.</p>
              </div>
            </div>
            <div class="principle-item">
              <div class="principle-icon">
                <i class="bi bi-person-workspace"></i>
              </div>
              <div class="principle-content">
                <h4>Character Agency</h4>
                <p>Adventures should provide opportunities for each character to use their unique abilities and contribute meaningfully to success.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="related-content">
          <h2>Related Content</h2>
          <div class="related-links">
            <a routerLink="/wiki/game-mechanics/core-systems/card-system" class="related-link">
              <i class="bi bi-collection me-2"></i>Card System
            </a>
            <a routerLink="/wiki/systems/tactical-combat" class="related-link">
              <i class="bi bi-shield me-2"></i>Tactical Combat
            </a>
            <a routerLink="/wiki/content/character-domains" class="related-link">
              <i class="bi bi-person-gear me-2"></i>Character Domains
            </a>
            <a routerLink="/wiki/setting-lore/world-building" class="related-link">
              <i class="bi bi-globe me-2"></i>World Building
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
      background: linear-gradient(135deg, #17a2b8 0%, #28a745 100%);
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
    .adventure-pillars,
    .adventure-flow,
    .challenge-types,
    .design-principles,
    .related-content {
      margin-bottom: 3rem;
    }

    .featured-pages h2,
    .adventure-pillars h2,
    .adventure-flow h2,
    .challenge-types h2,
    .design-principles h2,
    .related-content h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #17a2b8;
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
      opacity: 0.7;
      cursor: default;
    }

    .page-card.coming-soon:hover {
      transform: none;
      box-shadow: none;
    }

    .card-icon {
      font-size: 2rem;
      color: #17a2b8;
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

    .pillars-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .pillar-card {
      padding: 2rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 12px;
      text-align: center;
      border-top: 4px solid #17a2b8;
    }

    .pillar-icon {
      font-size: 3rem;
      color: #17a2b8;
      margin-bottom: 1.5rem;
    }

    .pillar-content h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .pillar-content p {
      color: #6c757d;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .pillar-features {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .feature {
      padding: 0.5rem;
      background: #f8f9fa;
      border-radius: 6px;
      font-size: 0.9rem;
      color: #495057;
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

    .step-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background: #17a2b8;
      color: white;
      border-radius: 50%;
      font-size: 1.25rem;
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
      color: #17a2b8;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .challenges-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .challenge-card {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      border-left: 4px solid #17a2b8;
    }

    .challenge-icon {
      font-size: 1.5rem;
      margin-top: 0.25rem;
      flex-shrink: 0;
    }

    .challenge-content h4 {
      margin: 0 0 0.75rem 0;
      color: #2c3e50;
    }

    .challenge-content p {
      margin: 0;
      color: #6c757d;
      line-height: 1.5;
    }

    .principles-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .principle-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      border-left: 4px solid #17a2b8;
    }

    .principle-icon {
      font-size: 1.5rem;
      color: #17a2b8;
      margin-top: 0.25rem;
      flex-shrink: 0;
    }

    .principle-content h4 {
      margin: 0 0 0.5rem 0;
      color: #2c3e50;
    }

    .principle-content p {
      margin: 0;
      color: #6c757d;
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
      background: #17a2b8;
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

      .pillars-grid {
        grid-template-columns: 1fr;
      }

      .flow-diagram {
        flex-direction: column;
      }

      .flow-arrow {
        transform: rotate(90deg);
      }

      .challenges-grid {
        grid-template-columns: 1fr;
      }

      .related-links {
        flex-direction: column;
      }
    }
  `]
})
export class AdventureMechanicsOverviewComponent {
}