import { AddCusinesComponent } from './components/admin/add-cusines/add-cusines.component';
import { WelcomeComponentComponent } from './components/admin/welcome-component/welcome-component.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'adminLogin',
    component: AdminLoginComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        component: WelcomeComponentComponent
      },
      {
        path: 'addCuisine',
        component: AddCusinesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
