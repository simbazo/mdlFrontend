import {Component,OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {QuestionsService} from './../../../../core/services/shared/questions.service';
import {Questions} from './../../../../core/interfaces/shared/Questions';
import {datatype} from './datatype';

@Component({
	selector:'mdl-new-question',
	templateUrl:'./new-question.component.html',
	styleUrls:['./new-question.component.scss']
})

export class NewquestionComponent implements OnInit{
	errorMessage:string;
	question:Questions[];
	data:datatype[];
	public gender : Array<any> = [];
	questionsForm:FormGroup;
	constructor(fb:FormBuilder,private questionService:QuestionsService){
		this.questionsForm = fb.group({
			'data_type_id': [null,[Validators.required]],
			'question': [null,[Validators.required]]
		});
		
	}

	list(){
		return this.questionService.datatype()
		.subscribe(
			datatype => this.data = datatype,
			error 	=> this.errorMessage = <any>error
			);

	}

	ngOnInit(){
		this.list();

	}

	submitForm($ev,value:any){
		$ev.preventDefault();
		for (let d in this.questionsForm.controls){
			this.questionsForm.controls[d].markAsTouched();
		}
		if(this.questionsForm.valid){
			this.questionService.store(this.questionsForm.value)
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