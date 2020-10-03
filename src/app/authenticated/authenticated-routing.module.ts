import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticatedComponent } from './authenticated.component';
import { WorkCategoriesComponent } from './work-categories/work-categories.component';
import { WorkersComponent } from './workers/workers.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'work-categories', component: WorkCategoriesComponent},
      {path: 'workers', component: WorkersComponent},
    ]
  },
  {
    path: '**', component: AuthenticatedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
