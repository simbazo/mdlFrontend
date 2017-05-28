import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SettingsService } from './settings/settings.service';
import { ThemesService } from './themes/themes.service';
import { TranslatorService } from './translator/translator.service';
import { MenuService } from './menu/menu.service';
import { UserService} from './services/shared/user.service';
import { ClientService} from './services/shared/client.service';
import { NgoService} from './services/cchest/ngo.service';
import { AuthService} from './services/shared/auth.service';
import { HelperService} from './services/shared/helper.service';
import { AuthGuard } from './services/shared/auth.guard';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NodeService} from './services/editor/editor.service';

import {GooglePlaceService} from './services/shared/google-place.service';
@NgModule({
    imports: [
    ],
    providers: [
        SettingsService,
        ThemesService,
        TranslatorService,
        MenuService,
        UserService,
        ClientService,
        NgoService,
        AuthService,
        HelperService,
        AuthGuard,
        NodeService,
        GooglePlaceService
    ],
    declarations: [
    ],
    exports: [
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
/**
 * @author [Jacinto Joao <jacintotbrc@gmail.com>]
 * @ProjectManager [Rory Leisegang]
 * @Project MiDigitalLife
 */
