import { Injectable } from '@angular/core';
import { Headers} from '@angular/http';
declare var $: any;

@Injectable()
export class SettingsService {

    public user: any;
    public app: any;
    public layout: any;
    public api = 'http://midigital.app:8000/api/v1/';
    headers = new Headers({'Content-Type':'application/json'});


    constructor() {

        // User Settings
        // -----------------------------------
        this.user = {
            name: 'JJ',
            job: 'ng-developer',
            picture: 'assets/img/users/no-image.jpg'
        };

        // App Settings
        // -----------------------------------
        this.app = {
            name: 'MiDigitalLife',
            description: 'Web & Mobile Development',
            year: ((new Date()).getFullYear())
        };

        // Layout Settings
        // -----------------------------------
        this.layout = {
            isFixed: true,
            isCollapsed: false,
            isBoxed: false,
            isRTL: false,
            horizontal: false,
            isFloat: false,
            asideHover: false,
            theme: null,
            asideScrollbar: false,
            isCollapsedText: false,
            useFullLayout: false,
            hiddenFooter: false,
            offsidebarOpen: false,
            asideToggled: false,
            viewAnimation: 'ng-fadeInUp'
        };

    }

    getAppSetting(name) {
        return name ? this.app[name] : this.app;
    }
    getUserSetting(name) {
        return name ? this.user[name] : this.user;
    }
    getLayoutSetting(name) {
        return name ? this.layout[name] : this.layout;
    }

    setAppSetting(name, value) {
        if (typeof this.app[name] !== 'undefined') {
            this.app[name] = value;
        }
    }
    setUserSetting(name, value) {
        if (typeof this.user[name] !== 'undefined') {
            this.user[name] = value;
        }
    }
    setLayoutSetting(name, value) {
        if (typeof this.layout[name] !== 'undefined') {
            return this.layout[name] = value;
        }
    }

    toggleLayoutSetting(name) {
        return this.setLayoutSetting(name, !this.getLayoutSetting(name));
    }

}
/**
 * @author [Jacinto Joao <jacintotbrc@gmail.com>]
 * @ProjectManager [Rory Leisegang]
 * @Project MiDigitalLife
 */
