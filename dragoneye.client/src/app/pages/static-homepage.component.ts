import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-static-homepage',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="homepage-container">
      <header class="hero-section">
        <div class="hero-content">
          <div class="hero-header">
            <div>
              <h1 class="hero-title">Dragoneye Design Wiki</h1>
              <p class="hero-subtitle">Your comprehensive game design documentation hub</p>
            </div>
            <a routerLink="/edit/home" class="edit-link">Edit</a>
          </div>
          <div class="hero-description">
            Welcome to the complete documentation for our tabletop RPG. Everything you need to understand and play the game is here.
          </div>
          <div class="hero-actions">
            <a routerLink="/pages/card-system" class="btn btn-primary btn-lg">
              <i class="bi bi-rocket-takeoff me-2"></i>Get Started
            </a>
            <button class="btn btn-outline-light btn-lg" (click)="scrollToQuickLinks()">
              <i class="bi bi-compass me-2"></i>Explore
            </button>
          </div>
        </div>
      </header>

      <main class="main-content">
        <section class="quick-access" id="quickLinks">
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">Explore the Game</h2>
              <p class="section-subtitle">Jump into any area of the design documentation</p>
            </div>
            <div class="quick-links-grid">
              
              <a routerLink="/pages/card-system" class="quick-link-card">
                <div class="card-header">
                  <div class="card-icon">
                    <i class="bi-collection"></i>
                  </div>
                  <span class="badge bg-primary">Core System</span>
                </div>
                <div class="card-content">
                  <h3>Card System</h3>
                  <p>Core mechanics that drive all gameplay interactions</p>
                </div>
                <div class="card-action">
                  <span class="action-text">Explore <i class="bi bi-arrow-right ms-1"></i></span>
                </div>
              </a>

              <a routerLink="/pages/combat-system" class="quick-link-card">
                <div class="card-header">
                  <div class="card-icon">
                    <i class="bi-shield-fill"></i>
                  </div>
                  <span class="badge bg-danger">Essential</span>
                </div>
                <div class="card-content">
                  <h3>Combat System</h3>
                  <p>Tactical combat using the card-based mechanics</p>
                </div>
                <div class="card-action">
                  <span class="action-text">Explore <i class="bi bi-arrow-right ms-1"></i></span>
                </div>
              </a>

              <a routerLink="/pages/warrior-domain" class="quick-link-card">
                <div class="card-header">
                  <div class="card-icon">
                    <i class="bi-person-circle"></i>
                  </div>
                  <span class="badge bg-success">Characters</span>
                </div>
                <div class="card-content">
                  <h3>Character Domains</h3>
                  <p>Different character archetypes and their unique abilities</p>
                </div>
                <div class="card-action">
                  <span class="action-text">Explore <i class="bi bi-arrow-right ms-1"></i></span>
                </div>
              </a>

              <a routerLink="/pages/world-overview" class="quick-link-card">
                <div class="card-header">
                  <div class="card-icon">
                    <i class="bi-globe"></i>
                  </div>
                  <span class="badge bg-warning">Lore</span>
                </div>
                <div class="card-content">
                  <h3>World & Lore</h3>
                  <p>The setting of Aethermoor and its rich history</p>
                </div>
                <div class="card-action">
                  <span class="action-text">Explore <i class="bi bi-arrow-right ms-1"></i></span>
                </div>
              </a>

            </div>
          </div>
        </section>

        <section class="getting-started">
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">Getting Started</h2>
              <p class="section-subtitle">Follow this path to understand the game from the ground up</p>
            </div>
            <div class="steps-container">
              
              <div class="step-card">
                <div class="step-icon">
                  <i class="bi-1-circle-fill"></i>
                </div>
                <div class="step-content">
                  <h4>Learn the Basics</h4>
                  <p>Start with the core card system that drives all gameplay</p>
                  <a routerLink="/pages/card-system" class="btn btn-outline-primary">
                    Start Learning <i class="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
                <div class="step-connector">
                  <i class="bi bi-arrow-down"></i>
                </div>
              </div>

              <div class="step-card">
                <div class="step-icon">
                  <i class="bi-2-circle-fill"></i>
                </div>
                <div class="step-content">
                  <h4>Explore Systems</h4>
                  <p>Understand combat, social encounters, and exploration</p>
                  <a routerLink="/pages/combat-system" class="btn btn-outline-primary">
                    Start Learning <i class="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
                <div class="step-connector">
                  <i class="bi bi-arrow-down"></i>
                </div>
              </div>

              <div class="step-card">
                <div class="step-icon">
                  <i class="bi-3-circle-fill"></i>
                </div>
                <div class="step-content">
                  <h4>Create Characters</h4>
                  <p>Choose domains, races, and build your character</p>
                  <a routerLink="/pages/warrior-domain" class="btn btn-outline-primary">
                    Start Learning <i class="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  `,
  styles: [`
    .homepage-container {
      min-height: 100vh;
    }

    .hero-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 0;
      text-align: center;
    }

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .hero-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      opacity: 0.9;
      margin-bottom: 0;
    }

    .edit-link {
      color: white;
      text-decoration: none;
      opacity: 0.8;
      transition: opacity 0.3s;
    }

    .edit-link:hover {
      opacity: 1;
      color: white;
    }

    .hero-description {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.95;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .main-content {
      padding: 4rem 0;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-title {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: #7f8c8d;
    }

    .quick-links-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .quick-link-card {
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 12px;
      padding: 2rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .quick-link-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
      text-decoration: none;
      color: inherit;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .card-icon {
      font-size: 2rem;
      color: #3498db;
    }

    .card-content h3 {
      font-size: 1.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .card-content p {
      color: #7f8c8d;
      margin-bottom: 1.5rem;
    }

    .card-action {
      text-align: right;
    }

    .action-text {
      color: #3498db;
      font-weight: 500;
    }

    .getting-started {
      background: #f8f9fa;
      padding: 4rem 0;
    }

    .steps-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .step-card {
      display: flex;
      align-items: flex-start;
      gap: 2rem;
      margin-bottom: 3rem;
      position: relative;
    }

    .step-card:last-child {
      margin-bottom: 0;
    }

    .step-icon {
      font-size: 3rem;
      color: #3498db;
      flex-shrink: 0;
    }

    .step-content {
      flex: 1;
    }

    .step-content h4 {
      font-size: 1.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .step-content p {
      color: #7f8c8d;
      margin-bottom: 1.5rem;
    }

    .step-connector {
      position: absolute;
      left: 1.5rem;
      top: 4rem;
      font-size: 2rem;
      color: #bdc3c7;
    }

    .step-card:last-child .step-connector {
      display: none;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-header {
        flex-direction: column;
        text-align: center;
      }

      .edit-link {
        margin-top: 1rem;
      }

      .quick-links-grid {
        grid-template-columns: 1fr;
      }

      .step-card {
        flex-direction: column;
        text-align: center;
      }

      .step-connector {
        display: none;
      }
    }
  `]
})
export class StaticHomepageComponent {
  scrollToQuickLinks(): void {
    const element = document.getElementById('quickLinks');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}