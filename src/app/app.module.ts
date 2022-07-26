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
import { SalonsComponent } from './pages/salons/salons.component';
import { SalonsDetailComponent } from './pages/salons-detail/salons-detail.component';
/*Acount*/
import { ProfileComponent } from './pages/profile/profile.component';
import { InboxComponent } from './pages/account/inbox/inbox.component';
import { AssessmentComponent } from './pages/account/assessment/assessment.component';
import { BookingsComponent } from './pages/account/bookings/bookings.component';
import { PersonalInformationComponent } from './pages/account/personal-information/personal-information.component';
import { PaymentMethodComponent } from './pages/account/payment-method/payment-method.component';
import { NotificationsComponent } from './pages/account/notifications/notifications.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { BeProviderComponent } from './pages/be-provider/be-provider.component';
import { SesionsComponent } from './pages/account/sesions/sesions.component';
import { MySalesComponent } from './pages/account/my-sales/my-sales.component';
import { ToolsComponent } from './pages/account/tools/tools.component';
import { SettingComponent } from './pages/account/setting/setting.component';
/**administracion de servicios dentro de la cuenta */
import { LoungesComponent } from './pages/account/lounges/lounges.component';
import { RatesComponent } from './pages/account/rates/rates.component';
import { AllotmentLoungeComponent } from './pages/account/allotment-lounge/allotment-lounge.component';
import { AllotmentServicesComponent } from './pages/account/allotment-services/allotment-services.component';
import { ServicesComponent } from './pages/account/services/services.component';
import { LoungeFoodComponent } from './pages/account/lounge-food/lounge-food.component';




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
    RecoveryComponent,
    SalonsComponent,
    SalonsDetailComponent,
    ProfileComponent,
    SettingComponent,
    InboxComponent,
    AssessmentComponent,
    BookingsComponent,
    PersonalInformationComponent,
    PaymentMethodComponent,
    NotificationsComponent,
    DashboardComponent,
    HelpCenterComponent,
    BeProviderComponent,
    SesionsComponent,
    MySalesComponent,
    ToolsComponent,
    LoungesComponent,
    RatesComponent,
    AllotmentLoungeComponent,
    AllotmentServicesComponent,
    ServicesComponent,
    LoungeFoodComponent,
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
