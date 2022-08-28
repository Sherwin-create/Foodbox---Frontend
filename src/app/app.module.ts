import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { WelcomeComponentComponent } from './components/admin/welcome-component/welcome-component.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { AddCusinesComponent } from './components/admin/add-cusines/add-cusines.component';
import { ViewCusinesComponent } from './components/admin/view-cusines/view-cusines.component';
import { EditCusinesComponent } from './components/admin/edit-cusines/edit-cusines.component';
import { ViewFoodComponent } from './components/admin/view-food/view-food.component';
import { AddFoodComponent } from './components/admin/add-food/add-food.component';
import { EditFoodComponent } from './components/admin/edit-food/edit-food.component';
import { ViewFoodUserComponent } from './components/user/view-food-user/view-food-user.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { UserSidebarComponent } from './components/user/user-sidebar/user-sidebar.component';
import { ViewCartComponent } from './components/user/view-cart/view-cart.component';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    WelcomeComponentComponent,
    SidebarComponent,
    AddCusinesComponent,
    ViewCusinesComponent,
    EditCusinesComponent,
    ViewFoodComponent,
    AddFoodComponent,
    EditFoodComponent,
    ViewFoodUserComponent,
    UserDashboardComponent,
    UserSidebarComponent,
    ViewCartComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
