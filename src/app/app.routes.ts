import { Routes } from '@angular/router';
import { OnBoardingComponent } from './components/on-boarding/on-boarding.component';
import { SignInComponent } from './components/authentications/sign-in/sign-in.component';
import { SignUPComponent } from './components/authentications/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/authentications/forgot-password/forgot-password.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { MessageHomeComponent } from './components/dashboard/message-home/message-home.component';
import { MessageContainerComponent } from './components/dashboard/message-container/message-container.component';

export const routes: Routes = [
{path:'',component:OnBoardingComponent},
{path:'signIn',component:SignInComponent},
{path:'signUp',component:SignUPComponent},
{path:'forgotPassword',component:ForgotPasswordComponent},
{path:'home',component:HomeComponent},
{path:'messageHome',component:MessageHomeComponent},
{path:'messageContainer',component:MessageContainerComponent},
];
