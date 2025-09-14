import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-core-systems-overview',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-container">
      <header class="page-header">
        <div class="page-header-content">
          <div class="page-title-section">
            <h1 class="page-title">Core Systems</h1>
            <div class="page-badges">
              <span class="badge bg-success">Foundation</span>
              <span class="badge bg-primary">Active Development</span>
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
        <section class="content-overview">
          <p class="lead">
            The foundational mechanics that power all gameplay interactions. These systems 
            provide the consistent framework that players learn once and apply to every 
            aspect of the game, from combat to social encounters.
          </p>
        </section>

        <section class="pages-grid">
          <div class="page-card featured">
            <div class="card-header">
              <div class="page-icon">
                <i class="bi bi-collection text-primary"></i>
              </div>
              <div class="page-meta">
                <h3>Card System</h3>
                <div class="page-status">
                  <span class="certainty-badge locked">🔒 Locked</span>
                  <span class="last-updated">Updated 3 days ago</span>
                </div>
              </div>
            </div>
            <div class="card-content">
              <p>The fundamental mechanic driving all player actions through Action Points, Spirit Points, and card-based resolution.</p>
              <div class="page-tags">
                <span class="tag">core-mechanic</span>
                <span class="tag">cards</span>
                <span class="tag">foundation</span>
              </div>
              <a routerLink="/wiki/game-mechanics/core-systems/card-system" class="btn btn-primary btn-sm mt-3">
                <i class="bi bi-arrow-right me-1"></i>Read More
              </a>
            </div>
          </div>

          <div class="page-card">
            <div class="card-header">
              <div class="page-icon">
                <i class="bi bi-lightning text-warning"></i>
              </div>
              <div class="page-meta">
                <h3>Action Cards</h3>
                <div class="page-status">
                  <span class="certainty-badge testing">🧪 Testing</span>
                  <span class="last-updated">Updated 1 day ago</span>
                </div>
              </div>
            </div>
            <div class="card-content">
              <p>Detailed breakdown of action card types, costs, timing, and interaction rules for all gameplay scenarios.</p>
              <div class="page-tags">
                <span class="tag">actions</span>
                <span class="tag">timing</span>
                <span class="tag">mechanics</span>
              </div>
              <a routerLink="/wiki/game-mechanics/core-systems/action-cards" class="btn btn-outline-primary btn-sm mt-3">
                <i class="bi bi-arrow-right me-1"></i>Read More
              </a>
            </div>
          </div>

          <div class="page-card">
            <div class="card-header">
              <div class="page-icon">
                <i class="bi bi-shield-check text-success"></i>
              </div>
              <div class="page-meta">
                <h3>Reaction System</h3>
                <div class="page-status">
                  <span class="certainty-badge ideas">💡 Ideas</span>
                  <span class="last-updated">Updated 2 days ago</span>
                </div>
              </div>
            </div>
            <div class="card-content">
              <p>How players can respond to threats and opportunities outside their turn using reaction cards and timing windows.</p>
              <div class="page-tags">
                <span class="tag">reactions</span>
                <span class="tag">timing</span>
                <span class="tag">defense</span>
              </div>
              <a routerLink="/wiki/game-mechanics/core-systems/reaction-system" class="btn btn-outline-primary btn-sm mt-3">
                <i class="bi bi-arrow-right me-1"></i>Read More
              </a>
            </div>
          </div>

          <div class="page-card">
            <div class="card-header">
              <div class="page-icon">
                <i class="bi bi-graph-up text-info"></i>
              </div>
              <div class="page-meta">
                <h3>Resource Management</h3>
                <div class="page-status">
                  <span class="certainty-badge questions">❓ Questions</span>
                  <span class="last-updated">Updated 5 hours ago</span>
                </div>
              </div>
            </div>
            <div class="card-content">
              <p>Managing Action Points, Spirit Points, and other limited resources across encounters and adventures.</p>
              <div class="page-tags">
                <span class="tag">resources</span>
                <span class="tag">economy</span>
                <span class="tag">strategy</span>
              </div>
              <a routerLink="/wiki/game-mechanics/core-systems/resource-management" class="btn btn-outline-primary btn-sm mt-3">
                <i class="bi bi-arrow-right me-1"></i>Read More
              </a>
            </div>
          </div>
        </section>

        <section class="system-overview">
          <h2>System Architecture</h2>
          <div class="architecture-diagram">
            <div class="architecture-layer foundation">
              <h4>Foundation Layer</h4>
              <div class="layer-items">
                <div class="layer-item">Cards</div>
                <div class="layer-item">AP/SP</div>
                <div class="layer-item">Resolution</div>
              </div>
            </div>
            <div class="architecture-arrow">
              <i class="bi bi-arrow-down"></i>
            </div>
            <div class="architecture-layer interaction">
              <h4>Interaction Layer</h4>
              <div class="layer-items">
                <div class="layer-item">Actions</div>
                <div class="layer-item">Reactions</div>
                <div class="layer-item">Resources</div>
              </div>
            </div>
            <div class="architecture-arrow">
              <i class="bi bi-arrow-down"></i>
            </div>
            <div class="architecture-layer application">
              <h4>Application Layer</h4>
              <div class="layer-items">
                <div class="layer-item">Combat</div>
                <div class="layer-item">Social</div>
                <div class="layer-item">Exploration</div>
              </div>
            </div>
          </div>
        </section>

        <section class="design-principles">
          <h2>Design Principles</h2>
          <div class="principles-grid">
            <div class="principle-card">
              <div class="principle-icon">
                <i class="bi bi-check-circle text-success"></i>
              </div>
              <h4>Consistency</h4>
              <p>The same core mechanics work the same way in every context, reducing cognitive load.</p>
            </div>
            <div class="principle-card">
              <div class="principle-icon">
                <i class="bi bi-layers text-primary"></i>
              </div>
              <h4>Scalability</h4>
              <p>Simple basics that support complex emergent interactions without overwhelming new players.</p>
            </div>
            <div class="principle-card">
              <div class="principle-icon">
                <i class="bi bi-lightning text-warning"></i>
              </div>
              <h4>Speed</h4>
              <p>Quick resolution keeps gameplay flowing while maintaining tactical depth.</p>
            </div>
            <div class="principle-card">
              <div class="principle-icon">
                <i class="bi bi-people text-info"></i>
              </div>
              <h4>Interaction</h4>
              <p>Mechanics encourage player collaboration and create shared story moments.</p>
            </div>
          </div>
        </section>

        <section class="learning-path">
          <h2>Learning Path</h2>
          <div class="learning-steps">
            <div class="learning-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h5>Start with Card System</h5>
                <p>Master the basic card mechanics that underpin everything else.</p>
                <a routerLink="/wiki/game-mechanics/core-systems/card-system" class="btn btn-sm btn-outline-primary">
                  Begin Here
                </a>
              </div>
            </div>
            <div class="learning-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h5>Learn Action Types</h5>
                <p>Understand different card types and when to use them.</p>
                <a routerLink="/wiki/game-mechanics/core-systems/action-cards" class="btn btn-sm btn-outline-primary">
                  Explore Actions
                </a>
              </div>
            </div>
            <div class="learning-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h5>Master Reactions</h5>
                <p>Add defensive and responsive play to your toolkit.</p>
                <a routerLink="/wiki/game-mechanics/core-systems/reaction-system" class="btn btn-sm btn-outline-primary">
                  Study Reactions
                </a>
              </div>
            </div>
            <div class="learning-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h5>Resource Strategy</h5>
                <p>Optimize your use of AP, SP, and other limited resources.</p>
                <a routerLink="/wiki/game-mechanics/core-systems/resource-management" class="btn btn-sm btn-outline-primary">
                  Plan Resources
                </a>
              </div>
            </div>
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

    .content-overview {
      margin-bottom: 3rem;
    }

    .lead {
      font-size: 1.2rem;
      color: #6c757d;
      line-height: 1.6;
    }

    .pages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .page-card {
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }

    .page-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .page-card.featured {
      border-color: #007bff;
      background: linear-gradient(135deg, #ffffff, #f8f9fa);
    }

    .card-header {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .page-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .page-meta {
      flex: 1;
    }

    .page-meta h3 {
      margin: 0 0 0.5rem 0;
      color: #2c3e50;
    }

    .page-status {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .certainty-badge {
      font-size: 0.8rem;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      background: #f8f9fa;
    }

    .last-updated {
      font-size: 0.8rem;
      color: #6c757d;
    }

    .card-content p {
      color: #495057;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .page-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }

    .tag {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      background: #e9ecef;
      border-radius: 12px;
      color: #495057;
    }

    .system-overview,
    .design-principles,
    .learning-path {
      margin-bottom: 3rem;
    }

    .system-overview h2,
    .design-principles h2,
    .learning-path h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #007bff;
    }

    .architecture-diagram {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 2rem;
      background: #f8f9fa;
      border-radius: 8px;
    }

    .architecture-layer {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      text-align: center;
      border: 2px solid #e1e5e9;
      width: 100%;
      max-width: 400px;
    }

    .architecture-layer.foundation {
      border-color: #28a745;
    }

    .architecture-layer.interaction {
      border-color: #ffc107;
    }

    .architecture-layer.application {
      border-color: #dc3545;
    }

    .architecture-layer h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .layer-items {
      display: flex;
      justify-content: space-around;
      gap: 1rem;
    }

    .layer-item {
      padding: 0.5rem 1rem;
      background: #f8f9fa;
      border-radius: 6px;
      font-size: 0.875rem;
      color: #495057;
    }

    .architecture-arrow {
      font-size: 2rem;
      color: #6c757d;
    }

    .principles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .principle-card {
      text-align: center;
      padding: 1.5rem;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
    }

    .principle-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .principle-card h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .principle-card p {
      color: #6c757d;
      margin: 0;
      line-height: 1.5;
    }

    .learning-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .learning-step {
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
      background: #007bff;
      color: white;
      border-radius: 50%;
      font-weight: bold;
      flex-shrink: 0;
    }

    .step-content {
      flex: 1;
    }

    .step-content h5 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .step-content p {
      color: #6c757d;
      margin-bottom: 1rem;
      line-height: 1.4;
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

      .pages-grid {
        grid-template-columns: 1fr;
      }

      .layer-items {
        flex-direction: column;
        gap: 0.5rem;
      }

      .principles-grid,
      .learning-steps {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CoreSystemsOverviewComponent {
}