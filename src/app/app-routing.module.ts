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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Plans',component:PlansComponent},
  {path:'Politics',component:PoliciesComponent},
  {path:'Warning',component:WarningComponent},
  {path:'aboutUs',component:AboutusComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Recovery',component:AboutusComponent},
  {path:'**',component:RecoveryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
