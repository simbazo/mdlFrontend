import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {DatatypeService} from './../../../core/services/shared/datatype.service';
import {Datatype} from './../../../core/interfaces/shared/Datatype';
@Component({
	selector:'mdl-question-types',
	templateUrl:'./questiontypes.component.html',
	styleUrls:['./questiontypes.component.scss']
})

export class QuestiontypesComponent implements OnInit{

	data:Datatype[];
	mode = 'Observable';
	errorMessage:string;

	constructor(private datatypeService:DatatypeService){

	}

	list(){
		return this.datatypeService.index()
		.subscribe(
			datatype => this.data = datatype,
			error 	=> this.errorMessage = <any>error
			);

	}

	ngOnInit():void{
		this.list();
	}
}