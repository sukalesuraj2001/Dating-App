import { Routes } from '@angular/router';
import { OnBoardingComponent } from './components/on-boarding/on-boarding.component';
import { SignInComponent } from './components/authentications/sign-in/sign-in.component';
import { SignUPComponent } from './components/authentications/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/authentications/forgot-password/forgot-password.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { MessageHomeComponent } from './components/dashboard/message-home/message-home.component';
import { MessageContainerComponent } from './components/dashboard/message-container/message-container.component';
import { AuthGuard } from './components/authentications/authGuards/auth-guard.guard';
import { LoginRegisterGuard } from './components/authentications/authGuards/login-register-guard.guard';

export const routes: Routes = [
{path:'',component:OnBoardingComponent},
{path:'signIn',component:SignInComponent,canActivate: [LoginRegisterGuard]},
{path:'signUp',component:SignUPComponent,canActivate: [LoginRegisterGuard]},
{path:'forgotPassword',component:ForgotPasswordComponent},
{path:'home',component:HomeComponent,canActivate: [AuthGuard]},
{path:'messageHome',component:MessageHomeComponent},
{path:'messageContainer',component:MessageContainerComponent},
];
