import {Component,OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {DatatypeService} from './../../../../core/services/shared/datatype.service';
import {Datatype} from './../../../../core/interfaces/shared/Datatype';

@Component({
	selector:'mdl-new-question',
	templateUrl:'./new-question.component.html',
	styleUrls:['./new-question.component.scss']
})

export class NewquestionComponent implements OnInit{
	public gender: Array<string> = ['Male','Female'];
	datatype:Datatype[];
	questionsForm:FormGroup;
	constructor(fb:FormBuilder,private datatypeService:DatatypeService){
		this.questionsForm = fb.group({
			'data_type': [null,[Validators.required]],
			'question': [null,[Validators.required]]
		});
		
	}

	ngOnInit(){

	}

	list(){

	}

	submitForm($ev,value:any){
		$ev.preventDefault();
		for (let d in this.questionsForm.controls){
			this.questionsForm.controls[d].markAsTouched();
		}
		if(this.questionsForm.valid){
			this.datatypeService.store(this.questionsForm.value)
			.subscribe(res => console.log(res));
		}
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