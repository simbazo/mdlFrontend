import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {SettingsService} from './../../settings/settings.service';
import {HelperService} from './helper.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class QuestionsService {

	constructor(private _http:Http,
	 private settings:SettingsService,
	 private helper:HelperService
	 )
	{

	}

	index(): Observable<any>{
		return this._http.get(this.settings.api+'questions?token='+this.helper.getToken())
					.map(this.helper.extractData)
					.catch(this.helper.handleServerError);

	}

	store(questions){
		return this._http.post(this.settings.api+'questions/store?token='+this.helper.getToken(),questions,{headers:this.settings.headers})
				.map(this.helper.extractData)
				.catch(this.helper.handleServerError);
	}

	update(){

	}

	destroy(){
		
	}
}