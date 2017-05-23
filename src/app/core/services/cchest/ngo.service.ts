import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {SettingsService} from './../../settings/settings.service';
import {HelperService} from './../shared/helper.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class NgoService {

	constructor(private _http:Http,private setting:SettingsService,private helper:HelperService){

	}

	getNgos(): Observable<any>{
		return this._http.get(this.setting.api+'ngos')
					.map(this.helper.extractData)
					.catch(this.helper.handleServerError); 
					
	}

	create(user){
		return this._http.post(this.setting.api+'register',user,{headers:this.setting.headers})
					.map(this.helper.extractData)
					.catch(this.helper.handleServerError);

	}

}

/**
 * @autho [Jacinto Joao] <[jacintotbrc@gmail.com]>
 */