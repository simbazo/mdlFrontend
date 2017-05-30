import {Component,OnInit} from '@angular/core';

import {Location} from '@angular/common';
import {NodeService} from './../../../core/services/editor/editor.service';
import {TreeNode} from 'primeng/primeng';
import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';
import {Project} from './../treetable/Project';
@Component({
	selector:'mdl-treenavigator',
	templateUrl:'./treenavigator.component.html',
	styles:['./treenavigator.component.scss']
})

export class TreenavigatorComponent implements OnInit {

    data: TreeNode[];
    cols:any;
    constructor(private location:Location,private nodeService: NodeService){

    }

    goBack(): void {
        this.location.back();
    }
    
    ngOnInit():void {
        this.nodeService.getFileSystem().then(data => this.data = data);
        
        this.cols = [
        {field: 'uuid', header: 'Uuid'},
        {field: 'name',header: 'Name'},
        {field: 'Parent_ID', header: 'ParentID'},
        {field: 'ContentStart_ID', header: 'StartID'}
        ];
    }
}