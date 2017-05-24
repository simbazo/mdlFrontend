import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {ClientComponent} from './component/client.component';
import {NewclientComponent} from './component/newclient/new-client.component';

const routes: Routes = [
	{
		path: '',component: ClientComponent,

	},
	{
		
		path: 'addclient',component: NewclientComponent
	}
];

@NgModule({
	imports:[RouterModule.forChild(routes)],
	declarations:[ClientComponent,NewclientComponent],
	exports:[RouterModule]
})

export class ClientModule {

	constructor(){

	}
}