import {Component} from '@angular/core';

import {Location} from '@angular/common';

@Component({
	selector:'mdl-farmer',
	templateUrl:'./farmer.component.html',
	styleUrls:['./farmer.component.scss']
})

export class FarmerComponent {
	
	constructor(private location:Location){
		
	}

	goBack(): void {
		this.location.back();
	}
}
