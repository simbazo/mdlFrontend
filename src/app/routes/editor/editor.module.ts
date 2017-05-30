import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {SharedModule} from '../../shared/shared.module';
import {ProjectComponent} from './projects/project.component';
import {NewprojectComponent} from './projects/new-project/new-project.component';
import {TreenavigatorComponent} from './navigator/treenavigator.component';
import {TreeTableModule} from 'primeng/primeng';

const routes:Routes = [
	{
		path:'projects',component:ProjectComponent
	},
	{
		path:'projects/new',component:NewprojectComponent
	},
	{
		path:'projects/treenavigator',component:TreenavigatorComponent
	}
];

@NgModule({
	imports:[SharedModule,
	RouterModule.forChild(routes),
	TreeTableModule
	],
	declarations:[ProjectComponent,
	NewprojectComponent,
	TreenavigatorComponent],
	exports:[RouterModule],
})

export class EditorModule {

}