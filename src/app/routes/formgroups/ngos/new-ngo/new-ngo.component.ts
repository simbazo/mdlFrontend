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
	
	public types: Array<string> = ['NGO Working on Drugs','NGO working on Crime',
									'Service Orientation','Charitable Orientation',
									'Empowering Orientation','Community-based Organizations',
									'Citywide Organizations','National NGOs','International NGOs','Others'
									];
	public areas: Array<string> = 	['HIV/AIDS','Counselling','Education','Prevention','Rehabilitation','Training','Others'];							
	ngoForm:FormGroup;
	constructor(private location:Location,private fb:FormBuilder){
		this.ngoForm = fb.group({
			'ngotype':[null,[Validators.required]],
			'areas':[null,[Validators.required]],
			'acronym':[null,[Validators.required]],
			'email':[null,[Validators.compose([Validators.required, CustomValidators.email])]],
			'name':[null,[Validators.required]],
			'contact_person':[null,[Validators.required]],
			'address':[],
			'phone':[],
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