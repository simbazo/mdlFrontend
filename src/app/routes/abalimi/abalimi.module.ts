import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

/*components*/
import {FarmComponent} from './farm/farm.component';
import {FarmerComponent} from './farmer/farmer.component';
import {NewfarmerComponent} from './farmer/new-farmer/new-farmer.component';


import {SharedModule} from '../../shared/shared.module';
import { SelectModule } from 'ng2-select';
const routes: Routes = [
	{
		path:'farmer',component:FarmerComponent,
	},
	{
		path:'farm',component:FarmComponent
	},
	{
		path:'newfarmer',component:NewfarmerComponent
	}
];


@NgModule({
	imports:[SharedModule,
	RouterModule.forChild(routes),
	SelectModule],
	declarations:[
	FarmerComponent,
	FarmComponent,
	NewfarmerComponent
	],
	exports:[RouterModule]
})

export class AbalimiModule {
	
}