import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
	selector:'mdl-address',
	templateUrl:'./address.component.html',
	styleUrls:['./address.component.scss']
})

export class AddressComponent {

	constructor(private location:Location){
		
	}

	goBack(): void {
		this.location.back();
	}
	
}