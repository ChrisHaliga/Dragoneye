import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageViewComponent } from './components/page-view/page-view.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  // Legacy route for backwards compatibility
  { path: 'pages/:id', component: PageViewComponent },
  // New hierarchical routes - most specific first
  { path: ':section/:subsection/:title', component: PageViewComponent },
  { path: ':section/:subsection', component: PageViewComponent },
  { path: ':section', component: PageViewComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
