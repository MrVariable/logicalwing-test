import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WorkerService } from './services/worker.service';
import { CounterBadgeComponent } from './common/counter-badge/counter-badge.component';
import { AuthenticatedModule } from './authenticated/authenticated.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticatedModule
  ],
  entryComponents: [],
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
