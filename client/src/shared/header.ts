import {Component, OnInit} from '@angular/core';
import {UserService} from "./../service/user.service";


@Component({
    selector: 'header',
    template: `
        <div class="fixed-header center-block-vertical">
            <h1>My Account</h1>
        </div>
    `
})
export class Header implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}