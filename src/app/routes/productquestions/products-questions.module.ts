import {NgModule} from '@angular/core';

import {Routes,RouterModule} from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SelectModule } from 'ng2-select';

import {NewquestionComponent} from './questions/new-questions/new-question.component';
import {NewdatatypeComponent} from './datatype/new-datatype/new-datatype.component';
import {NewproductComponent} from './products/new-product/new-product.component';
import {QuestiontypesComponent} from './datatype/questiontypes.component';
import {QuestionsComponent} from './questions/questions.component';
import {ProductsComponent} from './products/products.component';
import {TabnavComponent} from './tabnav/tabnav.component';
import {ProductQuestion} from './products/product-question/product-question.component';

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
	imports:[
	RouterModule.forChild(routes),
	SharedModule,
	SelectModule
	],
	declarations:[
	QuestiontypesComponent,
	ProductsComponent,
	QuestionsComponent,
	NewproductComponent,
	NewdatatypeComponent,
	NewquestionComponent,
	TabnavComponent,
	ProductQuestion
	],
	exports:[RouterModule]
})

export class ProductsQuestionModule {
	
}

