import {Injectable} from '@angular/core';
import {Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class HelperService {

	public extractData(res:Response){
		let body = res.json();
		return body.data || {};
	}

	public handleServerError(error: Response | any) {
		let errMsg:string;

		if(error instanceof Response){
			const body = error.json() || '';
			const err =body.error || JSON.stringify(body);

			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		}else{
			errMsg = error.message ? error.message : error.toString();
		}

		console.error(errMsg);
		return Observable.throw(errMsg);
    }
}

/**
 * @author [Jacinto Joao] <[jacintotbrc@gmail.com]>
 * @description [Helper class to handle observables]
 */