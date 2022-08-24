import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
