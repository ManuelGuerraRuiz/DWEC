import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EnsamblePageComponent } from './pages/ensamble-page/ensamble-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { AyudaPageComponent } from './pages/ayuda-page/ayuda-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    EnsamblePageComponent,
    NosotrosPageComponent,
    AyudaPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
