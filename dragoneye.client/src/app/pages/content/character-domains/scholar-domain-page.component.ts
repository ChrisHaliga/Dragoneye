import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-scholar-domain-page',
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
              <a routerLink="/wiki/content/character-domains" class="breadcrumb-link">Character Domains</a>
              <i class="bi bi-chevron-right mx-2"></i>
              <span class="breadcrumb-current">Scholar Domain</span>
            </div>
            <h1 class="page-title">Scholar Domain</h1>
            <div class="page-badges">
              <span class="badge bg-primary">💡 Ideas</span>
              <span class="badge bg-info">Character Domain</span>
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
        <section class="domain-overview">
          <div class="overview-card">
            <div class="overview-header">
              <div class="domain-icon">
                <i class="bi bi-mortarboard"></i>
              </div>
              <div class="domain-info">
                <h2>Scholar Domain</h2>
                <p class="domain-tagline">Scholars pursue knowledge, magical theory, and intellectual mastery above all else.</p>
              </div>
            </div>
            <div class="domain-stats">
              <div class="stat-item">
                <strong>Primary Focus:</strong> Magic & Knowledge
              </div>
              <div class="stat-item">
                <strong>Complexity:</strong> High
              </div>
              <div class="stat-item">
                <strong>Team Role:</strong> Support & Control
              </div>
            </div>
          </div>
        </section>

        <section class="core-abilities">
          <h2>Core Abilities</h2>
          
          <div class="ability-section">
            <h3><i class="bi bi-stars text-primary me-2"></i>Arcane Studies</h3>
            <p>Access to magical theory and spellcasting cards that manipulate reality through understanding rather than raw power.</p>
            <ul>
              <li>Theoretical magic based on knowledge and preparation</li>
              <li>Spell synthesis and magical research capabilities</li>
              <li>Access to rare and unique magical effects</li>
            </ul>
          </div>

          <div class="ability-section">
            <h3><i class="bi bi-book text-success me-2"></i>Lore Mastery</h3>
            <p>Extensive knowledge about history, cultures, monsters, and magical phenomena.</p>
            <ul>
              <li>Identify creatures, items, and magical effects</li>
              <li>Access to historical and cultural information</li>
              <li>Understanding of ancient languages and symbols</li>
            </ul>
          </div>

          <div class="ability-section">
            <h3><i class="bi bi-search text-info me-2"></i>Research Techniques</h3>
            <p>Ability to discover information, decode ancient texts, and unravel mysteries.</p>
            <ul>
              <li>Advanced investigation and analysis skills</li>
              <li>Magical detection and divination abilities</li>
              <li>Library and archive research expertise</li>
            </ul>
          </div>
        </section>

        <section class="domain-cards">
          <h2>Domain Cards</h2>
          
          <div class="card-tier">
            <h3 class="tier-header level-1">Level 1 Cards</h3>
            <div class="cards-grid">
              <div class="card-item">
                <h4>Analyze</h4>
                <div class="card-cost">1 AP</div>
                <p>Reveal creature or item properties, weaknesses, and magical nature.</p>
              </div>
              <div class="card-item">
                <h4>Recall Lore</h4>
                <div class="card-cost">1 AP</div>
                <p>Access relevant historical knowledge, cultural facts, or monster information.</p>
              </div>
              <div class="card-item">
                <h4>Cantrip</h4>
                <div class="card-cost">1 AP, 1 SP</div>
                <p>Minor magical effects like light, sound, or small object manipulation.</p>
              </div>
            </div>
          </div>

          <div class="card-tier">
            <h3 class="tier-header level-3">Level 3 Cards</h3>
            <div class="cards-grid">
              <div class="card-item">
                <h4>Identify Magic</h4>
                <div class="card-cost">2 AP, 1 SP</div>
                <p>Understand magical items, spells, and ongoing effects completely.</p>
              </div>
              <div class="card-item">
                <h4>Language Comprehension</h4>
                <div class="card-cost">1 AP, 2 SP</div>
                <p>Understand any spoken or written language temporarily.</p>
              </div>
              <div class="card-item">
                <h4>Magical Theory</h4>
                <div class="card-cost">2 AP, 2 SP</div>
                <p>Enhance an ally's magical cards or provide insight into magical problems.</p>
              </div>
            </div>
          </div>

          <div class="card-tier">
            <h3 class="tier-header level-5">Level 5 Cards</h3>
            <div class="cards-grid">
              <div class="card-item">
                <h4>Decipher Ancient</h4>
                <div class="card-cost">3 AP, 3 SP</div>
                <p>Unlock secrets of lost civilizations and understand ancient magics.</p>
              </div>
              <div class="card-item">
                <h4>Spell Synthesis</h4>
                <div class="card-cost">3 AP, 4 SP</div>
                <p>Combine multiple magical effects into a single powerful spell.</p>
              </div>
              <div class="card-item">
                <h4>Akashic Reading</h4>
                <div class="card-cost">2 AP, 5 SP</div>
                <p>Glimpse past events at a location through magical resonance.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="magical-schools">
          <h2>Magical Schools</h2>
          <p>Scholars can specialize in different magical traditions, each offering unique approaches to spellcasting:</p>
          
          <div class="schools-grid">
            <div class="school-card elementalism">
              <h3><i class="bi bi-lightning text-warning me-2"></i>Elementalism</h3>
              <ul>
                <li>Control over fire, water, earth, and air</li>
                <li>Focuses on direct magical effects</li>
                <li>Battlefield control and environmental manipulation</li>
              </ul>
            </div>
            
            <div class="school-card transmutation">
              <h3><i class="bi bi-arrow-repeat text-primary me-2"></i>Transmutation</h3>
              <ul>
                <li>Changing matter and energy</li>
                <li>Alchemy and item enhancement</li>
                <li>Transformation of objects and substances</li>
              </ul>
            </div>
            
            <div class="school-card divination">
              <h3><i class="bi bi-eye text-info me-2"></i>Divination</h3>
              <ul>
                <li>Information gathering and foresight</li>
                <li>Scrying and prediction magic</li>
                <li>Detection and revelation effects</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="academic-pursuits">
          <h2>Academic Pursuits</h2>
          <p>Scholars advance through intellectual achievement rather than simple experience:</p>
          
          <div class="pursuits-list">
            <div class="pursuit-item">
              <i class="bi bi-book-half text-primary"></i>
              <div>
                <h4>Researching New Magical Theories</h4>
                <p>Developing original spells and magical techniques through study and experimentation.</p>
              </div>
            </div>
            <div class="pursuit-item">
              <i class="bi bi-people text-success"></i>
              <div>
                <h4>Studying Under Master Practitioners</h4>
                <p>Learning advanced techniques from experienced scholars and mages.</p>
              </div>
            </div>
            <div class="pursuit-item">
              <i class="bi bi-search text-info"></i>
              <div>
                <h4>Discovering Ancient Knowledge</h4>
                <p>Uncovering lost lore, forgotten spells, and historical secrets.</p>
              </div>
            </div>
          </div>
          
          <div class="progression-note">
            <i class="bi bi-info-circle text-primary me-2"></i>
            <strong>Note:</strong> Character progression ties directly to in-game learning and discovery rather than just combat experience.
          </div>
        </section>

        <section class="gameplay-tips">
          <h2>Playing a Scholar</h2>
          <div class="tips-grid">
            <div class="tip-card">
              <h4><i class="bi bi-lightbulb text-warning me-2"></i>Preparation is Key</h4>
              <p>Scholars excel when they can prepare for challenges. Study your enemies and plan your spell choices.</p>
            </div>
            <div class="tip-card">
              <h4><i class="bi bi-people-fill text-primary me-2"></i>Support Your Team</h4>
              <p>Use your knowledge to identify threats and enhance allies' abilities rather than focusing on direct damage.</p>
            </div>
            <div class="tip-card">
              <h4><i class="bi bi-clock text-info me-2"></i>Resource Management</h4>
              <p>SP is limited—choose when to use your most powerful abilities for maximum impact.</p>
            </div>
            <div class="tip-card">
              <h4><i class="bi bi-journal-text text-success me-2"></i>Take Notes</h4>
              <p>Keep track of information you discover. Your lore knowledge becomes more valuable over time.</p>
            </div>
          </div>
        </section>

        <section class="related-content">
          <h2>Related Content</h2>
          <div class="related-links">
            <a routerLink="/wiki/content/character-domains/warrior-domain" class="related-link">
              <i class="bi bi-shield me-2"></i>Warrior Domain
            </a>
            <a routerLink="/wiki/game-mechanics/core-systems/card-system" class="related-link">
              <i class="bi bi-collection me-2"></i>Card System
            </a>
            <a routerLink="/wiki/setting-lore/world-building/magic-technology" class="related-link">
              <i class="bi bi-lightning me-2"></i>Magic & Technology
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

    .domain-overview {
      margin-bottom: 3rem;
    }

    .overview-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

    .domain-icon {
      font-size: 4rem;
      opacity: 0.9;
    }

    .domain-info h2 {
      margin: 0 0 0.5rem 0;
      font-size: 2rem;
    }

    .domain-tagline {
      margin: 0;
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .domain-stats {
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

    .core-abilities,
    .domain-cards,
    .magical-schools,
    .academic-pursuits,
    .gameplay-tips,
    .related-content {
      margin-bottom: 3rem;
    }

    .core-abilities h2,
    .domain-cards h2,
    .magical-schools h2,
    .academic-pursuits h2,
    .gameplay-tips h2,
    .related-content h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #667eea;
    }

    .ability-section {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #667eea;
    }

    .ability-section h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .ability-section p {
      color: #495057;
      margin-bottom: 1rem;
    }

    .ability-section ul {
      color: #6c757d;
      margin: 0;
    }

    .ability-section li {
      margin-bottom: 0.5rem;
    }

    .card-tier {
      margin-bottom: 2rem;
    }

    .tier-header {
      color: #2c3e50;
      margin-bottom: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      display: inline-block;
    }

    .tier-header.level-1 {
      background: #d4edda;
      color: #155724;
    }

    .tier-header.level-3 {
      background: #fff3cd;
      color: #856404;
    }

    .tier-header.level-5 {
      background: #f8d7da;
      color: #721c24;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    .card-item {
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      padding: 1.5rem;
      position: relative;
    }

    .card-item h4 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .card-cost {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      background: #007bff;
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: bold;
    }

    .card-item p {
      color: #6c757d;
      margin: 0;
      line-height: 1.4;
    }

    .schools-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .school-card {
      padding: 1.5rem;
      border-radius: 8px;
      border: 2px solid transparent;
    }

    .school-card.elementalism {
      background: #fff3cd;
      border-color: #ffc107;
    }

    .school-card.transmutation {
      background: #d1ecf1;
      border-color: #17a2b8;
    }

    .school-card.divination {
      background: #d4edda;
      border-color: #28a745;
    }

    .school-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .school-card ul {
      margin: 0;
      color: #495057;
    }

    .school-card li {
      margin-bottom: 0.5rem;
    }

    .pursuits-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .pursuit-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
    }

    .pursuit-item i {
      font-size: 1.5rem;
      margin-top: 0.25rem;
    }

    .pursuit-item h4 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .pursuit-item p {
      color: #6c757d;
      margin: 0;
    }

    .progression-note {
      padding: 1rem;
      background: #e3f2fd;
      border-radius: 6px;
      margin-top: 1.5rem;
      color: #1565c0;
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
      border-left: 4px solid #667eea;
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
      background: #007bff;
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

      .domain-stats {
        grid-template-columns: 1fr;
      }

      .cards-grid,
      .schools-grid,
      .tips-grid {
        grid-template-columns: 1fr;
      }

      .related-links {
        flex-direction: column;
      }
    }
  `]
})
export class ScholarDomainPageComponent {
}