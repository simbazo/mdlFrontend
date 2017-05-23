import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableModule } from 'angular2-datatable';
import { SharedModule } from '../../shared/shared.module';

import { UserComponent } from './admin/users/user.component';
import { NewuserComponent} from './admin/users/newuser/new-user.component';

const routes: Routes = [
    { path: '', redirectTo: 'mdl' },
    { path: 'users', component: UserComponent },
    { path: 'registeruser',component:NewuserComponent}
];

@NgModule({
    imports: [
        SharedModule,
        DataTableModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        UserComponent,
        NewuserComponent
    ],
    exports: [
        RouterModule
    ]
})
export class MdlModule { }
