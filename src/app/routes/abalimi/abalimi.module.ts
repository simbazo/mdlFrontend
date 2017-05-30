import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

/*components*/
import {SharedModule} from '../../shared/shared.module';
import { SelectModule } from 'ng2-select';
const routes: Routes = [
	
];


@NgModule({
	imports:[SharedModule,
	RouterModule.forChild(routes),
	SelectModule],
	declarations:[
	],
	exports:[RouterModule]
})

export class AbalimiModule {
	
}