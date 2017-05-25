import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';

@Component({
	selector:'mdl-new-farmer',
	templateUrl:'./new-farmer.component.html',
	styleUrls:['./new-farmer.component.scss']
})

export class NewfarmerComponent {
	public gender: Array<string> = ['Male','Female'];

	farmerForm:FormGroup;
	constructor(private location:Location,private fb:FormBuilder){
		this.farmerForm = fb.group({
			'surname':[null,[Validators.required]],
			'applicant':[null,[Validators.required]],
			'gender':[null,[Validators.required]],
			'identity':[null,[Validators.compose([Validators.required, CustomValidators.email])]],
			'dob':[null,[Validators.required]],
			'disabled':[null,[Validators.required]],
			'age':[null,[Validators.required]],
			'localAddress':fb.group({
				'country_id':[null,[Validators.required]],
				'province':[],
				'search':[],
				'city':[null,[Validators.required]],
				'address':[null,[Validators.required]],
				'postal_code':[null,Validators.pattern("^[1-9][0-9]{4}$")],
				'pobox':[null,Validators.pattern("^[1-9][0-9]{4}$")],
			})

		})
	}
	goBack(): void {
		this.location.back();
	}

	public value: any = {};
	public _disabledV: string = '0';
	public disabled: boolean = false;

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