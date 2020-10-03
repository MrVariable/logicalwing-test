import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WorkerService } from './services/worker.service';
import { CounterBadgeComponent } from './common/counter-badge/counter-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CounterBadgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  entryComponents: [CounterBadgeComponent],
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
