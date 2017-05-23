import {Component} from '@angular/core';

@Component({
	selector:'mdl-ngotypes',
	templateUrl:'./ngo-types.component.html',
	styleUrls:['./ngo-types.component.scss']
})

export class NgoTypesComponent {
	mode = 'Observable';
	errorMessage:string;

	public data:any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
}