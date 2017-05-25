import {Component} from '@angular/core';

import {Location} from '@angular/common';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';

@Component({
	selector:'mdl-editor-newproject',
	templateUrl:'./new-project.component.html',
	styleUrls:['./new-project.component.scss']
})

export class NewprojectComponent {

	projectForm:FormGroup;
	constructor(private location:Location,private fb:FormBuilder){
		this.projectForm = fb.group({
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
}
