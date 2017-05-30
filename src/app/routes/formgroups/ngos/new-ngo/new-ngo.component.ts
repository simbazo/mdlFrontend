import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';
@Component({
	selector:'mdl-new-ngo',
	templateUrl:'./new-ngo.component.html',
	styleUrls:['./new-ngo.component.scss']
})

export class NewngoComponent {
	public gender: Array<string> = ['Male','Female','Unspecified'];
	public race:Array<string> = ['Black','White','Coloured','Others'];

	private myOptions: INgxMyDpOptions = {
		// other options...
		dateFormat: 'yyyy-mm-dd',
	};
	public options = {types: ['address'],componentRestrictions: { country: 'ZA' }}
    getAddress(place:Object) {       
           console.log("Address", place);
       }
	// Initialized to specific date (09.10.2018)
	private model: Object = { date: { year: 2018, month: 10, day: 9 } };
	farmerForm:FormGroup;
	constructor(private location:Location,private fb:FormBuilder){
		this.farmerForm = fb.group({
			'first_name':[null,[Validators.required]],
			'last_name':[null,[Validators.required]],
			'gender':[null,[Validators.required]],
			'id_number':[null,[Validators.compose([Validators.required, CustomValidators.email])]],
			'dob':[null,[Validators.required]],
			'disabled':[null,[Validators.required]],
			'age':[null,[Validators.required]],
			'race':['null',[Validators.required]],
			'projects':[],
			'employee_status':[],
			'address':[],
			'phone':[],
			'email':[],
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

	
		// optional date changed callback
		onDateChanged(event: IMyDateModel): void {
			// date selected
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