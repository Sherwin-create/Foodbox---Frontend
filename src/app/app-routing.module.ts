import { ViewCartComponent } from './components/user/view-cart/view-cart.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { ViewFoodUserComponent } from './components/user/view-food-user/view-food-user.component';
import { EditFoodComponent } from './components/admin/edit-food/edit-food.component';
import { AddFoodComponent } from './components/admin/add-food/add-food.component';
import { ViewFoodComponent } from './components/admin/view-food/view-food.component';
import { EditCusinesComponent } from './components/admin/edit-cusines/edit-cusines.component';
import { ViewCusinesComponent } from './components/admin/view-cusines/view-cusines.component';
import { AddCusinesComponent } from './components/admin/add-cusines/add-cusines.component';
import { WelcomeComponentComponent } from './components/admin/welcome-component/welcome-component.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { combineLatest } from 'rxjs';

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
      {
        path: 'viewCusines',
        component: ViewCusinesComponent
      },
      {
        path: 'editCusines',
        component: EditCusinesComponent
      },
      {
        path: 'viewFood',
        component: ViewFoodComponent
      },
      {
        path: 'addFood',
        component: AddFoodComponent
      },
      {
        path: 'editFood/:fId',
        component: EditFoodComponent
      }
    ]
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    children: [
      {
        path: '',
        component: ViewFoodUserComponent
      },
      {
        path: 'viewCart',
        component: ViewCartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
