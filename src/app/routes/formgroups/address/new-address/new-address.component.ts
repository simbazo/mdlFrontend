import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
	selector:'mdl-newaddress',
	templateUrl:'./new-address.component.html',
	styleUrls:['./new-address.component.scss']
})

export class NewaddressComponent {

	constructor(private location:Location){
		
	}

	goBack(): void {
		this.location.back();
	}
	
}