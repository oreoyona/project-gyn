import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './pages/add/add.component';
import { DefaultMainComponent } from './pages/default-main/default-main.component';
import { ListComponent } from './pages/list/list.component';

export const routes: Routes = [
    {
        path: 'add', component: AddComponent, outlet: 'dashboard'
    },

    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: 'home',
                component: DefaultMainComponent,
                outlet: 'dashboard',
            },
            {
                path: '',
                component: DefaultMainComponent,
                outlet: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'add',
                component: AddComponent,
                outlet: 'dashboard'
            },
            {
                path: 'list',
                component: ListComponent,
                outlet: 'dashboard'
            }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //todo: delete the add route
    { path: 'add', component: AddComponent }


];
