import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Landingpage } from './pages/landingpage/landingpage';

export const routes: Routes = [
    {
        path:'',component:Homepage
    },
    {
        path:'login',component:Login
    },
    {
        path:'register',component:Register
    },
    {
        path:"calculate",component:Landingpage
    }
];
