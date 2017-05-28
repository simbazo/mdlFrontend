import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {ClientService} from './../../../../core/services/shared/client.service';
@Component({
	selector:'mdl-new-client',
	templateUrl:'./new-client.component.html',
	styleUrls:['new-client.component.scss']
})

export class NewclientComponent {

	clientForm:FormGroup;
	constructor(private location:Location,fb:FormBuilder, private clientService:ClientService){
		
		this.clientForm = fb.group({
			'short_name': [null,[Validators.required]],
			'long_name':[],
			'email':[null,[Validators.compose([Validators.required,CustomValidators.email])]],
			'phone':[null,[Validators.required]],
			'fax':[],
			'address_id':[],
			'contact_person_fname':[null,[Validators.required]],
			'contact_person_lname':[null,[Validators.required]],
			'contact_person_email':[null,[Validators.compose([CustomValidators.email])]],
			'contact_person_cell':[]

		});

	}
	submitForm($ev, value:any){
		$ev.preventDefault();

		for (let c in this.clientForm.controls){
			this.clientForm.controls[c].markAsTouched();
		}

		if(this.clientForm.valid){
			this.clientService.store(this.clientForm.value)
				.subscribe(res => console.log(res));
		}
	}
	goBack(): void {
		this.location.back();
	}
}