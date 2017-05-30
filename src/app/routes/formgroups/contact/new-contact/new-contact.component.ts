import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
	selector:'mdl-new-contact',
	templateUrl:'./new-contact.component.html',
	styleUrls:['./new-contact.component.scss']
})

export class NewcontactComponent {

	constructor(private location:Location){
		
	}

	goBack(): void {
		this.location.back();
	}
	
}