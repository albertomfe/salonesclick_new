import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*formularios*/
import { FormsModule } from '@angular/forms';
import { SafePipeModule } from 'safe-pipe';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { NavComponent } from './pages/nav/nav.component';
import { WarningComponent } from './pages/warning/warning.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { FooterComponent } from './pages/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PlansComponent,
    PoliciesComponent,
    NavComponent,
    WarningComponent,
    AboutusComponent,
    NofoundComponent,
    FooterComponent,
    RegisterComponent,
    RecoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    SafePipeModule,
    HttpClientModule,
    RouterModule,      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
