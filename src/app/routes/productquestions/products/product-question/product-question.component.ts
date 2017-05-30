import {Component,OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {ProductsService} from './../../../../core/services/shared/products.service';
import {Product} from './../../../../core/interfaces/shared/Product';
import {Questions} from './../../../../core/interfaces/shared/Questions';

@Component({
	selector:'mdl-product-question',
	templateUrl:'./product-question.component.html',
	styleUrls:['./product-question.component.scss']
})

export class ProductQuestion {
	question:string;
	searchForm:FormGroup;
	questionForm:FormGroup;
	errorMessage:string;
	questions:Questions[];
	constructor(fb:FormBuilder,private productService:ProductsService){
		this.searchForm = fb.group({
			'question': this.question
		});

		this.questionForm = fb.group({
			'question':[]
		})
		
	}

	searchQuestions(){
		this.productService.searchQuestions(this.searchForm.value)
			.subscribe(
				data => this.questions = data
				);
	}
	submitForm($event, value:any){
		console.log(this.questionForm.value);
	}
}