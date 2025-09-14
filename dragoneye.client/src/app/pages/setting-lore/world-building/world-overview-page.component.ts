import { Component } from '@angular/core';

@Component({
  selector: 'app-world-overview-page',
  standalone: true,
  template: `
    <div class="page-content">
      <div class="page-header mb-4">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <h1 class="page-title">World Overview</h1>
            <div class="page-meta">
              <span class="badge bg-primary me-2">
                <i class="bi bi-lightbulb me-1"></i>Ideas
              </span>
              <span class="text-muted">
                <i class="bi bi-calendar3 me-1"></i>Updated September 13, 2025
              </span>
            </div>
          </div>
          <div class="page-actions">
            <button class="btn btn-outline-secondary btn-sm me-2">
              <i class="bi bi-pencil me-1"></i>Edit
            </button>
            <button class="btn btn-outline-secondary btn-sm me-2">
              <i class="bi bi-clock-history me-1"></i>History
            </button>
            <button class="btn btn-outline-secondary btn-sm">
              <i class="bi bi-share me-1"></i>Share
            </button>
          </div>
        </div>
      </div>

      <div class="content-body">
        <h1>World Overview</h1>

        <p>The world of <strong>Aethermoor</strong> is a realm where ancient magic and emerging technology create a unique fantasy setting.</p>

        <h2>Geography</h2>

        <h3><strong>The Central Continent</strong></h3>
        <p>The main landmass where most adventures take place.</p>

        <h4>Major Regions:</h4>
        <ul>
          <li><strong>The Ironlands</strong>: Industrial city-states powered by magical engines</li>
          <li><strong>Whisperwood</strong>: Ancient forests inhabited by elves and spirits</li>
          <li><strong>The Sunward Reach</strong>: Desert kingdoms built around oasis cities</li>
          <li><strong>Northmark</strong>: Harsh mountains home to dwarven clans</li>
        </ul>

        <h3><strong>The Shattered Isles</strong></h3>
        <p>A chain of mystical islands accessible only by airship, each with unique magical properties.</p>

        <h2>History</h2>

        <h3><strong>The Age of Harmony</strong> (Ancient Times)</h3>
        <p>A golden age when all races worked together to build great wonders.</p>

        <h3><strong>The Sundering</strong> (500 years ago)</h3>
        <p>A catastrophic magical event that shattered the old world and created the current political landscape.</p>

        <h3><strong>The Age of Recovery</strong> (Present Day)</h3>
        <p>Nations slowly rebuilding while navigating new magical phenomena and political tensions.</p>

        <h2>Magic and Technology</h2>

        <h3><strong>Aether Crystals</strong></h3>
        <p>Magical crystals that power both spells and mechanical devices, creating a unique magitech aesthetic.</p>

        <h3><strong>The Card Codex</strong></h3>
        <p>The mysterious source of all Card System magic, with cards appearing to those destined to wield them.</p>

        <h2>Current Events</h2>

        <ul>
          <li>Rising tensions between the Ironlands and traditional kingdoms</li>
          <li>Strange magical storms appearing without warning</li>
          <li>Ancient ruins revealing new secrets about the Sundering</li>
        </ul>

        <p>See Locations for detailed area descriptions and NPCs for key figures shaping the world.</p>

        <div class="page-tags mt-4">
          <span class="badge bg-light text-dark me-2">world</span>
          <span class="badge bg-light text-dark me-2">setting</span>
          <span class="badge bg-light text-dark me-2">lore</span>
          <span class="badge bg-light text-dark me-2">history</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    .page-title {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .page-meta {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .content-body {
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .content-body h1 {
      color: #2c3e50;
      border-bottom: 2px solid #3498db;
      padding-bottom: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .content-body h2 {
      color: #34495e;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    .content-body h3 {
      color: #7f8c8d;
      margin-top: 1.5rem;
      margin-bottom: 0.8rem;
    }

    .content-body h4 {
      color: #95a5a6;
      margin-top: 1rem;
      margin-bottom: 0.6rem;
    }

    .wiki-link {
      color: #3498db;
      text-decoration: none;
    }

    .wiki-link:hover {
      text-decoration: underline;
    }

    .page-tags {
      border-top: 1px solid #ecf0f1;
      padding-top: 1rem;
    }
  `]
})
export class WorldOverviewPageComponent { }