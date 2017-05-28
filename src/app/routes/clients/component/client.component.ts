import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {Client} from './../../../core/interfaces/shared/Client';
import {ClientService} from './../../../core/services/shared/client.service';
@Component({
	selector:'mdl-client',
	templateUrl:'./client.component.html',
	styleUrls:['client.component.scss']
})

export class ClientComponent implements OnInit{

	data: Client[];
	errorMessage:string;
	mode = 'Observable';
	constructor(private clients:ClientService){
		
	}

	ngOnInit():void{
		this.list();
	}

	list(){
		return this.clients.index()
		.subscribe(
			clients => this.data = clients,
			error 	=> this.errorMessage = <any>error
			);

	}


}