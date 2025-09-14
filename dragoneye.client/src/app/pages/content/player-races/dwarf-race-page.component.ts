import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dwarf-race-page',
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
              <span class="breadcrumb-current">Dwarf Race</span>
            </div>
            <h1 class="page-title">Dwarf Race</h1>
            <div class="page-badges">
              <span class="badge bg-warning">🔨 Crafters</span>
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
                <i class="bi bi-hammer"></i>
              </div>
              <div class="race-info">
                <h2>Dwarves</h2>
                <p class="race-tagline">Master craftsmen and engineers who build to last, creating wonders from stone, metal, and crystal.</p>
              </div>
            </div>
            <div class="race-stats">
              <div class="stat-item">
                <strong>Crafting Mastery:</strong> Legendary
              </div>
              <div class="stat-item">
                <strong>Lifespan:</strong> 200-300 years
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
            <h3><i class="bi bi-tools text-warning me-2"></i>Master Craftsman</h3>
            <div class="trait-content">
              <p>Dwarves have an innate understanding of materials and construction. All crafted items have enhanced durability and effectiveness.</p>
              <div class="mechanical-benefit">
                <strong>Mechanical Benefit:</strong> Crafted equipment gains +1 durability and enhanced properties
              </div>
            </div>
          </div>

          <div class="trait-section">
            <h3><i class="bi bi-shield-fill text-primary me-2"></i>Stone Resilience</h3>
            <div class="trait-content">
              <p>Dwarven constitution is legendary. They gain resistance to poison, disease, and physical damage, plus advantage on Constitution saves.</p>
              <div class="mechanical-benefit">
                <strong>Mechanical Benefit:</strong> +2 Health, resistance to status effects
              </div>
            </div>
          </div>

          <div class="trait-section">
            <h3><i class="bi bi-gem text-success me-2"></i>Crystal Attunement</h3>
            <div class="trait-content">
              <p>Dwarves can sense the quality and properties of aether crystals by touch, making them excellent crystal smiths and enchanters.</p>
              <div class="mechanical-benefit">
                <strong>Mechanical Benefit:</strong> Identify crystal properties; enhance crystal-based equipment
              </div>
            </div>
          </div>

          <div class="trait-section">
            <h3><i class="bi bi-geo-alt text-danger me-2"></i>Underground Navigation</h3>
            <div class="trait-content">
              <p>Centuries of living underground have given dwarves perfect spatial awareness in caves, tunnels, and underground structures.</p>
              <div class="mechanical-benefit">
                <strong>Mechanical Benefit:</strong> Cannot get lost underground; detect structural weaknesses
              </div>
            </div>
          </div>
        </section>

        <section class="dwarven-clans">
          <h2>Dwarven Clans</h2>
          <p>Dwarven society is organized around ancient clan traditions, each specializing in different aspects of their civilization:</p>
          
          <div class="clans-grid">
            <div class="clan-card forge-clans">
              <h3><i class="bi bi-fire text-danger me-2"></i>Forge Clans</h3>
              <div class="clan-traits">
                <ul>
                  <li>Bonus to metalworking and smithing</li>
                  <li>Can craft legendary weapons and armor</li>
                  <li>Fire resistance and heat immunity</li>
                  <li>Understanding of volcanic geology</li>
                </ul>
              </div>
              <div class="clan-description">
                <p>Masters of the forge who create the finest weapons and armor in the known world. Their works are sought after by heroes across all nations.</p>
              </div>
            </div>
            
            <div class="clan-card stone-clans">
              <h3><i class="bi bi-bricks text-primary me-2"></i>Stone Clans</h3>
              <div class="clan-traits">
                <ul>
                  <li>Architectural and engineering expertise</li>
                  <li>Can reinforce structures permanently</li>
                  <li>Earth magic specialization</li>
                  <li>Knowledge of underground systems</li>
                </ul>
              </div>
              <div class="clan-description">
                <p>Builders of the great mountain halls and underground cities. They create structures that last millennia and understand the living stone.</p>
              </div>
            </div>
            
            <div class="clan-card crystal-clans">
              <h3><i class="bi bi-gem text-success me-2"></i>Crystal Clans</h3>
              <div class="clan-traits">
                <ul>
                  <li>Aether crystal expertise</li>
                  <li>Can create crystal-powered devices</li>
                  <li>Enhanced magical item creation</li>
                  <li>Deep understanding of magical theory</li>
                </ul>
              </div>
              <div class="clan-description">
                <p>Specialists in working with aether crystals and magical materials. They bridge the gap between traditional craftsmanship and arcane arts.</p>
              </div>
            </div>

            <div class="clan-card merchant-clans">
              <h3><i class="bi bi-coin text-warning me-2"></i>Merchant Clans</h3>
              <div class="clan-traits">
                <ul>
                  <li>Trading and negotiation bonuses</li>
                  <li>Network of contacts across nations</li>
                  <li>Appraisal and evaluation skills</li>
                  <li>Knowledge of rare materials</li>
                </ul>
              </div>
              <div class="clan-description">
                <p>The economic backbone of dwarven society who maintain trade relationships with surface peoples and know the value of everything.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="appearance-lifespan">
          <h2>Appearance and Lifespan</h2>
          <div class="appearance-grid">
            <div class="appearance-section">
              <h3>Physical Characteristics</h3>
              <p>Dwarves are built for strength and endurance, reflecting their mountain heritage:</p>
              <ul>
                <li><strong>Height:</strong> 4 feet to 5 feet</li>
                <li><strong>Build:</strong> Stocky and muscular</li>
                <li><strong>Hair:</strong> Thick and often elaborately braided</li>
                <li><strong>Beard:</strong> Symbol of status and clan identity</li>
                <li><strong>Skin:</strong> Often weathered from forge work</li>
                <li><strong>Eyes:</strong> Sharp and appraising</li>
              </ul>
            </div>
            <div class="lifespan-section">
              <h3>Life Stages</h3>
              <div class="life-stages">
                <div class="life-stage">
                  <strong>Childhood:</strong> 0-30 years
                </div>
                <div class="life-stage">
                  <strong>Apprenticeship:</strong> 31-60 years
                </div>
                <div class="life-stage">
                  <strong>Journeyman:</strong> 61-120 years
                </div>
                <div class="life-stage">
                  <strong>Master:</strong> 121-250 years
                </div>
                <div class="life-stage">
                  <strong>Elder:</strong> 251+ years
                </div>
              </div>
              <p class="lifespan-note">Dwarven society is built around the progression from apprentice to master craftsman, with elders holding positions of great respect.</p>
            </div>
          </div>
        </section>

        <section class="dwarven-culture">
          <h2>Dwarven Culture and Society</h2>
          <div class="culture-aspects">
            <div class="culture-aspect">
              <h4><i class="bi bi-hammer text-warning me-2"></i>Craftsmanship Honor</h4>
              <p>Every dwarf takes pride in their work, believing that creating something of quality is a sacred act. Shoddy workmanship is considered deeply shameful.</p>
            </div>
            <div class="culture-aspect">
              <h4><i class="bi bi-people text-primary me-2"></i>Clan Loyalty</h4>
              <p>Family and clan bonds are paramount. Dwarves will go to great lengths to support their clan members and uphold their family's reputation.</p>
            </div>
            <div class="culture-aspect">
              <h4><i class="bi bi-handshake text-success me-2"></i>Debt and Honor</h4>
              <p>Dwarves keep meticulous records of debts and favors. They believe in paying what is owed and remembering both kindnesses and slights.</p>
            </div>
            <div class="culture-aspect">
              <h4><i class="bi bi-beer text-info me-2"></i>Hospitality</h4>
              <p>Despite their sometimes gruff exterior, dwarves are incredibly hospitable to guests, believing that sharing food and drink creates sacred bonds.</p>
            </div>
          </div>
        </section>

        <section class="crafting-traditions">
          <h2>Legendary Crafting Traditions</h2>
          <p>Dwarven craftsmanship is renowned throughout the world for its durability, beauty, and magical enhancement:</p>
          
          <div class="crafting-traditions-list">
            <div class="tradition-item">
              <div class="tradition-icon">
                <i class="bi bi-hammer"></i>
              </div>
              <div class="tradition-content">
                <h4>Runic Smithing</h4>
                <p>The ancient art of inscribing magical runes into metal during the forging process, creating weapons and armor with permanent enchantments.</p>
              </div>
            </div>
            <div class="tradition-item">
              <div class="tradition-icon">
                <i class="bi bi-gem"></i>
              </div>
              <div class="tradition-content">
                <h4>Crystal Fusion</h4>
                <p>Incorporating aether crystals into crafted items to enhance their properties and create powerful magical artifacts.</p>
              </div>
            </div>
            <div class="tradition-item">
              <div class="tradition-icon">
                <i class="bi bi-building"></i>
              </div>
              <div class="tradition-content">
                <h4>Living Stone Architecture</h4>
                <p>Construction techniques that work with the natural properties of stone, creating buildings that grow stronger over time.</p>
              </div>
            </div>
            <div class="tradition-item">
              <div class="tradition-icon">
                <i class="bi bi-gear"></i>
              </div>
              <div class="tradition-content">
                <h4>Precision Engineering</h4>
                <p>Mechanical devices and clockwork constructs that operate with incredible accuracy and reliability for centuries.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="mountain-heritage">
          <h2>Mountain Heritage</h2>
          <div class="heritage-aspects">
            <div class="heritage-item">
              <h4><i class="bi bi-geo-alt text-danger me-2"></i>Deep Knowledge</h4>
              <p>Dwarves understand mountains from foundation to peak, knowing secret passages, mineral veins, and the structural integrity of stone formations.</p>
            </div>
            <div class="heritage-item">
              <h4><i class="bi bi-shield text-primary me-2"></i>Fortress Cities</h4>
              <p>Dwarven settlements are marvels of defensive architecture, carved into mountain faces and connected by secure tunnel networks.</p>
            </div>
            <div class="heritage-item">
              <h4><i class="bi bi-droplet text-info me-2"></i>Resource Management</h4>
              <p>Living in harsh mountain environments has taught dwarves to make the most of every resource and waste nothing of value.</p>
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
                <p>Strong trading relationships built on mutual benefit. Dwarves appreciate human adaptability and business sense, though they sometimes find humans unreliable.</p>
              </div>
            </div>
            <div class="relation-item">
              <div class="relation-icon">
                <i class="bi bi-tree"></i>
              </div>
              <div class="relation-content">
                <h4>Elves</h4>
                <p>Complex relationship of respect and frustration. Dwarves admire elven artistry but find their approach too theoretical and impractical.</p>
              </div>
            </div>
            <div class="relation-item">
              <div class="relation-icon">
                <i class="bi bi-hammer"></i>
              </div>
              <div class="relation-content">
                <h4>Other Dwarves</h4>
                <p>Strong clan bonds create intense loyalty within groups, but inter-clan politics can be complex, with ancient feuds and alliances.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="character-creation">
          <h2>Creating a Dwarf Character</h2>
          <div class="creation-steps">
            <div class="creation-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Choose Your Clan</h4>
                <p>Select which dwarven clan your character belongs to, determining their specialized knowledge and social connections.</p>
              </div>
            </div>
            <div class="creation-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Define Your Craft</h4>
                <p>Every dwarf has a craft or trade they've trained in. This shapes their identity and provides practical abilities.</p>
              </div>
            </div>
            <div class="creation-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Establish Clan Status</h4>
                <p>Determine your character's standing within their clan - are they a respected master, promising apprentice, or black sheep?</p>
              </div>
            </div>
            <div class="creation-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Consider Adventure Motivation</h4>
                <p>What would drive a dwarf to leave their mountain home? Seeking rare materials, fulfilling clan obligations, or personal honor?</p>
              </div>
            </div>
          </div>
        </section>

        <section class="roleplaying-tips">
          <h2>Roleplaying Dwarves</h2>
          <div class="tips-grid">
            <div class="tip-card">
              <h4><i class="bi bi-handshake text-primary me-2"></i>Keep Your Word</h4>
              <p>Dwarves value their word above almost everything else. If your character makes a promise, they'll move mountains to keep it.</p>
            </div>
            <div class="tip-card">
              <h4><i class="bi bi-tools text-warning me-2"></i>Practical Solutions</h4>
              <p>Approach problems with practical, tested methods. Your character trusts in tools, craftsmanship, and proven techniques.</p>
            </div>
            <div class="tip-card">
              <h4><i class="bi bi-people text-success me-2"></i>Clan Pride</h4>
              <p>Take pride in your clan's achievements and feel responsible for upholding their reputation through your actions.</p>
            </div>
            <div class="tip-card">
              <h4><i class="bi bi-heart text-danger me-2"></i>Gruff Kindness</h4>
              <p>Show care through actions rather than words. A dwarf might grumble while helping, but they'll always help.</p>
            </div>
          </div>
        </section>

        <section class="world-context">
          <h2>Dwarves in Aethermoor</h2>
          <p>Since the Sundering, dwarves have played crucial roles in rebuilding civilization:</p>
          
          <div class="context-items">
            <div class="context-item">
              <h4>Infrastructure Rebuilding</h4>
              <p>Dwarven engineers and architects are leading the reconstruction of cities, bridges, and defensive structures across the continent.</p>
            </div>
            <div class="context-item">
              <h4>Crystal Technology</h4>
              <p>Dwarven crystal smiths are at the forefront of developing new applications for aether crystals in everyday tools and magical devices.</p>
            </div>
            <div class="context-item">
              <h4>Trade Networks</h4>
              <p>Dwarven merchant clans have reestablished many of the trade routes that were disrupted by the Sundering, enabling economic recovery.</p>
            </div>
            <div class="context-item">
              <h4>Fortress Cities</h4>
              <p>Several dwarven mountain strongholds survived the Sundering intact, serving as safe havens and bases for exploration of the changed world.</p>
            </div>
          </div>
        </section>

        <section class="related-content">
          <h2>Related Content</h2>
          <div class="related-links">
            <a routerLink="/wiki/content/player-races/human-race" class="related-link">
              <i class="bi bi-person-circle me-2"></i>Human Race
            </a>
            <a routerLink="/wiki/content/player-races/elf-race" class="related-link">
              <i class="bi bi-tree me-2"></i>Elf Race
            </a>
            <a routerLink="/wiki/game-mechanics/core-systems/card-system" class="related-link">
              <i class="bi bi-collection me-2"></i>Crafting System
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
      background: linear-gradient(135deg, #fd7e14 0%, #dc3545 100%);
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
    .dwarven-clans,
    .appearance-lifespan,
    .dwarven-culture,
    .crafting-traditions,
    .mountain-heritage,
    .relations,
    .character-creation,
    .roleplaying-tips,
    .world-context,
    .related-content {
      margin-bottom: 3rem;
    }

    .racial-traits h2,
    .dwarven-clans h2,
    .appearance-lifespan h2,
    .dwarven-culture h2,
    .crafting-traditions h2,
    .mountain-heritage h2,
    .relations h2,
    .character-creation h2,
    .roleplaying-tips h2,
    .world-context h2,
    .related-content h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #fd7e14;
    }

    .trait-section {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #fd7e14;
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
      background: #fff3cd;
      border-radius: 6px;
      color: #856404;
      font-weight: 500;
    }

    .clans-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .clan-card {
      padding: 1.5rem;
      border-radius: 8px;
      border: 2px solid transparent;
    }

    .clan-card.forge-clans {
      background: #f8d7da;
      border-color: #dc3545;
    }

    .clan-card.stone-clans {
      background: #d1ecf1;
      border-color: #17a2b8;
    }

    .clan-card.crystal-clans {
      background: #d4edda;
      border-color: #28a745;
    }

    .clan-card.merchant-clans {
      background: #fff3cd;
      border-color: #ffc107;
    }

    .clan-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .clan-traits ul {
      margin-bottom: 1rem;
      color: #495057;
    }

    .clan-traits li {
      margin-bottom: 0.5rem;
    }

    .clan-description p {
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
      border-left: 4px solid #fd7e14;
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

    .crafting-traditions-list {
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
      border-left: 4px solid #fd7e14;
    }

    .tradition-icon {
      font-size: 1.5rem;
      color: #fd7e14;
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

    .heritage-aspects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .heritage-item {
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #fd7e14;
    }

    .heritage-item h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .heritage-item p {
      color: #6c757d;
      margin: 0;
      line-height: 1.5;
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
      color: #fd7e14;
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
      background: #fd7e14;
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
      border-left: 4px solid #fd7e14;
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
      border-left: 4px solid #fd7e14;
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
      background: #fd7e14;
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

      .clans-grid,
      .appearance-grid,
      .culture-aspects,
      .heritage-aspects,
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
export class DwarfRacePageComponent {
}