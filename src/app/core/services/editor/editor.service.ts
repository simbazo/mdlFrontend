import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {TreeNode} from 'primeng/primeng';
import {HelperService} from './../shared/helper.service';
import {Project} from './../../../routes/editor/treetable/Project';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NodeService {
    
    constructor(private http: Http) {}

    getFiles() {
        return this.http.get('assets/server/data/files.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
    
    getLazyFiles() {
        return this.http.get('assets/server/data/files-lazy.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
    
    getFileSystem(): any {
        return this.http.get('http://deveditor.dev:8000/api/v1/treetable')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data)
                    .then(data => { return data; });
    }
    
    getLazyFilesystem() {
        return this.http.get('assets/server/data/filesystem-lazy.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
}