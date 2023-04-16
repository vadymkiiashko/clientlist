import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './_service/authentication/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'customers', component: CustomerListComponent ,canActivate:  [AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }, // redirect any other path to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
