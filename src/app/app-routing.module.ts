import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PoliciesComponent } from './pages/policies/policies.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Plans',component:PlansComponent},
  {path:'Politics',component:PoliciesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
