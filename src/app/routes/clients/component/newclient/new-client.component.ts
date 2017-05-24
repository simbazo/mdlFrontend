import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
@Component({
	selector:'mdl-new-client',
	templateUrl:'./new-client.component.html',
	styleUrls:['new-client.component.scss']
})

export class NewclientComponent {

	clintForm:FormGroup;
	constructor(
		private location:Location,
		private fb:FormBuilder,
	){

	}
	goBack(): void {
		this.location.back();
	}
}