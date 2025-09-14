import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-world-building-overview',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-container">
      <header class="page-header">
        <div class="page-header-content">
          <div class="page-title-section">
            <h1 class="page-title">World Building</h1>
            <p class="page-description">
              The rich history, geography, and cultures of Aethermoor - a world transformed by magical cataclysm.
            </p>
          </div>
        </div>
      </header>

      <main class="page-content">
        <section class="overview-section">
          <div class="overview-card">
            <div class="overview-content">
              <h2>The World of Aethermoor</h2>
              <p>
                Aethermoor is a world recovering from the Great Sundering, a magical catastrophe that shattered continents, 
                changed the laws of magic, and left behind mysterious aether crystals that now power civilization.
              </p>
              <div class="key-features">
                <div class="feature-item">
                  <i class="bi bi-globe text-primary"></i>
                  <span>Post-Apocalyptic Fantasy</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-gem text-success"></i>
                  <span>Crystal-Powered Magic</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-building text-warning"></i>
                  <span>Rebuilding Civilization</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-map text-danger"></i>
                  <span>Transformed Landscapes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="timeline-section">
          <h2>Historical Timeline</h2>
          <div class="timeline">
            <div class="timeline-event">
              <div class="timeline-marker pre-sundering"></div>
              <div class="timeline-content">
                <h3>Age of Harmony (Before Year 0)</h3>
                <p>The golden age when magic flowed freely and the three races lived in relative peace. Great cities spanned continents, and magical academies reached heights of power never since equaled.</p>
              </div>
            </div>
            
            <div class="timeline-event">
              <div class="timeline-marker sundering"></div>
              <div class="timeline-content">
                <h3>The Great Sundering (Year 0)</h3>
                <p>A catastrophic magical experiment tears reality itself, shattering continents, killing millions, and fundamentally altering how magic works. The old world ends in a single day.</p>
              </div>
            </div>
            
            <div class="timeline-event">
              <div class="timeline-marker survival"></div>
              <div class="timeline-content">
                <h3>The Survival Years (1-50 AS)</h3>
                <p>Survivors struggle to understand the changed world. Magic behaves differently, strange crystals appear everywhere, and the geography itself has been rewritten. Small communities focus on mere survival.</p>
              </div>
            </div>
            
            <div class="timeline-event">
              <div class="timeline-marker discovery"></div>
              <div class="timeline-content">
                <h3>Age of Crystal Discovery (51-150 AS)</h3>
                <p>Survivors learn to harness aether crystals, discovering they can power both technology and magic. The first crystal-powered settlements are established. Trade routes slowly develop.</p>
              </div>
            </div>
            
            <div class="timeline-event">
              <div class="timeline-marker rebuilding"></div>
              <div class="timeline-content">
                <h3>The Great Rebuilding (151-300 AS)</h3>
                <p>Larger settlements grow into cities. The three races begin working together again. Crystal technology advances rapidly. Maps of the new world are finally completed.</p>
              </div>
            </div>
            
            <div class="timeline-event">
              <div class="timeline-marker present"></div>
              <div class="timeline-content">
                <h3>Present Day (300+ AS)</h3>
                <p>Modern Aethermoor has established nations, trade networks, and crystal-powered cities. Yet vast wildernesses remain unexplored, and ancient mysteries from before the Sundering still surface.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="geography-section">
          <h2>Geography & Regions</h2>
          <div class="geography-grid">
            <div class="region-card major">
              <div class="region-icon">
                <i class="bi bi-building"></i>
              </div>
              <div class="region-content">
                <h3>The Central Expanse</h3>
                <p>The heart of modern civilization, where the great crystal cities have been built. Home to the largest human settlements and the primary trade networks that connect the world.</p>
                <div class="region-features">
                  <span class="feature-tag">Major Cities</span>
                  <span class="feature-tag">Trade Hub</span>
                  <span class="feature-tag">Crystal Farms</span>
                </div>
              </div>
            </div>
            
            <div class="region-card major">
              <div class="region-icon">
                <i class="bi bi-tree"></i>
              </div>
              <div class="region-content">
                <h3>The Verdant Reaches</h3>
                <p>Elven territories where nature has reclaimed much of the post-Sundering landscape. Ancient forests grow around crystal formations, creating unique magical ecosystems.</p>
                <div class="region-features">
                  <span class="feature-tag">Elven Cities</span>
                  <span class="feature-tag">Living Magic</span>
                  <span class="feature-tag">Ancient Ruins</span>
                </div>
              </div>
            </div>
            
            <div class="region-card major">
              <div class="region-icon">
                <i class="bi bi-triangle"></i>
              </div>
              <div class="region-content">
                <h3>The Ironhold Peaks</h3>
                <p>Dwarven mountain kingdoms built into and around massive crystal formations. The finest weapons and tools in the world are forged in these crystal-powered workshops.</p>
                <div class="region-features">
                  <span class="feature-tag">Dwarven Holds</span>
                  <span class="feature-tag">Master Forges</span>
                  <span class="feature-tag">Crystal Mines</span>
                </div>
              </div>
            </div>
            
            <div class="region-card minor">
              <div class="region-icon">
                <i class="bi bi-lightning"></i>
              </div>
              <div class="region-content">
                <h3>The Shattered Wastes</h3>
                <p>Scarred lands where the Sundering's effects were most severe. Dangerous but rich in rare crystals and ancient artifacts. Few dare to explore these volatile regions.</p>
                <div class="region-features">
                  <span class="feature-tag">Dangerous</span>
                  <span class="feature-tag">Rare Crystals</span>
                  <span class="feature-tag">Artifacts</span>
                </div>
              </div>
            </div>
            
            <div class="region-card minor">
              <div class="region-icon">
                <i class="bi bi-water"></i>
              </div>
              <div class="region-content">
                <h3>The Floating Isles</h3>
                <p>Mysterious landmasses that hover above the sea, held aloft by massive crystal formations. Home to strange phenomena and unique magical creatures.</p>
                <div class="region-features">
                  <span class="feature-tag">Floating Cities</span>
                  <span class="feature-tag">Sky Trade</span>
                  <span class="feature-tag">Unique Fauna</span>
                </div>
              </div>
            </div>
            
            <div class="region-card minor">
              <div class="region-icon">
                <i class="bi bi-question-circle"></i>
              </div>
              <div class="region-content">
                <h3>The Unknown Territories</h3>
                <p>Vast unexplored regions where maps end and legends begin. Every expedition returns with stories of impossible sights and powerful magic.</p>
                <div class="region-features">
                  <span class="feature-tag">Unexplored</span>
                  <span class="feature-tag">Mysterious</span>
                  <span class="feature-tag">Adventure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="crystal-technology">
          <h2>Crystal Technology & Magic</h2>
          <div class="crystal-grid">
            <div class="crystal-type">
              <div class="crystal-visual power">
                <i class="bi bi-lightning-charge"></i>
              </div>
              <h4>Power Crystals</h4>
              <p>Store and release energy for cities, workshops, and magical devices. The backbone of modern civilization.</p>
            </div>
            
            <div class="crystal-type">
              <div class="crystal-visual communication">
                <i class="bi bi-broadcast"></i>
              </div>
              <h4>Communication Crystals</h4>
              <p>Enable instant long-distance communication between cities and important locations across the world.</p>
            </div>
            
            <div class="crystal-type">
              <div class="crystal-visual transportation">
                <i class="bi bi-arrow-up-circle"></i>
              </div>
              <h4>Transportation Crystals</h4>
              <p>Power flying ships and floating platforms, revolutionizing travel and trade throughout Aethermoor.</p>
            </div>
            
            <div class="crystal-type">
              <div class="crystal-visual enhancement">
                <i class="bi bi-star"></i>
              </div>
              <h4>Enhancement Crystals</h4>
              <p>Amplify natural abilities and magical talent, allowing for feats impossible in the pre-Sundering world.</p>
            </div>
          </div>
        </section>

        <section class="political-landscape">
          <h2>Political Landscape</h2>
          <div class="politics-cards">
            <div class="politics-card">
              <div class="politics-icon">
                <i class="bi bi-people"></i>
              </div>
              <h3>The Crystal Confederation</h3>
              <p>A loose alliance of human city-states built around major crystal deposits. Focused on trade, innovation, and expansion. Values practical cooperation over rigid hierarchy.</p>
              <div class="politics-traits">
                <span class="trait democratic">Democratic</span>
                <span class="trait trade">Trade-Focused</span>
                <span class="trait adaptive">Adaptive</span>
              </div>
            </div>
            
            <div class="politics-card">
              <div class="politics-icon">
                <i class="bi bi-tree-fill"></i>
              </div>
              <h3>The Elven Circles</h3>
              <p>Ancient councils that govern elven territories through consensus and wisdom. Dedicated to preserving knowledge, protecting nature, and maintaining magical balance.</p>
              <div class="politics-traits">
                <span class="trait wisdom">Wisdom-Based</span>
                <span class="trait conservative">Conservative</span>
                <span class="trait magical">Magical</span>
              </div>
            </div>
            
            <div class="politics-card">
              <div class="politics-icon">
                <i class="bi bi-shield"></i>
              </div>
              <h3>The Dwarven Clanholds</h3>
              <p>Traditional clan-based kingdoms united under the High King. Master craftsmen and crystal technicians who value honor, quality, and ancestral traditions.</p>
              <div class="politics-traits">
                <span class="trait traditional">Traditional</span>
                <span class="trait craftsmanship">Craft-Focused</span>
                <span class="trait honor">Honor-Bound</span>
              </div>
            </div>
          </div>
        </section>

        <section class="mysteries-dangers">
          <h2>Mysteries & Dangers</h2>
          <div class="mysteries-grid">
            <div class="mystery-card">
              <h4><i class="bi bi-exclamation-triangle text-warning me-2"></i>Crystal Storms</h4>
              <p>Violent magical weather phenomena that can alter landscapes and transform living beings. Unpredictable and extremely dangerous.</p>
            </div>
            
            <div class="mystery-card">
              <h4><i class="bi bi-eye text-primary me-2"></i>Sundering Echoes</h4>
              <p>Ghostly visions and time distortions in areas heavily affected by the Great Sundering. Some claim they show glimpses of the old world.</p>
            </div>
            
            <div class="mystery-card">
              <h4><i class="bi bi-gear text-success me-2"></i>Ancient Artifacts</h4>
              <p>Pre-Sundering magical items that no longer work as intended - or work in terrifyingly new ways. Highly sought after and extremely dangerous.</p>
            </div>
            
            <div class="mystery-card">
              <h4><i class="bi bi-pentagon text-danger me-2"></i>The Crystal Minds</h4>
              <p>Legends speak of crystals that gained sentience during the Sundering. Whether they're helpful, hostile, or something else entirely remains unknown.</p>
            </div>
            
            <div class="mystery-card">
              <h4><i class="bi bi-building text-info me-2"></i>Lost Cities</h4>
              <p>Entire settlements that vanished during the Sundering, occasionally reappearing in impossible locations with their populations mysteriously unchanged.</p>
            </div>
            
            <div class="mystery-card">
              <h4><i class="bi bi-moon text-secondary me-2"></i>The Void Touched</h4>
              <p>Individuals changed by exposure to Sundering energies. Some gain incredible powers, others lose their humanity. All are forever changed.</p>
            </div>
          </div>
        </section>

        <section class="campaign-integration">
          <h2>Campaign Integration</h2>
          <div class="integration-content">
            <div class="integration-section">
              <h3><i class="bi bi-map text-primary me-2"></i>Adventure Hooks</h3>
              <ul class="hook-list">
                <li>Explore ancient ruins to recover pre-Sundering knowledge</li>
                <li>Investigate crystal storm patterns threatening settlements</li>
                <li>Negotiate trade agreements between different racial nations</li>
                <li>Hunt for legendary artifacts in the Shattered Wastes</li>
                <li>Establish new settlements in unexplored territories</li>
                <li>Uncover the truth behind mysterious crystal phenomena</li>
              </ul>
            </div>
            
            <div class="integration-section">
              <h3><i class="bi bi-people text-success me-2"></i>Character Connections</h3>
              <ul class="connection-list">
                <li>Family lost during the Great Sundering</li>
                <li>Member of a crystal research expedition</li>
                <li>Diplomatic envoy between racial nations</li>
                <li>Survivor of a crystal storm event</li>
                <li>Descendant of pre-Sundering nobility</li>
                <li>Guardian of ancient knowledge or artifacts</li>
              </ul>
            </div>
            
            <div class="integration-section">
              <h3><i class="bi bi-star text-warning me-2"></i>Campaign Themes</h3>
              <div class="theme-items">
                <div class="theme-item">
                  <strong>Recovery & Renewal:</strong> Help rebuild civilization and heal the scars of the past
                </div>
                <div class="theme-item">
                  <strong>Discovery & Wonder:</strong> Explore the transformed world and uncover its mysteries
                </div>
                <div class="theme-item">
                  <strong>Unity & Cooperation:</strong> Bridge differences between races and nations
                </div>
                <div class="theme-item">
                  <strong>Power & Responsibility:</strong> Decide how crystal technology should be used
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="related-content">
          <h2>Related Content</h2>
          <div class="related-links">
            <a routerLink="/wiki/setting-lore/world-building/world-overview" class="related-link">
              <i class="bi bi-globe me-2"></i>Detailed World Overview
            </a>
            <a routerLink="/wiki/content/player-races" class="related-link">
              <i class="bi bi-people me-2"></i>Player Races
            </a>
            <a routerLink="/wiki/game-mechanics/core-systems" class="related-link">
              <i class="bi bi-gear me-2"></i>Core Game Systems
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
      background: linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%);
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

    .timeline-section,
    .geography-section,
    .crystal-technology,
    .political-landscape,
    .mysteries-dangers,
    .campaign-integration,
    .related-content {
      margin-bottom: 3rem;
    }

    .timeline-section h2,
    .geography-section h2,
    .crystal-technology h2,
    .political-landscape h2,
    .mysteries-dangers h2,
    .campaign-integration h2,
    .related-content h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #6f42c1;
    }

    .timeline {
      position: relative;
      padding-left: 2rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0.75rem;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, #6f42c1, #e83e8c);
    }

    .timeline-event {
      position: relative;
      margin-bottom: 2rem;
    }

    .timeline-marker {
      position: absolute;
      left: -1.75rem;
      top: 0.5rem;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 2px solid white;
    }

    .timeline-marker.pre-sundering {
      background: #28a745;
    }

    .timeline-marker.sundering {
      background: #dc3545;
    }

    .timeline-marker.survival {
      background: #fd7e14;
    }

    .timeline-marker.discovery {
      background: #ffc107;
    }

    .timeline-marker.rebuilding {
      background: #20c997;
    }

    .timeline-marker.present {
      background: #6f42c1;
    }

    .timeline-content {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid #e1e5e9;
      border-left: 4px solid #6f42c1;
    }

    .timeline-content h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .timeline-content p {
      color: #6c757d;
      margin: 0;
      line-height: 1.5;
    }

    .geography-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 1.5rem;
    }

    .region-card {
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      padding: 1.5rem;
      transition: transform 0.3s ease;
    }

    .region-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .region-card.major {
      border-left: 4px solid #6f42c1;
    }

    .region-card.minor {
      border-left: 4px solid #e83e8c;
    }

    .region-icon {
      font-size: 2rem;
      color: #6f42c1;
      margin-bottom: 1rem;
    }

    .region-content h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .region-content p {
      color: #6c757d;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .region-features {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .feature-tag {
      background: #f8f9fa;
      color: #495057;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
    }

    .crystal-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }

    .crystal-type {
      text-align: center;
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }

    .crystal-type:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .crystal-visual {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      font-size: 1.5rem;
      color: white;
    }

    .crystal-visual.power {
      background: linear-gradient(135deg, #ffc107, #fd7e14);
    }

    .crystal-visual.communication {
      background: linear-gradient(135deg, #007bff, #6610f2);
    }

    .crystal-visual.transportation {
      background: linear-gradient(135deg, #20c997, #28a745);
    }

    .crystal-visual.enhancement {
      background: linear-gradient(135deg, #e83e8c, #6f42c1);
    }

    .crystal-type h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .crystal-type p {
      color: #6c757d;
      margin: 0;
      line-height: 1.5;
    }

    .politics-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .politics-card {
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      padding: 1.5rem;
      border-left: 4px solid #6f42c1;
    }

    .politics-icon {
      font-size: 2rem;
      color: #6f42c1;
      margin-bottom: 1rem;
    }

    .politics-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .politics-card p {
      color: #6c757d;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .politics-traits {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .trait {
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
      color: white;
    }

    .trait.democratic {
      background: #007bff;
    }

    .trait.trade {
      background: #28a745;
    }

    .trait.adaptive {
      background: #ffc107;
      color: #212529;
    }

    .trait.wisdom {
      background: #6f42c1;
    }

    .trait.conservative {
      background: #6c757d;
    }

    .trait.magical {
      background: #e83e8c;
    }

    .trait.traditional {
      background: #fd7e14;
    }

    .trait.craftsmanship {
      background: #20c997;
    }

    .trait.honor {
      background: #dc3545;
    }

    .mysteries-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .mystery-card {
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      padding: 1.5rem;
      border-left: 4px solid #6f42c1;
    }

    .mystery-card h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .mystery-card p {
      color: #6c757d;
      margin: 0;
      line-height: 1.5;
    }

    .integration-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .integration-section {
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      padding: 1.5rem;
      border-left: 4px solid #6f42c1;
    }

    .integration-section h3 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
    }

    .hook-list,
    .connection-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .hook-list li,
    .connection-list li {
      padding: 0.5rem 0;
      color: #6c757d;
      border-bottom: 1px solid #f8f9fa;
    }

    .hook-list li:before,
    .connection-list li:before {
      content: '→';
      color: #6f42c1;
      margin-right: 0.5rem;
    }

    .theme-items {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .theme-item {
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 6px;
      color: #495057;
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

      .timeline {
        padding-left: 1.5rem;
      }

      .timeline-marker {
        left: -1.5rem;
      }

      .geography-grid {
        grid-template-columns: 1fr;
      }

      .crystal-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }

      .politics-cards {
        grid-template-columns: 1fr;
      }

      .mysteries-grid {
        grid-template-columns: 1fr;
      }

      .integration-content {
        grid-template-columns: 1fr;
      }

      .related-links {
        flex-direction: column;
      }
    }
  `]
})
export class WorldBuildingOverviewComponent {
}