import {Component} from '@angular/core';


@Component({
	selector:'mdl-favourite',
	templateUrl:'./favourites.component.html',
	styleUrls:['./favourites.component.scss']
})

export class FavouritesComponent {
	mode = 'Observable';
	errorMessage:string;

	public data:any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
}