import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
	selector:'mdl-contact',
	templateUrl:'./contact.component.html',
	styleUrls:['./contact.component.scss']
})

export class ContactComponent {

	constructor(private location:Location){
		
	}

	goBack(): void {
		this.location.back();
	}
	
}