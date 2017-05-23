import { Component, OnInit } from '@angular/core';

import { UserblockService } from './userblock.service';
import { AuthService } from './../../../core/services/shared/auth.service';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user: any;
    username: string;
    constructor(public userblockService: UserblockService,public auth:AuthService) {

        this.user = {
            picture: 'assets/img/users/no-image.jpg',
            username: localStorage.getItem('username')
        };
    }

    ngOnInit() { 
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

}
