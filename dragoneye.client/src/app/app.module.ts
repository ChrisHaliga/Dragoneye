import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageViewComponent } from './components/page-view/page-view.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { CharacterCreationComponent } from './pages/how-to-play/character-creation/character-creation.component';
import { ConflictResolutionComponent } from './pages/how-to-play/conflict-resolution/conflict-resolution.component';
import { RoleplayingComponent } from './pages/how-to-play/roleplaying/roleplaying.component';
import { RaceComponent } from './pages/how-to-play/character-creation/race/race.component';
import { BackgroundComponent } from './pages/how-to-play/character-creation/background/background.component';
import { StatsComponent } from './pages/how-to-play/character-creation/stats/stats.component';
import { PersonalityComponent } from './pages/how-to-play/character-creation/personality/personality.component';
import { GettingStartedComponent } from './pages/how-to-play/getting-started/getting-started.component';
import { PlayerGuideComponent } from './pages/how-to-play/getting-started/player-guide/player-guide.component';
import { GmGuideComponent } from './pages/how-to-play/getting-started/gm-guide/gm-guide.component';
import { ResolutionCardsComponent } from './pages/how-to-play/core-mechanics/resolution-cards/resolution-cards.component';
import { SkillChallengesComponent } from './pages/how-to-play/core-mechanics/skill-challenges/skill-challenges.component';
import { CombatComponent } from './pages/how-to-play/combat/combat.component';
import { DomainsComponent } from './pages/how-to-play/character-creation/domains/domains.component';
import { CollaborativeStorytellingComponent } from './pages/how-to-play/roleplaying/collaborative-storytelling/collaborative-storytelling.component';
import { PlottingAndMotivationsComponent } from './pages/how-to-play/roleplaying/plotting-and-motivations/plotting-and-motivations.component';
import { InCharacterComponent } from './pages/how-to-play/roleplaying/in-character/in-character.component';
import { OutOfCharacterComponent } from './pages/how-to-play/roleplaying/out-of-character/out-of-character.component';
import { CharacterEvolutionComponent } from './pages/how-to-play/roleplaying/character-evolution/character-evolution.component';
import { CoreMechanicsComponent } from './pages/how-to-play/core-mechanics/core-mechanics.component';
import { StatsAndProgressionComponent } from './pages/how-to-play/core-mechanics/stats-and-progression/stats-and-progression.component';
import { StatusEffectsComponent } from './pages/how-to-play/combat/status-effects/status-effects.component';
import { TurnsAndInitiativeComponent } from './pages/how-to-play/combat/turns-and-initiative/turns-and-initiative.component';
import { ActionsAndPassivesComponent } from './pages/how-to-play/combat/actions-and-passives/actions-and-passives.component';
import { TheBattlefieldComponent } from './pages/how-to-play/combat/the-battlefield/the-battlefield.component';
import { SettingLoreOverviewComponent } from './pages/setting-lore/setting-lore-overview.component';
import { WorldBuildingOverviewComponent } from './pages/setting-lore/world-building/world-building-overview.component';
import { WorldOverviewPageComponent } from './pages/setting-lore/world-building/world-overview-page.component';
import { AgeOfChaosComponent } from './pages/age-of-chaos/age-of-chaos.component';
import { AgeOfOrderComponent } from './pages/age-of-order/age-of-order.component';
import { AgeOfAscensionComponent } from './pages/age-of-ascension/age-of-ascension.component';
import { PoliticsComponent } from './pages/culture/politics/politics.component';
import { GeographyComponent } from './pages/culture/geography/geography.component';
import { EconomicsComponent } from './pages/culture/economics/economics.component';
import { HistoryComponent } from './pages/culture/history/history.component';
import { CultureComponent } from './pages/culture/culture/culture.component';
import { ReligionComponent } from './pages/culture/religion/religion.component';
import { LawComponent } from './pages/culture/law/law.component';
import { ScienceComponent } from './pages/culture/science/science.component';
import { CultureOverviewComponent } from './pages/culture/culture-overview/culture-overview.component';
import { CultureDetailComponent } from './pages/culture/pages/culture/culture-detail/culture-detail.component';
import { FloatingNotesComponent } from './components/floating-notes/floating-notes.component';
import { CultureEditorModalComponent } from './components/culture-editor-modal/culture-editor-modal.component';
import { FloatingCultureEditComponent } from './components/floating-culture-edit/floating-culture-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PageViewComponent,
    BreadcrumbComponent,
    PageHeaderComponent,
    HomepageComponent,
    NavbarComponent,
    HowToPlayComponent,
    CharacterCreationComponent,
    ConflictResolutionComponent,
    RoleplayingComponent,
    RaceComponent,
    BackgroundComponent,
    StatsComponent,
    PersonalityComponent,
    GettingStartedComponent,
    PlayerGuideComponent,
    GmGuideComponent,
    ResolutionCardsComponent,
    SkillChallengesComponent,
    CombatComponent,
    DomainsComponent,
    CollaborativeStorytellingComponent,
    PlottingAndMotivationsComponent,
    InCharacterComponent,
    OutOfCharacterComponent,
    CharacterEvolutionComponent,
    CoreMechanicsComponent,
    StatsAndProgressionComponent,
    StatusEffectsComponent,
    TurnsAndInitiativeComponent,
    ActionsAndPassivesComponent,
    TheBattlefieldComponent,
    AgeOfChaosComponent,
    AgeOfOrderComponent,
    AgeOfAscensionComponent,
    PoliticsComponent,
    GeographyComponent,
    EconomicsComponent,
    HistoryComponent,
    CultureComponent,
    ReligionComponent,
    LawComponent,
    ScienceComponent,
    CultureOverviewComponent,
    CultureDetailComponent,
    FloatingNotesComponent,
    CultureEditorModalComponent,
    FloatingCultureEditComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    AppRoutingModule,
    SettingLoreOverviewComponent,
    WorldBuildingOverviewComponent,
    WorldOverviewPageComponent,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: environment.auth.redirectUri,
        audience: environment.auth.audience,
        scope: 'openid profile email'
      },
      httpInterceptor: {
        allowedList: [
          '/api/*',
          'https://localhost:62251/api/*',
          'https://localhost:7027/*'
        ]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
