import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {SettingsService} from './../../settings/settings.service';
import {HelperService} from './helper.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductsService {

	constructor(private _http:Http,
	 private settings:SettingsService,
	 private helper:HelperService
	 )
	{

	}

	index(){

	}

	store(){

	}

	update(){

	}

	destroy(){
		
	}
}