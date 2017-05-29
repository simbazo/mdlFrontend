import {Component,OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {ProductsService} from './../../../../core/services/shared/products.service';
import {Product} from './../../../../core/interfaces/shared/Product';
import {Client} from './../../../../core/interfaces/shared/Client';
@Component({
	selector:'mdl-new-product',
	templateUrl:'./new-product.component.html',
	styleUrls:['./new-product.component.scss']
})

export class NewproductComponent implements OnInit{
	
	public gender: Array<string> = ['Male','Female'];


	public value: any = {};
	public _disabledV: string = '0';
	public disabled: boolean = false;
	productForm:FormGroup;
	data:Client[];
	errorMessage:string;
	constructor(fb:FormBuilder,private productService:ProductsService){
		this.productForm = fb.group({
			'client_id': [null,[Validators.required]],
			'name':[null,[Validators.required]],
			'description':[]
		});
		
	}

	ngOnInit(){
		this.productService.clients()
			.subscribe(
				client => this.data = client,
				error  => this.errorMessage = <any>error
			);
	}

	submitForm($ev,value:any){
		$ev.preventDefault();

		for(let p in this.productForm.controls){
			this.productForm.controls[p].markAsTouched();
		}

		if(this.productForm.valid){
			this.productService.store(this.productForm.value)
				.subscribe(res =>console.log(res));
		}

	}
	public get disabledV(): string {
		return this._disabledV;
	}

	public set disabledV(value: string) {
		this._disabledV = value;
		this.disabled = this._disabledV === '1';
	}

	public selected(value: any): void {
		console.log('Selected value is: ', value);
	}

	public removed(value: any): void {
		console.log('Removed value is: ', value);
	}

	public typed(value: any): void {
		console.log('New search input: ', value);
	}

	public refreshValue(value: any): void {
		this.value = value;
	}
}