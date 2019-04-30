import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

import { DashboardLayoutComponent } from './_layout/dashboard-layout/dashboard-layout.component';



const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardLayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'aboutus', component: AboutusComponent},
      {path: 'search', component: SearchHistoryComponent}
    ]
},

  {path:'',component:MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
