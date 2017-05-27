import {Component} from '@angular/core';

@Component({
	selector:'mdl-products',
	templateUrl:'./products.component.html',
	styleUrls:['./products.component.scss']
})

export class ProductsComponent {

	constructor(){
		console.log('all okay');
	}
}