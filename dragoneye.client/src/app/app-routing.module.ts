import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageViewComponent } from './components/page-view/page-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/pages/Card%20System', pathMatch: 'full' },
  { path: 'pages/:id', component: PageViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
