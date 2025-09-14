import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-elf-race-page',
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
              <span class="breadcrumb-current">Elf Race</span>
            </div>
            <h1 class="page-title">Elf Race</h1>
            <div class="page-badges">
              <span class="badge bg-primary">✨ Magical</span>
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
                <i class="bi bi-tree"></i>
              </div>
              <div class="race-info">
                <h2>Elves</h2>
                <p class="race-tagline">Ancient and wise beings with deep connections to magic and the natural world, living for centuries.</p>
              </div>
            </div>
            <div class="race-stats">
              <div class="stat-item">
                <strong>Magical Affinity:</strong> Very High
              </div>
              <div class="stat-item">
                <strong>Lifespan:</strong> 400-600 years
              </div>
              <div class="stat-item">
                <strong>Complexity:</strong> Intermediate
              </div>
            </div>
          </div>
        </section>

        <section class="racial-traits">
          <h2>Racial Traits</h2>
          
          <div class="trait-section">
            <h3><i class="bi bi-stars text-primary me-2"></i>Aether Resonance</h3>
            <div class="trait-content">
              <p>Elves have an innate connection to aether crystals, allowing them to sense magical energy and enhance their spellcasting.</p>
              <div class="mechanical-benefit">
                <strong>Mechanical Benefit:</strong> +1 to all magical card effects
              </div>
            </div>
          </div>

          <div class="trait-section">
            <h3><i class="bi bi-clock-history text-success me-2"></i>Ancient Wisdom</h3>
            <div class="trait-content">
              <p>Centuries of life experience grant elves exceptional insight. They can reroll one failed Wisdom or Intelligence check per day.</p>
              <div class="mechanical-benefit">
                <strong>Mechanical Benefit:</strong> Reroll one mental attribute check per day
              </div>
            </div>
          </div>

          <div class="trait-section">
            <h3><i class="bi bi-eye text-info me-2"></i>Keen Senses</h3>
            <div class="trait-content">
              <p>Elven senses are supernaturally sharp, allowing them to notice details others miss and detect hidden magical auras.</p>
              <div class="mechanical-benefit">
                <strong>Mechanical Benefit:</strong> Advantage on perception checks; detect magic within 30 feet
              </div>
            </div>
          </div>

          <div class="trait-section">
            <h3><i class="bi bi-moon text-dark me-2"></i>Trance</h3>
            <div class="trait-content">
              <p>Elves don't sleep like other races. Instead, they enter a meditative trance that fully restores them in half the time.</p>
              <div class="mechanical-benefit">
                <strong>Mechanical Benefit:</strong> Require only 4 hours of rest instead of 8
              </div>
            </div>
          </div>
        </section>

        <section class="elven-subraces">
          <h2>Elven Subraces</h2>
          <p>Different elven communities have adapted to various environments and magical traditions over the millennia:</p>
          
          <div class="subraces-grid">
            <div class="subrace-card high-elves">
              <h3><i class="bi bi-gem text-primary me-2"></i>High Elves</h3>
              <div class="subrace-traits">
                <ul>
                  <li>Additional spell slot per day</li>
                  <li>Bonus to arcane knowledge</li>
                  <li>Can identify magical items by touch</li>
                  <li>Natural resistance to mind effects</li>
                </ul>
              </div>
              <div class="subrace-description">
                <p>Masters of high magic who built the great crystal cities. They prefer intellectual pursuits and sophisticated spellcraft.</p>
              </div>
            </div>
            
            <div class="subrace-card wood-elves">
              <h3><i class="bi bi-tree-fill text-success me-2"></i>Wood Elves</h3>
              <div class="subrace-traits">
                <ul>
                  <li>Animal communication abilities</li>
                  <li>Forest movement (no movement penalties)</li>
                  <li>Natural camouflage in wilderness</li>
                  <li>Druidic magic affinity</li>
                </ul>
              </div>
              <div class="subrace-description">
                <p>Guardians of the ancient forests who maintain the balance between civilization and the wild. Expert rangers and druids.</p>
              </div>
            </div>
            
            <div class="subrace-card dark-elves">
              <h3><i class="bi bi-moon-stars text-dark me-2"></i>Dark Elves</h3>
              <div class="subrace-traits">
                <ul>
                  <li>Shadow magic specialization</li>
                  <li>Superior darkvision (120 feet)</li>
                  <li>Stealth bonus in darkness</li>
                  <li>Resistance to shadow effects</li>
                </ul>
              </div>
              <div class="subrace-description">
                <p>Mysterious dwellers of the Underdark who have mastered shadow magic and adapted to lightless environments.</p>
              </div>
            </div>

            <div class="subrace-card sea-elves">
              <h3><i class="bi bi-water text-info me-2"></i>Sea Elves</h3>
              <div class="subrace-traits">
                <ul>
                  <li>Swim speed equal to walking speed</li>
                  <li>Water breathing abilities</li>
                  <li>Communication with sea creatures</li>
                  <li>Resistance to water-based attacks</li>
                </ul>
              </div>
              <div class="subrace-description">
                <p>Aquatic elves who patrol the coral cities beneath the waves. Masters of water magic and maritime knowledge.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="appearance-lifespan">
          <h2>Appearance and Lifespan</h2>
          <div class="appearance-grid">
            <div class="appearance-section">
              <h3>Physical Characteristics</h3>
              <p>Elves possess an otherworldly beauty that reflects their magical nature:</p>
              <ul>
                <li><strong>Height:</strong> 5 feet 6 inches to 6 feet 2 inches</li>
                <li><strong>Build:</strong> Lean and graceful</li>
                <li><strong>Ears:</strong> Distinctively pointed</li>
                <li><strong>Eyes:</strong> Often unusual colors (violet, gold, silver)</li>
                <li><strong>Features:</strong> Angular and refined</li>
                <li><strong>Aging:</strong> Maintain youthful appearance for centuries</li>
              </ul>
            </div>
            <div class="lifespan-section">
              <h3>Life Stages</h3>
              <div class="life-stages">
                <div class="life-stage">
                  <strong>Childhood:</strong> 0-50 years
                </div>
                <div class="life-stage">
                  <strong>Adolescence:</strong> 51-100 years
                </div>
                <div class="life-stage">
                  <strong>Young Adult:</strong> 101-200 years
                </div>
                <div class="life-stage">
                  <strong>Adult:</strong> 201-400 years
                </div>
                <div class="life-stage">
                  <strong>Elder:</strong> 401+ years
                </div>
              </div>
              <p class="lifespan-note">Elves reach physical maturity around 100 but aren't considered adults until they've lived at least a century.</p>
            </div>
          </div>
        </section>

        <section class="elven-culture">
          <h2>Elven Culture and Society</h2>
          <div class="culture-aspects">
            <div class="culture-aspect">
              <h4><i class="bi bi-book text-primary me-2"></i>Knowledge Preservation</h4>
              <p>Elves are the keepers of ancient lore, maintaining vast libraries and oral traditions that span millennia. They believe knowledge should be preserved for future generations.</p>
            </div>
            <div class="culture-aspect">
              <h4><i class="bi bi-palette text-success me-2"></i>Artistic Excellence</h4>
              <p>With centuries to perfect their craft, elven artisans create works of unparalleled beauty. Their art, music, and architecture are considered legendary.</p>
            </div>
            <div class="culture-aspect">
              <h4><i class="bi bi-hourglass text-warning me-2"></i>Long-term Perspective</h4>
              <p>Elves think in terms of decades or centuries rather than years. This can make them seem slow to act, but their decisions are carefully considered.</p>
            </div>
            <div class="culture-aspect">
              <h4><i class="bi bi-shield text-danger me-2"></i>Environmental Guardianship</h4>
              <p>Having witnessed the rise and fall of civilizations, elves understand the importance of protecting the natural world for future generations.</p>
            </div>
          </div>
        </section>

        <section class="magic-affinity">
          <h2>Magical Traditions</h2>
          <p>Elven magical practice is deeply tied to their racial identity and varies by subrace:</p>
          
          <div class="magic-traditions">
            <div class="tradition-item">
              <div class="tradition-icon">
                <i class="bi bi-lightning-charge"></i>
              </div>
              <div class="tradition-content">
                <h4>Elemental Mastery</h4>
                <p>All elves can manipulate at least one elemental force, often tied to their subrace heritage and personal affinity.</p>
              </div>
            </div>
            <div class="tradition-item">
              <div class="tradition-icon">
                <i class="bi bi-magic"></i>
              </div>
              <div class="tradition-content">
                <h4>Ritual Magic</h4>
                <p>Elves excel at complex, long-duration rituals that can have effects lasting months or even years.</p>
              </div>
            </div>
            <div class="tradition-item">
              <div class="tradition-icon">
                <i class="bi bi-eye-fill"></i>
              </div>
              <div class="tradition-content">
                <h4>Divination</h4>
                <p>Many elves develop prophetic abilities, allowing them to glimpse possible futures and guide important decisions.</p>
              </div>
            </div>
            <div class="tradition-item">
              <div class="tradition-icon">
                <i class="bi bi-heart-pulse"></i>
              </div>
              <div class="tradition-content">
                <h4>Life Magic</h4>
                <p>Elven healing magic is renowned for its effectiveness, often completely restoring injuries that would permanently disable others.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="relations">
          <h2>Relations with Other Races</h2>
          
          <div class="relations-list">
            <div class="relation-item">
              <div class="relation-icon">
                <i class="bi bi-person-circle"></i>
              </div>
              <div class="relation-content">
                <h4>Humans</h4>
                <p>Elves admire human passion and innovation but are often frustrated by their impatience and short-sighted thinking. Relationships tend to be teacher-student dynamics.</p>
              </div>
            </div>
            <div class="relation-item">
              <div class="relation-icon">
                <i class="bi bi-hammer"></i>
              </div>
              <div class="relation-content">
                <h4>Dwarves</h4>
                <p>A complex relationship of mutual respect and fundamental disagreement. Dwarves appreciate elven craftsmanship but find their approach too abstract and impractical.</p>
              </div>
            </div>
            <div class="relation-item">
              <div class="relation-icon">
                <i class="bi bi-tree"></i>
              </div>
              <div class="relation-content">
                <h4>Other Elves</h4>
                <p>Strong bonds exist within elven communities, but different subraces can have dramatically different worldviews leading to philosophical conflicts.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="character-creation">
          <h2>Creating an Elf Character</h2>
          <div class="creation-steps">
            <div class="creation-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Choose Subrace</h4>
                <p>Select which elven community your character comes from, as this determines your magical specializations and cultural background.</p>
              </div>
            </div>
            <div class="creation-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Define Your Age</h4>
                <p>Decide how old your elf is and what experiences they've had. A 150-year-old elf is quite different from a 400-year-old one.</p>
              </div>
            </div>
            <div class="creation-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Select Magical Focus</h4>
                <p>Choose what type of magic your elf specializes in, based on their subrace and personal interests over their long life.</p>
              </div>
            </div>
            <div class="creation-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Consider Perspective</h4>
                <p>Think about how your elf's long lifespan affects their worldview and relationships with shorter-lived companions.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="roleplaying-tips">
          <h2>Roleplaying Elves</h2>
          <div class="tips-grid">
            <div class="tip-card">
              <h4><i class="bi bi-hourglass-split text-primary me-2"></i>Patience</h4>
              <p>Remember that your elf has seen many trends come and go. What seems urgent to others might be just another passing phase to you.</p>
            </div>
            <div class="tip-card">
              <h4><i class="bi bi-mortarboard text-success me-2"></i>Wisdom</h4>
              <p>Your character has had centuries to learn from mistakes. Share knowledge and advice, but avoid being condescending to younger races.</p>
            </div>
            <div class="tip-card">
              <h4><i class="bi bi-heart text-danger me-2"></i>Emotional Depth</h4>
              <p>Living so long means experiencing profound loss. Consider how centuries of relationships have shaped your character's emotional landscape.</p>
            </div>
            <div class="tip-card">
              <h4><i class="bi bi-stars text-warning me-2"></i>Magic as Nature</h4>
              <p>For elves, magic isn't just a tool—it's as natural as breathing. Consider how this affects your character's worldview and problem-solving approach.</p>
            </div>
          </div>
        </section>

        <section class="world-context">
          <h2>Elves in Aethermoor</h2>
          <p>In the post-Sundering world, elves have taken on crucial roles in rebuilding and preserving knowledge:</p>
          
          <div class="context-items">
            <div class="context-item">
              <h4>Crystal Guardians</h4>
              <p>Elves are often entrusted with protecting and studying the powerful aether crystals that emerged after the Sundering.</p>
            </div>
            <div class="context-item">
              <h4>Lore Keepers</h4>
              <p>Many of the records of the old world survived because elven scholars preserved them through the chaos of the Sundering.</p>
            </div>
            <div class="context-item">
              <h4>Diplomatic Mediators</h4>
              <p>Their long perspective and magical insight make elves valuable mediators in conflicts between the rebuilding nations.</p>
            </div>
            <div class="context-item">
              <h4>Environmental Restoration</h4>
              <p>Elven druids and rangers lead efforts to heal the magical scars left by the Sundering across the landscape.</p>
            </div>
          </div>
        </section>

        <section class="related-content">
          <h2>Related Content</h2>
          <div class="related-links">
            <a routerLink="/wiki/content/player-races/human-race" class="related-link">
              <i class="bi bi-person-circle me-2"></i>Human Race
            </a>
            <a routerLink="/wiki/content/player-races/dwarf-race" class="related-link">
              <i class="bi bi-hammer me-2"></i>Dwarf Race
            </a>
            <a routerLink="/wiki/game-mechanics/core-systems/card-system" class="related-link">
              <i class="bi bi-collection me-2"></i>Magic System
            </a>
            <a routerLink="/wiki/setting-lore/world-building/world-overview" class="related-link">
              <i class="bi bi-globe me-2"></i>World Overview
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
      background: linear-gradient(135deg, #6f42c1 0%, #20c997 100%);
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
    .elven-subraces,
    .appearance-lifespan,
    .elven-culture,
    .magic-affinity,
    .relations,
    .character-creation,
    .roleplaying-tips,
    .world-context,
    .related-content {
      margin-bottom: 3rem;
    }

    .racial-traits h2,
    .elven-subraces h2,
    .appearance-lifespan h2,
    .elven-culture h2,
    .magic-affinity h2,
    .relations h2,
    .character-creation h2,
    .roleplaying-tips h2,
    .world-context h2,
    .related-content h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #6f42c1;
    }

    .trait-section {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #6f42c1;
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
      background: #e7e3ff;
      border-radius: 6px;
      color: #5a2d82;
      font-weight: 500;
    }

    .subraces-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .subrace-card {
      padding: 1.5rem;
      border-radius: 8px;
      border: 2px solid transparent;
    }

    .subrace-card.high-elves {
      background: #e7e3ff;
      border-color: #6f42c1;
    }

    .subrace-card.wood-elves {
      background: #d4edda;
      border-color: #28a745;
    }

    .subrace-card.dark-elves {
      background: #e2e3e5;
      border-color: #6c757d;
    }

    .subrace-card.sea-elves {
      background: #d1ecf1;
      border-color: #17a2b8;
    }

    .subrace-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .subrace-traits ul {
      margin-bottom: 1rem;
      color: #495057;
    }

    .subrace-traits li {
      margin-bottom: 0.5rem;
    }

    .subrace-description p {
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

    .culture-aspects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .culture-aspect {
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #6f42c1;
    }

    .culture-aspect h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .culture-aspect p {
      color: #6c757d;
      margin: 0;
      line-height: 1.5;
    }

    .magic-traditions {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .tradition-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      border-left: 4px solid #6f42c1;
    }

    .tradition-icon {
      font-size: 1.5rem;
      color: #6f42c1;
      margin-top: 0.25rem;
    }

    .tradition-content h4 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .tradition-content p {
      color: #6c757d;
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
      color: #6f42c1;
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
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
      background: #6f42c1;
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
      border-left: 4px solid #6f42c1;
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
      border-left: 4px solid #6f42c1;
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
      background: #6f42c1;
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

      .subraces-grid,
      .appearance-grid,
      .culture-aspects,
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
export class ElfRacePageComponent {
}