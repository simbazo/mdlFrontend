import {NgModule} from '@angular/core';

import {Routes,RouterModule} from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import {QuestiontypesComponent} from './questiontypes/questiontypes.component';
import {QuestionsComponent} from './questions/questions.component';
import {ProductsComponent} from './products/products.component';
import {TabnavComponent} from './tabnav/tabnav.component';
import {NewproductComponent} from './products/new-product/new-product.component';

const routes: Routes = [
	{
		path:'products',component:ProductsComponent
	},
	{
		path:'questions',component:QuestionsComponent
	},
	{
		path:'datatype',component:QuestiontypesComponent
	}
];

@NgModule({
	imports:[RouterModule.forChild(routes),SharedModule],
	declarations:[
	QuestiontypesComponent,
	ProductsComponent,
	QuestionsComponent,
	NewproductComponent,
	TabnavComponent
	],
	exports:[RouterModule]
})

export class ProductsQuestionModule {
	
}

