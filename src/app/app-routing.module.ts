import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { EvaComponent} from './eva/eva.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { EmailComponent } from './email/email.component';

export const router: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path:'home', component: HomeComponent},
{ path:'eva', component: EvaComponent},  
{ path: 'signup', component: SignupComponent},
{ path: 'members', component: MembersComponent},
{path: 'email', component:EmailComponent}

]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
