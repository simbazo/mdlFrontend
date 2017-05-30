import {Component} from '@angular/core';

import {Location} from '@angular/common';

@Component({
	selector:'mdl-sponsor',
	templateUrl:'./sponsors.component.html',
	styleUrls:['./sponsors.component.scss']
})

export class SponsorsComponent {
	
	constructor(private location:Location){
		
	}

	goBack(): void {
		this.location.back();
	}
}
