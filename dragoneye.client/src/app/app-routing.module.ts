import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageViewComponent } from './components/page-view/page-view.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'wiki/:section/:subsection/:title', component: PageViewComponent },
  { path: 'wiki/:section/:subsection', component: PageViewComponent },
  { path: 'wiki/:section', component: PageViewComponent },
  // Explicit redirect for anything else
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
