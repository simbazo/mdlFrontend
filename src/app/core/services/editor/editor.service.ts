import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {TreeTableModule,TreeNode,SharedModule} from 'primeng/primeng';

@Injectable()
export class NodeService {
    
    constructor(private http: Http) {}

    getFilesystem() {
        return this.http.get('assets/server/filesystem.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
}