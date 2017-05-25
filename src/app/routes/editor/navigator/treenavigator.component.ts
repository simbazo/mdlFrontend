import {Component,NgOnInit} from '@angular/core';

import {Location} from '@angular/common';
import {NodeService} from './../../../core/services/editor/editor.service';

@Component({
	selector:'mdl-treenavigator',
	templateUrl:'./treenavigator.component.html',
	styles:['./treenavigator.component.scss']
})

export class TreenavigatorComponent implements OnInit {

	files: TreeNode[];

	constructor(private location:Location,private nodeService: NodeService){

	}

	goBack(): void {
		this.location.back();
	}
	ngOnInit(){
		 this.nodeService.getFilesystem().then(files => this.files = files);
	}
}