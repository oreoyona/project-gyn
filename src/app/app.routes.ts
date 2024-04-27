import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './pages/add/add.component';
import { DefaultMainComponent } from './pages/default-main/default-main.component';
import { ListComponent } from './pages/list/list.component';
import { DossierClassiqueComponent } from './core/dossier-classique/dossier-classique.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: DefaultMainComponent,
                outlet: 'dashboard',
            },
           
            {
                path: 'add',
                component: AddComponent,
                outlet: 'dashboard',
            
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
    { path: 'classique', component: DossierClassiqueComponent}
   
    


];
