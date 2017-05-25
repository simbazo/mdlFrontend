import {NgModule} from '@angular/core';

import {Routes,RouterModule} from '@angular/router';
import {SaredModule} from '../../shared/shared.module';

const routes: Routes = [
	
];


@NgModule({
	imports:[SharedModule,RouterModule.forChild(routes)],
	declarations:[],
	exports:[RouterModule]
})

export class AbalimiModule {
	
}