import {Component,OnInit} from '@angular/core';
import * as _ from 'lodash';
import {User} from './../../../../core/interfaces/shared/User';
import {UserService} from './../../../../core/services/shared/user.service';

import {Http} from "@angular/http";
@Component({
	selector:'mdl-user',
	templateUrl:'./user.component.html',
	styleUrls:['./user.component.scss']
})
export class UserComponent implements OnInit {

	
	mode = 'Observable';
	errorMessage:string;

	public data:User[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc"; 

	constructor(private _users:UserService, private http:Http){

	}

	 ngOnInit(): void {
        this.getUsers();

        console.log(this.getUsers());
    }

	getUsers(){ 
		this._users.getUsers()
					.subscribe(
						users => this.data = users,
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