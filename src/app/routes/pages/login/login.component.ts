import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import { Router } from '@angular/router';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {AuthService} from './../../../core/services/shared/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    login = 'Login';
     error:any;

    constructor(private router: Router,private settings: SettingsService, fb: FormBuilder,private auth:AuthService) {

        this.loginForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'password': [null, Validators.required]
        });

    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        this.loading = true;
        this.login = 'processing please wait... ';
        for (let c in this.loginForm.controls) {
            this.loginForm.controls[c].markAsTouched();
        }
        if (this.loginForm.valid) {
            
           this.auth.login(this.loginForm.value)
               .subscribe(() => {
                   this.router.navigate(['/home']);
               },
               error => {
               this.error = error;
               this.login = 'Login';
               this.loading = false;
               });
        }
    }

    ngOnInit() {
      this.auth.logout();
    }

}
