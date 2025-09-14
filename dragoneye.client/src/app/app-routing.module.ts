import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticHomepageComponent } from './pages/static-homepage.component';
import { EditHomepageComponent } from './components/edit-homepage/edit-homepage.component';

// Game Mechanics Components
import { GameMechanicsOverviewComponent } from './pages/game-mechanics/game-mechanics-overview.component';
import { CoreSystemsOverviewComponent } from './pages/game-mechanics/core-systems/core-systems-overview.component';
import { CardSystemPageComponent } from './pages/game-mechanics/core-systems/card-system-page.component';

// Systems Components
import { SystemsOverviewComponent } from './pages/systems/systems-overview.component';
import { TacticalCombatOverviewComponent } from './pages/systems/tactical-combat/tactical-combat-overview.component';
import { CombatSystemPageComponent } from './pages/systems/tactical-combat/combat-system-page.component';
import { AdventureMechanicsOverviewComponent } from './pages/systems/adventure-mechanics/adventure-mechanics-overview.component';

// Content Components
import { ContentOverviewComponent } from './pages/content/content-overview.component';
import { CharacterDomainsOverviewComponent } from './pages/content/character-domains/character-domains-overview.component';
import { WarriorDomainPageComponent } from './pages/content/character-domains/warrior-domain-page.component';
import { ScholarDomainPageComponent } from './pages/content/character-domains/scholar-domain-page.component';
import { PlayerRacesOverviewComponent } from './pages/content/player-races/player-races-overview.component';
import { HumanRacePageComponent } from './pages/content/player-races/human-race-page.component';
import { ElfRacePageComponent } from './pages/content/player-races/elf-race-page.component';
import { DwarfRacePageComponent } from './pages/content/player-races/dwarf-race-page.component';

// Setting & Lore Components
import { SettingLoreOverviewComponent } from './pages/setting-lore/setting-lore-overview.component';
import { WorldBuildingOverviewComponent } from './pages/setting-lore/world-building/world-building-overview.component';
import { WorldOverviewPageComponent } from './pages/setting-lore/world-building/world-overview-page.component';

const routes: Routes = [
  { path: '', component: StaticHomepageComponent, pathMatch: 'full' },
  { path: 'home', component: StaticHomepageComponent },
  { path: 'edit/home', component: EditHomepageComponent },
  
  // New hierarchical wiki routes
  // Game Mechanics Section
  { path: 'wiki/game-mechanics', component: GameMechanicsOverviewComponent },
  { path: 'wiki/game-mechanics/core-systems', component: CoreSystemsOverviewComponent },
  { path: 'wiki/game-mechanics/core-systems/card-system', component: CardSystemPageComponent },
  
  // Systems Section
  { path: 'wiki/systems', component: SystemsOverviewComponent },
  { path: 'wiki/systems/tactical-combat', component: TacticalCombatOverviewComponent },
  { path: 'wiki/systems/tactical-combat/combat-system', component: CombatSystemPageComponent },
  { path: 'wiki/systems/adventure-mechanics', component: AdventureMechanicsOverviewComponent },
  
  // Content Section
  { path: 'wiki/content', component: ContentOverviewComponent },
  { path: 'wiki/content/character-domains', component: CharacterDomainsOverviewComponent },
  { path: 'wiki/content/character-domains/warrior-domain', component: WarriorDomainPageComponent },
  { path: 'wiki/content/character-domains/scholar-domain', component: ScholarDomainPageComponent },
  { path: 'wiki/content/player-races', component: PlayerRacesOverviewComponent },
  { path: 'wiki/content/player-races/human-race', component: HumanRacePageComponent },
  { path: 'wiki/content/player-races/elf-race', component: ElfRacePageComponent },
  { path: 'wiki/content/player-races/dwarf-race', component: DwarfRacePageComponent },
  
  // Setting & Lore Section
  { path: 'wiki/setting-lore', component: SettingLoreOverviewComponent },
  { path: 'wiki/setting-lore/world-building', component: WorldBuildingOverviewComponent },
  { path: 'wiki/setting-lore/world-building/world-overview', component: WorldOverviewPageComponent },
  
  // Legacy page routes (keep for backwards compatibility)
  { path: 'pages/card-system', redirectTo: '/wiki/game-mechanics/core-systems/card-system' },
  { path: 'pages/combat-system', redirectTo: '/wiki/systems/tactical-combat/combat-system' },
  { path: 'pages/warrior-domain', redirectTo: '/wiki/content/character-domains/warrior-domain' },
  { path: 'pages/world-overview', redirectTo: '/wiki/setting-lore/world-building/world-overview' },
  
  // Catch-all redirect
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
