import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {Ngo} from './../../../core/interfaces/cchest/Ngo';
import {NgoService} from './../../../core/services/cchest/ngo.service';
import {Http} from "@angular/http";

@Component({
	selector:'mdl-ngo',
	templateUrl:'./ngo.component.html',
	styleUrls:['./ngo.component.scss']
})

export class NgoComponent implements OnInit{

	mode = 'Observable';
	errorMessage:string;

	public data:Ngo[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

	constructor(private _ngos:NgoService,private http:Http){

	}

	ngOnInit(): void{
		this.getNgos();
	}

	getNgos(){
		this._ngos.getNgos()
					.subscribe(
						ngos => this.data = ngos,
						error => this.errorMessage = <any>error
						);
	}
	public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.email.length;
    }

	
}