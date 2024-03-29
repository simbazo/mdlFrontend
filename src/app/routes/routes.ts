import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { LockComponent } from './pages/lock/lock.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { AuthGuard } from './../core/services/shared/auth.guard';
export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule',canActivate: [AuthGuard] },
            { path: 'editor',loadChildren:'./editor/editor.module#EditorModule',canActivate:[AuthGuard]},
            { path: 'mdl', loadChildren:'./mdl/mdl.module#MdlModule',canActivate: [AuthGuard] },
            { path: 'clients',loadChildren:'./clients/client.module#ClientModule',canActivate:[AuthGuard]},
            { path: 'abalimi',loadChildren:'./abalimi/abalimi.module#AbalimiModule',canActivate:[AuthGuard]},
            { path: 'formgroup',loadChildren:'./formgroups/formgroup.module#FormgroupModule',canActivate:[AuthGuard]},
            { path: 'formcomponents',loadChildren:'./productquestions/products-questions.module#ProductsQuestionModule',canActivate:[AuthGuard]}
        ]
    },

    // Not lazy-loaded routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },

    // Not found
    { path: '**', redirectTo: 'home' }

];

/**
 * @author [Jacinto Joao <jacintotbrc@gmail.com>]
 * @ProjectManager [Rory Leisegang]
 * @Project MiDigitalLife
 */
