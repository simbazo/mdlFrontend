import {Component, OnInit} from '@angular/core';

import * as _ from 'lodash';
import {QuestionsService} from './../../../core/services/shared/questions.service';
import {Questions} from './../../../core/interfaces/shared/Questions';

@Component({
	selector:'mdl-questions',
	templateUrl:'./questions.component.html',
	styleUrls:['questions.component.scss']
})

export class QuestionsComponent implements OnInit{
	data:Questions[];
	mode = 'Observable';
	errorMessage:string;

	constructor(private questions:QuestionsService){

	}

	list(){
		return this.questions.index()
		.subscribe(
			questions => this.data = questions,
			error 	=> this.errorMessage = <any>error
			);
	}

	ngOnInit(){
		this.list();
	}
}