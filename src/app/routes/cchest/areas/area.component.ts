import {Component} from '@angular/core';

@Component({
	selector:'mdl-area',
	templateUrl:'./area.component.html',
	styleUrls:['./area.component.scss']
})

export class AreaComponent {

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