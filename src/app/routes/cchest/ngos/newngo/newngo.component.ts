import {Component} from '@angular/core';

import {Location} from '@angular/common';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
@Component({
	selector:'mdl-newngo',
	templateUrl:'./newngo.component.html',
	styleUrls:['newngo.component.scss']
})

export class NewngoComponent {

	ngoForm:FormGroup;
	public types: Array<string> = ['NGO Working on Drugs','NGO working on Crime',
									'Service Orientation','Charitable Orientation',
									'Empowering Orientation','Community-based Organizations',
									'Citywide Organizations','National NGOs','International NGOs','Others'
									];
	public areas: Array<string> = 	['HIV/AIDS','Counselling','Education','Prevention','Rehabilitation','Training','Others'];							

	public options = {types: ['address'],componentRestrictions: { country: 'ZA' }}
    getAddress(place:Object) {       
           console.log("Address", place);
       }

	constructor(private location:Location,fb:FormBuilder){
		this.ngoForm = fb.group({
			'acronym':[null,[Validators.required]],
			'name':[null,[Validators.required]],
			'type_id':[null,[Validators.required]],
			'short_description':[null,[Validators.required]],
			'description':[null,[Validators.required]],
			'phone':[null,[Validators.required]],
			'email':[null,[Validators.compose([Validators.required, CustomValidators.email])]],
			'website':[null,[Validators.required]],
			'contact_person':[null,[Validators.required]],
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