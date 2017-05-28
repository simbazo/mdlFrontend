import {Component,OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {DatatypeService} from './../../../../core/services/shared/datatype.service';
import {Datatype} from './../../../../core/interfaces/shared/Datatype';

@Component({
	selector:'mdl-new-datatype',
	templateUrl:'./new-datatype.component.html',
	styleUrls:['./new-datatype.component.scss']
})

export class NewdatatypeComponent implements OnInit{

	datatype:Datatype[];
	datatypeForm:FormGroup;
	constructor(fb:FormBuilder,private datatypeService:DatatypeService){
		this.datatypeForm = fb.group({
			'data_type': [null,[Validators.required]]
		});
		
	}

	ngOnInit(){

	}

	list(){

	}

	submitForm($ev,value:any){
		$ev.preventDefault();
		for (let d in this.datatypeForm.controls){
			this.datatypeForm.controls[d].markAsTouched();
		}
		if(this.datatypeForm.valid){
			this.datatypeService.store(this.datatypeForm.value)
				.subscribe(res => console.log(res));
		}
	}
}