import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
	selector:'mdl-ngo',
	templateUrl:'./ngo.component.html',
	styleUrls:['./ngo.component.scss']
})

export class NGOComponent {

	constructor(private location:Location){
		
	}

	goBack(): void {
		this.location.back();
	}
	
}