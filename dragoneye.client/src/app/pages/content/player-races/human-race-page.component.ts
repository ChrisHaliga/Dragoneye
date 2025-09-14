import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-human-race-page',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-container">
      <header class="page-header">
        <div class="page-header-content">
          <div class="page-title-section">
            <div class="breadcrumb-nav">
              <a routerLink="/wiki/content" class="breadcrumb-link">Content</a>
              <i class="bi bi-chevron-right mx-2"></i>
              <a routerLink="/wiki/content/player-races" class="breadcrumb-link">Player Races</a>
              <i class="bi bi-chevron-right mx-2"></i>
              <span class="breadcrumb-current">Human Race</span>
            </div>
            <h1 class="page-title">Human Race</h1>
            <div class="page-badges">
              <span class="badge bg-success">🔒 Locked</span>
              <span class="badge bg-warning">Player Race</span>
            </div>
          </div>
          <div class="page-actions">
            <button class="btn btn-outline-secondary btn-sm">
              <i class="bi bi-pencil me-1"></i>Edit
            </button>
            <button class="btn btn-outline-secondary btn-sm">
              <i class="bi bi-clock me-1"></i>History
            </button>
            <button class="btn btn-outline-secondary btn-sm">
              <i class="bi bi-share me-1"></i>Share
            </button>
          </div>
        </div>
      </header>

      <main class="page-content">
        <section class="race-overview">
          <div class="overview-card">
            <div class="overview-header">
              <div class="race-icon">
                <i class="bi bi-person-circle"></i>
              </div>
              <div class="race-info">
                <h2>Humans</h2>
                <p class="race-tagline">The most adaptable and diverse race in the world, found in every corner of civilization.</p>
              </div>
            </div>
            <div class="race-stats">
              <div class="stat-item">
                <strong>Adaptability:</strong> High
              </div>
              <div class="stat-item">
                <strong>Lifespan:</strong> 60-80 years
              </div>
              <div class="stat-item">
                <strong>Complexity:</strong> Beginner Friendly
              </div>
            </div>
          </div>
        </section>

        <section class="racial-traits">
          <h2>Racial Traits</h2>
          
          <div class="trait-section">
            <h3><i class="bi bi-arrow-up-right-circle text-success me-2"></i>Adaptability</h3>
            <div class="trait-content">
              <p>Humans gain an extra card slot at character creation, allowing them to start with one additional card from any domain.</p>
              <div class="mechanical-benefit">
                <strong>Mechanical Benefit:</strong> +1 starting card of your choice
              </div>
            </div>
          </div>

          <div class="trait-section">
            <h3><i class="bi bi-heart-fill text-danger me-2"></i>Determination</h3>
            <div class="trait-content">
              <p>Once per encounter, humans can gain +1 AP on their turn, representing their renowned persistence and drive.</p>
              <div class="mechanical-benefit">
                <strong>Mechanical Benefit:</strong> +1 AP (1/encounter)
              </div>
            </div>
          </div>

          <div class="trait-section">
            <h3><i class="bi bi-lightning text-primary me-2"></i>Versatile Learning</h3>
            <div class="trait-content">
              <p>Humans learn domain cards 25% faster than other races, reflecting their quick adaptation to new skills and techniques.</p>
              <div class="mechanical-benefit">
                <strong>Mechanical Benefit:</strong> Reduced advancement costs for domain cards
              </div>
            </div>
          </div>
        </section>

        <section class="cultural-variations">
          <h2>Cultural Variations</h2>
          <p>Human society is incredibly diverse, with different communities developing unique customs and specializations:</p>
          
          <div class="cultures-grid">
            <div class="culture-card city-states">
              <h3><i class="bi bi-building text-primary me-2"></i>City-States</h3>
              <div class="culture-traits">
                <ul>
                  <li>Bonus to social interaction cards</li>
                  <li>Start with additional trade goods</li>
                  <li>Access to urban-specific equipment</li>
                </ul>
              </div>
              <div class="culture-description">
                <p>Cosmopolitan centers of trade and learning where humans have developed sophisticated diplomatic and commercial skills.</p>
              </div>
            </div>
            
            <div class="culture-card frontier">
              <h3><i class="bi bi-tree text-success me-2"></i>Frontier Settlements</h3>
              <div class="culture-traits">
                <ul>
                  <li>Bonus to survival and exploration cards</li>
                  <li>Hardy constitution (+2 Health)</li>
                  <li>Knowledge of local terrain</li>
                </ul>
              </div>
              <div class="culture-description">
                <p>Hardy communities on the edge of civilization, where humans have learned to thrive in challenging environments.</p>
              </div>
            </div>
            
            <div class="culture-card nomadic">
              <h3><i class="bi bi-compass text-warning me-2"></i>Nomadic Tribes</h3>
              <div class="culture-traits">
                <ul>
                  <li>Movement cards cost -1 AP</li>
                  <li>Animal handling bonuses</li>
                  <li>Cultural knowledge of migration routes</li>
                </ul>
              </div>
              <div class="culture-description">
                <p>Mobile communities that follow seasonal patterns, developing deep bonds with their animals and the land.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="appearance-lifespan">
          <h2>Appearance and Lifespan</h2>
          <div class="appearance-grid">
            <div class="appearance-section">
              <h3>Physical Diversity</h3>
              <p>Humans display the widest variety in appearance of all races:</p>
              <ul>
                <li><strong>Height:</strong> 5 feet to 6 feet 5 inches</li>
                <li><strong>Build:</strong> From lean to stocky</li>
                <li><strong>Coloring:</strong> All variations of skin, hair, and eye color</li>
                <li><strong>Features:</strong> Tremendous regional variation</li>
              </ul>
            </div>
            <div class="lifespan-section">
              <h3>Life Stages</h3>
              <div class="life-stages">
                <div class="life-stage">
                  <strong>Childhood:</strong> 0-12 years
                </div>
                <div class="life-stage">
                  <strong>Adolescence:</strong> 13-18 years
                </div>
                <div class="life-stage">
                  <strong>Adulthood:</strong> 19-50 years
                </div>
                <div class="life-stage">
                  <strong>Elder:</strong> 51+ years
                </div>
              </div>
              <p class="lifespan-note">Most humans live 60-80 years, though some exceptional individuals reach 90 or beyond.</p>
            </div>
          </div>
        </section>

        <section class="relations">
          <h2>Relations with Other Races</h2>
          <p>Humans serve as diplomatic bridges between other races due to their adaptability and shorter lifespans creating urgency for cooperation.</p>
          
          <div class="relations-list">
            <div class="relation-item">
              <div class="relation-icon">
                <i class="bi bi-tree"></i>
              </div>
              <div class="relation-content">
                <h4>Elves</h4>
                <p>Respectful but sometimes impatient relationship. Humans admire elven wisdom but find their long-term perspective frustrating in urgent matters.</p>
              </div>
            </div>
            <div class="relation-item">
              <div class="relation-icon">
                <i class="bi bi-hammer"></i>
              </div>
              <div class="relation-content">
                <h4>Dwarves</h4>
                <p>Strong trading partnerships and mutual respect for craftsmanship, though cultural differences sometimes create tension.</p>
              </div>
            </div>
            <div class="relation-item">
              <div class="relation-icon">
                <i class="bi bi-person-plus"></i>
              </div>
              <div class="relation-content">
                <h4>Other Humans</h4>
                <p>Complex relationships ranging from close alliance to bitter rivalry, depending on cultural background and political circumstances.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="character-creation">
          <h2>Creating a Human Character</h2>
          <div class="creation-steps">
            <div class="creation-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Choose Cultural Background</h4>
                <p>Select which human culture your character comes from to determine starting bonuses and background knowledge.</p>
              </div>
            </div>
            <div class="creation-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Select Your Extra Card</h4>
                <p>Use your Adaptability trait to choose one additional starting card from any domain that fits your character concept.</p>
              </div>
            </div>
            <div class="creation-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Define Motivation</h4>
                <p>Humans are driven by their awareness of mortality. What does your character want to accomplish in their relatively short life?</p>
              </div>
            </div>
          </div>
        </section>

        <section class="roleplaying-tips">
          <h2>Roleplaying Humans</h2>
          <div class="tips-grid">
            <div class="tip-card">
              <h4><i class="bi bi-clock text-primary me-2"></i>Sense of Urgency</h4>
              <p>Humans feel the pressure of their shorter lifespans and often drive action forward when other races hesitate.</p>
            </div>
            <div class="tip-card">
              <h4><i class="bi bi-people text-success me-2"></i>Bridge Builder</h4>
              <p>Use your adaptability to help different party members understand each other and find common ground.</p>
            </div>
            <div class="tip-card">
              <h4><i class="bi bi-lightbulb text-warning me-2"></i>Innovation</h4>
              <p>Humans often come up with creative solutions by combining ideas from different sources in unexpected ways.</p>
            </div>
            <div class="tip-card">
              <h4><i class="bi bi-heart text-danger me-2"></i>Emotional Depth</h4>
              <p>The intensity of human emotions and relationships can drive compelling character moments and story development.</p>
            </div>
          </div>
        </section>

        <section class="world-context">
          <h2>Humans in Aethermoor</h2>
          <p>In the world of Aethermoor, humans have adapted to the post-Sundering world with remarkable resilience:</p>
          
          <div class="context-items">
            <div class="context-item">
              <h4>Political Leadership</h4>
              <p>Many of the recovering nations are led by human rulers who understand the need for rapid adaptation and cooperation.</p>
            </div>
            <div class="context-item">
              <h4>Magical Innovation</h4>
              <p>Human scholars and artificers are at the forefront of developing new applications for Aether Crystal technology.</p>
            </div>
            <div class="context-item">
              <h4>Cultural Exchange</h4>
              <p>Human traders and diplomats facilitate interaction between the scattered communities of different races.</p>
            </div>
          </div>
        </section>

        <section class="related-content">
          <h2>Related Content</h2>
          <div class="related-links">
            <a routerLink="/wiki/content/player-races/elf-race" class="related-link">
              <i class="bi bi-tree me-2"></i>Elf Race
            </a>
            <a routerLink="/wiki/content/player-races/dwarf-race" class="related-link">
              <i class="bi bi-hammer me-2"></i>Dwarf Race
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

    .page-badges {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .page-actions {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .race-overview {
      margin-bottom: 3rem;
    }

    .overview-card {
      background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
      color: white;
      border-radius: 12px;
      padding: 2rem;
    }

    .overview-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .race-icon {
      font-size: 4rem;
      opacity: 0.9;
    }

    .race-info h2 {
      margin: 0 0 0.5rem 0;
      font-size: 2rem;
    }

    .race-tagline {
      margin: 0;
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .race-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .stat-item {
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      backdrop-filter: blur(10px);
    }

    .racial-traits,
    .cultural-variations,
    .appearance-lifespan,
    .relations,
    .character-creation,
    .roleplaying-tips,
    .world-context,
    .related-content {
      margin-bottom: 3rem;
    }

    .racial-traits h2,
    .cultural-variations h2,
    .appearance-lifespan h2,
    .relations h2,
    .character-creation h2,
    .roleplaying-tips h2,
    .world-context h2,
    .related-content h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #28a745;
    }

    .trait-section {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #28a745;
    }

    .trait-section h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .trait-content p {
      color: #495057;
      margin-bottom: 1rem;
    }

    .mechanical-benefit {
      padding: 0.75rem;
      background: #d4edda;
      border-radius: 6px;
      color: #155724;
      font-weight: 500;
    }

    .cultures-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 1.5rem;
    }

    .culture-card {
      padding: 1.5rem;
      border-radius: 8px;
      border: 2px solid transparent;
    }

    .culture-card.city-states {
      background: #d1ecf1;
      border-color: #17a2b8;
    }

    .culture-card.frontier {
      background: #d4edda;
      border-color: #28a745;
    }

    .culture-card.nomadic {
      background: #fff3cd;
      border-color: #ffc107;
    }

    .culture-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .culture-traits ul {
      margin-bottom: 1rem;
      color: #495057;
    }

    .culture-traits li {
      margin-bottom: 0.5rem;
    }

    .culture-description p {
      margin: 0;
      color: #6c757d;
      font-style: italic;
    }

    .appearance-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .appearance-section h3,
    .lifespan-section h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .appearance-section ul {
      color: #495057;
    }

    .appearance-section li {
      margin-bottom: 0.5rem;
    }

    .life-stages {
      margin-bottom: 1rem;
    }

    .life-stage {
      padding: 0.5rem 1rem;
      background: #f8f9fa;
      border-radius: 6px;
      margin-bottom: 0.5rem;
      color: #495057;
    }

    .lifespan-note {
      color: #6c757d;
      font-style: italic;
      margin: 0;
    }

    .relations-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .relation-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
    }

    .relation-icon {
      font-size: 1.5rem;
      color: #28a745;
      margin-top: 0.25rem;
    }

    .relation-content h4 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .relation-content p {
      color: #6c757d;
      margin: 0;
    }

    .creation-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .creation-step {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
    }

    .step-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #28a745;
      color: white;
      border-radius: 50%;
      font-weight: bold;
      flex-shrink: 0;
    }

    .step-content h4 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .step-content p {
      color: #6c757d;
      margin: 0;
      line-height: 1.4;
    }

    .tips-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .tip-card {
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      border-left: 4px solid #28a745;
    }

    .tip-card h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .tip-card p {
      color: #6c757d;
      margin: 0;
      line-height: 1.5;
    }

    .context-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .context-item {
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #28a745;
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
      background: #28a745;
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

      .overview-header {
        flex-direction: column;
        text-align: center;
      }

      .race-stats {
        grid-template-columns: 1fr;
      }

      .cultures-grid,
      .appearance-grid,
      .creation-steps,
      .tips-grid,
      .context-items {
        grid-template-columns: 1fr;
      }

      .related-links {
        flex-direction: column;
      }
    }
  `]
})
export class HumanRacePageComponent {
}