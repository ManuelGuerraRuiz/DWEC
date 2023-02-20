import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaPageComponent } from './pages/ayuda-page/ayuda-page.component';
import { EnsamblePageComponent } from './pages/ensamble-page/ensamble-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'inicio', component: HomePageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'ensamble', component:EnsamblePageComponent},
  {path: 'nosotros', component:NosotrosPageComponent},
  {path: 'ayuda', component:AyudaPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
