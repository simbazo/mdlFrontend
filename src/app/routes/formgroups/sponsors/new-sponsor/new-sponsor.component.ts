import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';


@Component({
	selector:'mdl-new-sponsor',
	templateUrl:'./new-sponsor.component.html',
	styleUrls:['./new-sponsor.component.scss']
})

export class NewsponsorComponent {
	public sponsortype: Array<string> = ['Individual','Company','Unspecified'];
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
	sponsorForm:FormGroup;
	constructor(private location:Location,private fb:FormBuilder){
		this.sponsorForm = fb.group({
			'sponsor_type_id':[null,[Validators.required]],
			'sponsor_name':[null,[Validators.required]],
			'address':[],
			'contact':[],
			'email':[],


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