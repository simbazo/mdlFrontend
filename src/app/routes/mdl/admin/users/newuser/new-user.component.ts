import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {UserService} from './../../../../../core/services/shared/user.service';

@Component({
	selector:'mdl-newuser',
	templateUrl:'./new-user.component.html',
	styleUrls:['new-user.component.scss']
})

export class NewuserComponent {

	userForm:FormGroup;
	passwordForm:FormGroup;

	constructor(
		private location:Location,
		private fb:FormBuilder,
		private _userService:UserService
		){
		let password = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
		let certainPassword = new FormControl('', CustomValidators.equalTo(password));

		this.passwordForm = fb.group({
			'password':password,
			'confirmPassword':certainPassword
		});

		this.userForm = fb.group({
			'first_name':[null,[Validators.required]],
			'last_name':[null,[Validators.required]],
			'phone':[null,[Validators.required]],
			'username':[null,[Validators.required]],
			'email':[null,[Validators.compose([Validators.required, CustomValidators.email])]],
			'passwordGroup':this.passwordForm

		})
	}

	submitForm($ev, value:any){
		$ev.preventDefault();
		for (let c in this.userForm.controls) {
			this.userForm.controls[c].markAsTouched();
		}
		for (let c in this.passwordForm.controls) {
			this.passwordForm.controls[c].markAsTouched();
		}

		if (this.userForm.valid) { 
			let user:any = {
				'first_name': value.first_name,
				'last_name'	: value.last_name,
				'phone'		: value.phone,
				'username'	: value.username,
				'email'		: value.email,
				'password'	: value.passwordGroup.password,
				'password_confirmation': value.passwordGroup.confirmPassword
			}
			this._userService.create(user)
				.subscribe((res:Response)=> console.log(res));
			
		}

	}

	goBack(): void {
		this.location.back();
	}
}