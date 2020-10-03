import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { AuthenticatedComponent } from './authenticated.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkCategoriesComponent } from './work-categories/work-categories.component';
import { WorkersComponent } from './workers/workers.component';

@NgModule({
  declarations: [
    AuthenticatedComponent,
    DashboardComponent,
    WorkCategoriesComponent,
    WorkersComponent,
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule
  ],
  entryComponents: []
})
export class AuthenticatedModule { }
