import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {TreeNode} from '../../interfaces/editor/api';

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
    
    getFilesystem() {
        return this.http.get('assets/server/data/filesystem.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
    
    getLazyFilesystem() {
        return this.http.get('assets/server/data/filesystem-lazy.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
}