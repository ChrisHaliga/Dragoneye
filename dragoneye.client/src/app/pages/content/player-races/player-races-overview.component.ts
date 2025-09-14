import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-player-races-overview',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-container">
      <header class="page-header">
        <div class="page-header-content">
          <div class="page-title-section">
            <h1 class="page-title">Player Races</h1>
            <p class="page-description">
              The diverse peoples of Aethermoor, each with unique cultures, abilities, and perspectives on the post-Sundering world.
            </p>
          </div>
        </div>
      </header>

      <main class="page-content">
        <section class="overview-section">
          <div class="overview-card">
            <div class="overview-content">
              <h2>Racial Diversity in Aethermoor</h2>
              <p>
                Each race brings unique traits, cultural perspectives, and special abilities to your character. 
                Your choice of race affects starting abilities, available options, and how NPCs react to you.
              </p>
              <div class="key-features">
                <div class="feature-item">
                  <i class="bi bi-star text-primary"></i>
                  <span>Unique Racial Traits</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-globe text-success"></i>
                  <span>Rich Cultural Backgrounds</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-people text-warning"></i>
                  <span>Diverse Interactions</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-heart text-danger"></i>
                  <span>Meaningful Roleplay</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="featured-pages">
          <h2>Playable Races</h2>
          <div class="pages-grid">
            <a routerLink="/wiki/content/player-races/human-race" class="page-card human">
              <div class="card-icon">
                <i class="bi bi-person-circle"></i>
              </div>
              <div class="card-content">
                <h3>Human</h3>
                <p>Adaptable and driven, humans excel through determination and versatility. The most common race in Aethermoor.</p>
                <div class="card-meta">
                  <span class="badge bg-success">Adaptable</span>
                  <span class="badge bg-primary">Versatile</span>
                </div>
              </div>
              <div class="card-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
            </a>

            <a routerLink="/wiki/content/player-races/elf-race" class="page-card elf">
              <div class="card-icon">
                <i class="bi bi-tree"></i>
              </div>
              <div class="card-content">
                <h3>Elf</h3>
                <p>Ancient and magical beings with deep connections to nature and the arcane arts. Masters of patience and wisdom.</p>
                <div class="card-meta">
                  <span class="badge bg-primary">Magical</span>
                  <span class="badge bg-info">Wise</span>
                </div>
              </div>
              <div class="card-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
            </a>

            <a routerLink="/wiki/content/player-races/dwarf-race" class="page-card dwarf">
              <div class="card-icon">
                <i class="bi bi-hammer"></i>
              </div>
              <div class="card-content">
                <h3>Dwarf</h3>
                <p>Master craftsmen and warriors with unbreakable will. Builders of the great mountain cities and finest weapons.</p>
                <div class="card-meta">
                  <span class="badge bg-warning">Crafters</span>
                  <span class="badge bg-danger">Resilient</span>
                </div>
              </div>
              <div class="card-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
            </a>
          </div>
        </section>

        <section class="race-comparison">
          <h2>Race Comparison</h2>
          <div class="comparison-table">
            <div class="table-header">
              <div class="race-column">Race</div>
              <div class="trait-column">Key Strengths</div>
              <div class="culture-column">Cultural Focus</div>
              <div class="lifespan-column">Lifespan</div>
            </div>
            
            <div class="table-row human-row">
              <div class="race-cell">
                <i class="bi bi-person-circle me-2"></i>
                <strong>Human</strong>
              </div>
              <div class="trait-cell">Adaptability, Extra starting card, Determination</div>
              <div class="culture-cell">Trade, diplomacy, innovation</div>
              <div class="lifespan-cell">60-80 years</div>
            </div>
            
            <div class="table-row elf-row">
              <div class="race-cell">
                <i class="bi bi-tree me-2"></i>
                <strong>Elf</strong>
              </div>
              <div class="trait-cell">Aether resonance, Ancient wisdom, Keen senses</div>
              <div class="culture-cell">Magic, artistry, preservation</div>
              <div class="lifespan-cell">400-600 years</div>
            </div>
            
            <div class="table-row dwarf-row">
              <div class="race-cell">
                <i class="bi bi-hammer me-2"></i>
                <strong>Dwarf</strong>
              </div>
              <div class="trait-cell">Master craftsman, Stone resilience, Crystal attunement</div>
              <div class="culture-cell">Crafting, honor, clan loyalty</div>
              <div class="lifespan-cell">200-300 years</div>
            </div>
          </div>
        </section>

        <section class="cultural-dynamics">
          <h2>Inter-Racial Relations</h2>
          <div class="relations-grid">
            <div class="relation-card">
              <div class="relation-header">
                <i class="bi bi-person-circle"></i>
                <i class="bi bi-tree"></i>
                <h4>Human-Elf Relations</h4>
              </div>
              <p>Respectful but sometimes strained. Humans admire elven wisdom but find their long-term perspective frustrating. Elves appreciate human passion but worry about their short-sighted decisions.</p>
            </div>
            
            <div class="relation-card">
              <div class="relation-header">
                <i class="bi bi-person-circle"></i>
                <i class="bi bi-hammer"></i>
                <h4>Human-Dwarf Relations</h4>
              </div>
              <p>Strong trading partnerships built on mutual benefit. Humans provide adaptability and market access, while dwarves offer quality craftsmanship and reliability.</p>
            </div>
            
            <div class="relation-card">
              <div class="relation-header">
                <i class="bi bi-tree"></i>
                <i class="bi bi-hammer"></i>
                <h4>Elf-Dwarf Relations</h4>
              </div>
              <p>Complex relationship of mutual respect and philosophical differences. Both appreciate quality and permanence, but disagree on methods and priorities.</p>
            </div>
          </div>
        </section>

        <section class="choosing-race">
          <h2>Choosing Your Race</h2>
          <div class="choice-guide">
            <div class="choice-section">
              <h3><i class="bi bi-lightbulb text-primary me-2"></i>Consider Your Playstyle</h3>
              <div class="playstyle-options">
                <div class="playstyle-item">
                  <strong>Flexible & Social:</strong> Humans excel at adaptation and diplomatic solutions
                </div>
                <div class="playstyle-item">
                  <strong>Magical & Thoughtful:</strong> Elves provide powerful magic and strategic thinking
                </div>
                <div class="playstyle-item">
                  <strong>Sturdy & Reliable:</strong> Dwarves offer durability and practical problem-solving
                </div>
              </div>
            </div>
            
            <div class="choice-section">
              <h3><i class="bi bi-people text-success me-2"></i>Think About Party Role</h3>
              <div class="role-options">
                <div class="role-item">
                  <strong>Leader/Diplomat:</strong> Humans work well as party faces and coordinators
                </div>
                <div class="role-item">
                  <strong>Spellcaster/Advisor:</strong> Elves make excellent magical specialists and wise counselors
                </div>
                <div class="role-item">
                  <strong>Tank/Crafter:</strong> Dwarves excel as front-line fighters and equipment specialists
                </div>
              </div>
            </div>
            
            <div class="choice-section">
              <h3><i class="bi bi-book text-warning me-2"></i>Consider Character Story</h3>
              <p>Think about your character's background, motivation, and personal story. How does their racial heritage shape their worldview and goals? What cultural elements do you want to explore through roleplay?</p>
            </div>
          </div>
        </section>

        <section class="post-sundering-context">
          <h2>Races in the Post-Sundering World</h2>
          <div class="context-items">
            <div class="context-item">
              <h4><i class="bi bi-building text-primary me-2"></i>Rebuilding Civilization</h4>
              <p>All races work together to rebuild the shattered world. Human adaptability, elven wisdom, and dwarven craftsmanship combine to restore what was lost and create something new.</p>
            </div>
            <div class="context-item">
              <h4><i class="bi bi-gem text-success me-2"></i>Crystal Technology</h4>
              <p>The emergence of aether crystals has created new opportunities for all races. Each brings unique perspectives to understanding and utilizing this magical resource.</p>
            </div>
            <div class="context-item">
              <h4><i class="bi bi-map text-warning me-2"></i>Exploration & Discovery</h4>
              <p>The changed world holds new mysteries and dangers. Mixed-race expeditions combine different racial strengths to explore and understand the transformed landscape.</p>
            </div>
            <div class="context-item">
              <h4><i class="bi bi-handshake text-danger me-2"></i>Cooperation & Conflict</h4>
              <p>While races generally cooperate in reconstruction, old prejudices and new tensions can still create interesting conflicts and story opportunities.</p>
            </div>
          </div>
        </section>

        <section class="related-content">
          <h2>Related Content</h2>
          <div class="related-links">
            <a routerLink="/wiki/content/character-domains" class="related-link">
              <i class="bi bi-person-gear me-2"></i>Character Domains
            </a>
            <a routerLink="/wiki/setting-lore/world-building/world-overview" class="related-link">
              <i class="bi bi-globe me-2"></i>World Overview
            </a>
            <a routerLink="/wiki/content" class="related-link">
              <i class="bi bi-person-plus me-2"></i>Character Creation
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

    .overview-section {
      margin-bottom: 3rem;
    }

    .overview-card {
      background: linear-gradient(135deg, #20c997 0%, #fd7e14 100%);
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
    .race-comparison,
    .cultural-dynamics,
    .choosing-race,
    .post-sundering-context,
    .related-content {
      margin-bottom: 3rem;
    }

    .featured-pages h2,
    .race-comparison h2,
    .cultural-dynamics h2,
    .choosing-race h2,
    .post-sundering-context h2,
    .related-content h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #20c997;
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

    .page-card.human {
      border-left-color: #28a745;
    }

    .page-card.elf {
      border-left-color: #6f42c1;
    }

    .page-card.dwarf {
      border-left-color: #fd7e14;
    }

    .card-icon {
      font-size: 2rem;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    .page-card.human .card-icon {
      color: #28a745;
    }

    .page-card.elf .card-icon {
      color: #6f42c1;
    }

    .page-card.dwarf .card-icon {
      color: #fd7e14;
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
      color: #20c997;
      font-size: 1.25rem;
      margin-left: 1rem;
      flex-shrink: 0;
    }

    .comparison-table {
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      overflow: hidden;
    }

    .table-header {
      display: grid;
      grid-template-columns: 1fr 2fr 1.5fr 1fr;
      gap: 1px;
      background: #f8f9fa;
      font-weight: bold;
      color: #2c3e50;
    }

    .table-header > div {
      padding: 1rem;
      background: white;
    }

    .table-row {
      display: grid;
      grid-template-columns: 1fr 2fr 1.5fr 1fr;
      gap: 1px;
      background: #f8f9fa;
    }

    .table-row > div {
      padding: 1rem;
      background: white;
    }

    .race-cell {
      display: flex;
      align-items: center;
      color: #2c3e50;
    }

    .trait-cell,
    .culture-cell,
    .lifespan-cell {
      color: #6c757d;
    }

    .relations-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .relation-card {
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      border-left: 4px solid #20c997;
    }

    .relation-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .relation-header i {
      font-size: 1.5rem;
      color: #20c997;
    }

    .relation-header h4 {
      margin: 0;
      color: #2c3e50;
    }

    .relation-card p {
      margin: 0;
      color: #6c757d;
      line-height: 1.5;
    }

    .choice-guide {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .choice-section {
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
    }

    .choice-section h3 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
    }

    .playstyle-options,
    .role-options {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .playstyle-item,
    .role-item {
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 6px;
      color: #495057;
    }

    .choice-section p {
      color: #6c757d;
      line-height: 1.6;
      margin: 0;
    }

    .context-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .context-item {
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      border-left: 4px solid #20c997;
    }

    .context-item h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .context-item p {
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
      background: #20c997;
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

      .table-header,
      .table-row {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .table-header > div,
      .table-row > div {
        border-bottom: 1px solid #e1e5e9;
      }

      .relations-grid {
        grid-template-columns: 1fr;
      }

      .context-items {
        grid-template-columns: 1fr;
      }

      .related-links {
        flex-direction: column;
      }
    }
  `]
})
export class PlayerRacesOverviewComponent {
}