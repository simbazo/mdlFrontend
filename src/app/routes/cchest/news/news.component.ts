import {Component} from '@angular/core';
import * as _ from 'lodash';
@Component({
	selector:'mdl-news',
	templateUrl:'./news.component.html',
	styleUrls:['./news.component.scss']
})

export class NewsComponent {
	mode = 'Observable';
	errorMessage:string;

	public data:any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
	constructor(){
		
	}

	public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.email.length;
    }
}