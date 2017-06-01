import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {ClientComponent} from './component/client.component';
import {NewclientComponent} from './component/newclient/new-client.component';
import { SharedModule } from '../../shared/shared.module';

import {SelectModule} from 'angular2-select';

const routes: Routes = [
	{
		path: '',component: ClientComponent,

	},
	{
		
		path: 'addclient',component: NewclientComponent
	}
];

@NgModule({
	imports:[SharedModule,
	RouterModule.forChild(routes),
	SelectModule],
	declarations:[ClientComponent,NewclientComponent],
	exports:[RouterModule]
})

export class ClientModule {

	constructor(){

	}
}