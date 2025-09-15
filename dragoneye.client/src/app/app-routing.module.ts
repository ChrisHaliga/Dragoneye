import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticHomepageComponent } from './pages/static-homepage.component';
import { EditHomepageComponent } from './components/edit-homepage/edit-homepage.component';

// How to Play Components
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { GettingStartedComponent } from './pages/how-to-play/getting-started/getting-started.component';
import { PlayerGuideComponent } from './pages/how-to-play/getting-started/player-guide/player-guide.component';
import { GmGuideComponent } from './pages/how-to-play/getting-started/gm-guide/gm-guide.component';
import { CharacterCreationComponent } from './pages/how-to-play/character-creation/character-creation.component';
import { RaceComponent } from './pages/how-to-play/character-creation/race/race.component';
import { DomainsComponent } from './pages/how-to-play/character-creation/domains/domains.component';
import { StatsComponent } from './pages/how-to-play/character-creation/stats/stats.component';
import { BackgroundComponent } from './pages/how-to-play/character-creation/background/background.component';
import { PersonalityComponent } from './pages/how-to-play/character-creation/personality/personality.component';
import { ConflictResolutionComponent } from './pages/how-to-play/conflict-resolution/conflict-resolution.component';
import { CoreMechanicsComponent } from './pages/how-to-play/core-mechanics/core-mechanics.component';
import { ResolutionCardsComponent } from './pages/how-to-play/core-mechanics/resolution-cards/resolution-cards.component';
import { StatsAndProgressionComponent } from './pages/how-to-play/core-mechanics/stats-and-progression/stats-and-progression.component';
import { SkillChallengesComponent } from './pages/how-to-play/core-mechanics/skill-challenges/skill-challenges.component';
import { CombatComponent } from './pages/how-to-play/combat/combat.component';
import { TheBattlefieldComponent } from './pages/how-to-play/combat/the-battlefield/the-battlefield.component';
import { StatusEffectsComponent } from './pages/how-to-play/combat/status-effects/status-effects.component';
import { TurnsAndInitiativeComponent } from './pages/how-to-play/combat/turns-and-initiative/turns-and-initiative.component';
import { ActionsAndPassivesComponent } from './pages/how-to-play/combat/actions-and-passives/actions-and-passives.component';
import { RoleplayingComponent } from './pages/how-to-play/roleplaying/roleplaying.component';
import { CollaborativeStorytellingComponent } from './pages/how-to-play/roleplaying/collaborative-storytelling/collaborative-storytelling.component';
import { PlottingAndMotivationsComponent } from './pages/how-to-play/roleplaying/plotting-and-motivations/plotting-and-motivations.component';
import { InCharacterComponent } from './pages/how-to-play/roleplaying/in-character/in-character.component';
import { OutOfCharacterComponent } from './pages/how-to-play/roleplaying/out-of-character/out-of-character.component';
import { CharacterEvolutionComponent } from './pages/how-to-play/roleplaying/character-evolution/character-evolution.component';

// Setting & Lore Components
import { SettingLoreOverviewComponent } from './pages/setting-lore/setting-lore-overview.component';
import { WorldBuildingOverviewComponent } from './pages/setting-lore/world-building/world-building-overview.component';
import { WorldOverviewPageComponent } from './pages/setting-lore/world-building/world-overview-page.component';

// Age Components
import { AgeOfChaosComponent } from './pages/age-of-chaos/age-of-chaos.component';
import { AgeOfOrderComponent } from './pages/age-of-order/age-of-order.component';
import { AgeOfAscensionComponent } from './pages/age-of-ascension/age-of-ascension.component';

// Culture Components
import { PoliticsComponent } from './pages/culture/politics/politics.component';
import { GeographyComponent } from './pages/culture/geography/geography.component';
import { EconomicsComponent } from './pages/culture/economics/economics.component';
import { HistoryComponent } from './pages/culture/history/history.component';
import { CultureComponent } from './pages/culture/culture/culture.component';
import { ReligionComponent } from './pages/culture/religion/religion.component';
import { LawComponent } from './pages/culture/law/law.component';
import { ScienceComponent } from './pages/culture/science/science.component';
import { CultureOverviewComponent } from './pages/culture/culture-overview/culture-overview.component';

const routes: Routes = [
  { path: '', component: StaticHomepageComponent, pathMatch: 'full' },
  { path: 'home', component: StaticHomepageComponent },
  { path: 'edit/home', component: EditHomepageComponent },
  
  // How to Play Section
  { path: 'wiki/how-to-play', component: HowToPlayComponent },
  { path: 'wiki/how-to-play/getting-started', component: GettingStartedComponent },
  { path: 'wiki/how-to-play/getting-started/player-guide', component: PlayerGuideComponent },
  { path: 'wiki/how-to-play/getting-started/gm-guide', component: GmGuideComponent },
  { path: 'wiki/how-to-play/character-creation', component: CharacterCreationComponent },
  { path: 'wiki/how-to-play/character-creation/race', component: RaceComponent },
  { path: 'wiki/how-to-play/character-creation/domains', component: DomainsComponent },
  { path: 'wiki/how-to-play/character-creation/stats', component: StatsComponent },
  { path: 'wiki/how-to-play/character-creation/background', component: BackgroundComponent },
  { path: 'wiki/how-to-play/character-creation/personality', component: PersonalityComponent },
  { path: 'wiki/how-to-play/core-mechanics', component: CoreMechanicsComponent },
  { path: 'wiki/how-to-play/core-mechanics/resolution-cards', component: ResolutionCardsComponent },
  { path: 'wiki/how-to-play/core-mechanics/stats-and-progression', component: StatsAndProgressionComponent },
  { path: 'wiki/how-to-play/core-mechanics/skill-challenges', component: SkillChallengesComponent },
  { path: 'wiki/how-to-play/combat', component: CombatComponent },
  { path: 'wiki/how-to-play/combat/the-battlefield', component: TheBattlefieldComponent },
  { path: 'wiki/how-to-play/combat/status-effects', component: StatusEffectsComponent },
  { path: 'wiki/how-to-play/combat/turns-and-initiative', component: TurnsAndInitiativeComponent },
  { path: 'wiki/how-to-play/combat/actions-and-passives', component: ActionsAndPassivesComponent },
  { path: 'wiki/how-to-play/roleplaying', component: RoleplayingComponent },
  { path: 'wiki/how-to-play/roleplaying/collaborative-storytelling', component: CollaborativeStorytellingComponent },
  { path: 'wiki/how-to-play/roleplaying/plotting-and-motivations', component: PlottingAndMotivationsComponent },
  { path: 'wiki/how-to-play/roleplaying/in-character', component: InCharacterComponent },
  { path: 'wiki/how-to-play/roleplaying/out-of-character', component: OutOfCharacterComponent },
  { path: 'wiki/how-to-play/roleplaying/character-evolution', component: CharacterEvolutionComponent },
  
  // Setting & Lore Section
  { path: 'wiki/setting-lore', component: SettingLoreOverviewComponent },
  { path: 'wiki/setting-lore/world-building', component: WorldBuildingOverviewComponent },
  { path: 'wiki/setting-lore/world-building/world-overview', component: WorldOverviewPageComponent },
  
  // Age Sections
  { path: 'wiki/age-of-chaos', component: AgeOfChaosComponent },
  { path: 'wiki/age-of-order', component: AgeOfOrderComponent },
  { path: 'wiki/age-of-ascension', component: AgeOfAscensionComponent },
  
  // Individual Culture Pages
  { path: 'wiki/culture-overview/:id', component: CultureOverviewComponent },
  
  // Culture Category Pages - specific categories for individual cultures
  { path: 'wiki/culture-overview/:id/politics', component: PoliticsComponent },
  { path: 'wiki/culture-overview/:id/geography', component: GeographyComponent },
  { path: 'wiki/culture-overview/:id/economics', component: EconomicsComponent },
  { path: 'wiki/culture-overview/:id/history', component: HistoryComponent },
  { path: 'wiki/culture-overview/:id/culture', component: CultureComponent },
  { path: 'wiki/culture-overview/:id/religion', component: ReligionComponent },
  { path: 'wiki/culture-overview/:id/law', component: LawComponent },
  { path: 'wiki/culture-overview/:id/science', component: ScienceComponent },
  
  // Culture Components (temporary routes for testing)
  { path: 'wiki/culture/politics', component: PoliticsComponent },
  { path: 'wiki/culture/geography', component: GeographyComponent },
  { path: 'wiki/culture/economics', component: EconomicsComponent },
  { path: 'wiki/culture/history', component: HistoryComponent },
  { path: 'wiki/culture/culture', component: CultureComponent },
  { path: 'wiki/culture/religion', component: ReligionComponent },
  { path: 'wiki/culture/law', component: LawComponent },
  { path: 'wiki/culture/science', component: ScienceComponent },
  
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
