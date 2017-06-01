import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {NGOComponent} from './ngos/ngo.component';
import {FarmComponent} from './farm/farm.component';
import {FarmerComponent} from './farmer/farmer.component';
import {NewfarmerComponent} from './farmer/new-farmer/new-farmer.component';
import {FormcComponent} from './formcomponent/form.component';
import {NewfarmComponent} from './farm/new-farm/new-farm.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {ContactComponent} from './contact/contact.component';
import {AddressComponent} from './address/address.component';
import {NewsponsorComponent} from './sponsors/new-sponsor/new-sponsor.component';
import {NewaddressComponent} from './address/new-address/new-address.component';
import {NewcontactComponent} from './contact/new-contact/new-contact.component';
import {NewngoComponent} from './ngos/new-ngo/new-ngo.component';
import {SharedModule} from '../../shared/shared.module';
import { SelectModule } from 'ng2-select';

//import {SelectModule} from 'angular2-select';
const routes:Routes = [
	{
		path: '',component:FormcComponent
	},
	{
		path:'farmer',component:FarmerComponent,
	},
	{
		path:'farm',component:FarmComponent
	},
	{
		path:'newfarmer',component:NewfarmerComponent
	},
	{
		path:'newfarm',component:NewfarmComponent
	},
	{
		path:'ngos',component:NGOComponent
	},
	{
		path:'sponsors',component:SponsorsComponent
	},
	{
		path:'newsponsor',component:NewsponsorComponent
	},
	{
		path:'contact',component:ContactComponent
	},
	{
		path:'address',component:AddressComponent
	},
	{
		path:'newaddress',component:NewaddressComponent
	},
	{
		path:'newcontact',component:NewcontactComponent
	},
	{
		path:'newngo',component:NewngoComponent
	}
];
@NgModule({
	imports:[
	SharedModule,
	RouterModule.forChild(routes),
	SelectModule
	],
	declarations:[
	NGOComponent,
	FarmComponent,
	FormcComponent,
	FarmerComponent,
	NewfarmerComponent,
	NewfarmComponent,
	SponsorsComponent,
	NewsponsorComponent,
	ContactComponent,
	AddressComponent,
	NewngoComponent,
	NewcontactComponent,
	NewaddressComponent
	],
	exports:[RouterModule]
})

export class FormgroupModule {

}