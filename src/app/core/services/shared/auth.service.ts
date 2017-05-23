import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {SettingsService} from './../../settings/settings.service';
import {User} from './../../interfaces/shared/User';
import { HelperService } from './helper.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()

export class AuthService {
	user:User[];
	constructor(private _http:Http,private setting:SettingsService,private helper:HelperService){

	}

	login(login){
		return this._http.post(this.setting.api+'auth/login',login,{headers:this.setting.headers})
		.map((res:Response) =>{
			localStorage.setItem('username',res.json().user.first_name);
			localStorage.setItem('email',res.json().user.email);
			const token = res.json().token;
			const base64Url = token.split('.')[1];
			const base64 = base64Url.replace('-','+').replace('_','/');
			return {token:token,decoded:JSON.parse(window.atob(base64))};
		})
		.do(tokenData => {
			localStorage.setItem('token',tokenData.token);
			//localStorage.setItem('token',tokenData.token)
		})
		.catch(this.helper.handleServerError);
	}
	getToken(){
		return localStorage.getItem('token');
	}
	getUser(){
		return localStorage.getItem('username');
	}
	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('username');
		localStorage.removeItem('email');
		localStorage.removeItem('token');
	}
} 