import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {SharedModule} from './../../shared/shared.module';
import { DataTableModule } from 'angular2-datatable';

import {NgoComponent} from './ngos/ngo.component';
import {NewsComponent} from './news/news.component';
import {AreaComponent} from './areas/area.component';
import {NewngoComponent} from './ngos/newngo/newngo.component';
import {SponsorComponent} from './sponsors/sponsors.component';
import {NgoTypesComponent} from './ngotypes/ngo-types.component';
import {FavouritesComponent} from './favourites/favourites.component';
import {SponsorTypeComponent} from './sponsortypes/sponsortype.component';
import {BusinessEntityCompnent} from './businessentity/business-entity.component';


import { SelectModule } from 'ng2-select';


const routes: Routes = [
    { path: '', redirectTo: 'cchest' },
    { path: 'ngos',component:NgoComponent},
    { path: 'news',component:NewsComponent},
    { path: 'create-ngo',component:NewngoComponent},
    { path: 'sponsors',component:SponsorComponent},
    { path: 'ngotypes',component:NgoTypesComponent},
    { path: 'favourites',component:FavouritesComponent},
    { path: 'bentity',component:BusinessEntityCompnent}
];

@NgModule({
	imports:[
        SharedModule,
        DataTableModule,
        SelectModule,
        RouterModule.forChild(routes)
	],
	providers:[],
	declarations:[
	NgoComponent,
	NewsComponent,
	AreaComponent,
	NewngoComponent,
	SponsorComponent,
	NgoTypesComponent,
	FavouritesComponent,
	SponsorTypeComponent,
	BusinessEntityCompnent
	],
	exports:[RouterModule]
})

export class CChestModule {

}