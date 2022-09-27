import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { WarningComponent } from './pages/warning/warning.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { SalonsComponent } from './pages/salons/salons.component';
import { SalonsDetailComponent } from './pages/salons-detail/salons-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';


/**cuento de usuario */
import { SettingComponent } from './pages/account/setting/setting.component';
import { InboxComponent } from './pages/account/inbox/inbox.component';
import { AssessmentComponent } from './pages/account/assessment/assessment.component';
import { BookingsComponent } from './pages/account/bookings/bookings.component';
import { PersonalInformationComponent } from './pages/account/personal-information/personal-information.component';
import { PaymentMethodComponent } from './pages/account/payment-method/payment-method.component';
import { NotificationsComponent } from './pages/account/notifications/notifications.component';
import { SesionsComponent } from './pages/account/sesions/sesions.component';
import { MySalesComponent } from './pages/account/my-sales/my-sales.component';

import { ToolsComponent } from './pages/account/tools/tools.component';
/**administracion de servicios dentro de la cuenta */
import { LoungesComponent } from './pages/account/lounges/lounges.component';
import { RatesComponent } from './pages/account/rates/rates.component';
import { AllotmentLoungeComponent } from './pages/account/allotment-lounge/allotment-lounge.component';
import { AllotmentServicesComponent } from './pages/account/allotment-services/allotment-services.component';
import { ServicesComponent } from './pages/account/services/services.component';
import { LoungeFoodComponent } from './pages/account/lounge-food/lounge-food.component';


/**dashboard */
import { BeProviderComponent } from './pages/be-provider/be-provider.component';





const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Plans',component:PlansComponent},
  {path:'Politics',component:PoliciesComponent},
  {path:'Terms',component:WarningComponent},
  {path:'aboutUs',component:AboutusComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Recovery',component:RecoveryComponent},
  {path:'HelpCenter',component:HelpCenterComponent},
  {path:'Salons',component:SalonsComponent},
  {path:'SalonsDetail',component:SalonsDetailComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'DashBoard',component:DashboardComponent},
  
  /*cuenta*/
  {path:'beProvider',component:BeProviderComponent},/**configuracion */
  {path:'Settings',component:SettingComponent},/**configuracion */
  {path:'Inbox',component:InboxComponent},/**Bandeja de entrada */
  {path:'Assessments',component:AssessmentComponent},/**Evaluaciones*/
  {path:'Bookings',component:BookingsComponent},/**Reservaciones*/
  {path:'PersonalInfo',component:PersonalInformationComponent},/**Informaciòn Personal*/
  {path:'PaymentMethod',component:PaymentMethodComponent},/**Metodo de Cobro*/
  {path:'Notifications',component:NotificationsComponent},/**Configurar que notificaciones desea recibir*/
  {path:'Sessions',component:SesionsComponent},/**Registro de Sesiones*/
  {path:'mySales',component:MySalesComponent},/**Mis Ventas Generadas*/
  {path:'Tools',component:ToolsComponent},/**Herramientas para Proveedores*/
  {path:'Lounges',component:LoungesComponent},/**Administracion de Salones*/
  {path:'Rates',component:RatesComponent},/**Administracion de Tarifas de Salones*/
  {path:'LoungeAllotment',component:AllotmentLoungeComponent},/**Disponibilidad de Salones*/
  {path:'LoungeFood',component:LoungeFoodComponent},/**Platillos ofrecidos por salones de Salones*/
  
  /**servicios */
  {path:'ServiceAllotment',component:AllotmentServicesComponent},/**Disponibilidad de Serviciios*/
  {path:'Services',component:ServicesComponent},/**Administracion de Serviciios Ofrecidos*/



  {path:'**',component:NofoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
