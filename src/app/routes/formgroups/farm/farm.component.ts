import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
	selector:'mdl-farm',
	templateUrl:'./farm.component.html',
	styleUrls:['./farm.component.scss']
})

export class FarmComponent {

	constructor(private location:Location){
		
	}

	goBack(): void {
		this.location.back();
	}
	
}