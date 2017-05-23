import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {SettingsService} from './../../settings/settings.service';
import {HelperService} from './helper.service';
import {User} from './../../interfaces/shared/User';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class UserService {

	constructor(private _http:Http,private setting:SettingsService,private helper:HelperService){

	}

	getUsers(): Observable<any>{
		return this._http.get(this.setting.api+'users')
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