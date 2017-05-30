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

	index(): Observable<any>{
		return this._http.get(this.settings.api+'products?token='+this.helper.getToken())
					.map(this.helper.extractData)
					.catch(this.helper.handleServerError);

	}

	store(products){
		return this._http.post(this.settings.api+'products/store?token='+this.helper.getToken(),products,{headers:this.settings.headers})
				.map(this.helper.extractData)
				.catch(this.helper.handleServerError);
	}

	update(){

	}

	destroy(){
		
	}
	clients(): Observable<any>{
		return this._http.get(this.settings.api+'products/clients?token='+this.helper.getToken())
					.map(this.helper.extractData)
					.catch(this.helper.handleServerError);

	}

	searchQuestions(data){
		return this._http.post(this.settings.api+'products/search?token='+this.helper.getToken(),data,{headers:this.settings.headers})
				.map(this.helper.extractData)
				.catch(this.helper.handleServerError);
	}
}