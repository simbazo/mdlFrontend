import {Component} from '@angular/core';

@Component({
	selector:'mdl-business',
	templateUrl:'./business-entity.component.html',
	styleUrls:['./business-entity.component.scss']
})

export class BusinessEntityCompnent {

	settingActive = 1;
	mode = 'Observable';
	errorMessage:string;

	public data:any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
    
	constructor(){
		
	}
}