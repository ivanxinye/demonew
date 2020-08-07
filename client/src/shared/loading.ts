import {Component, OnInit} from '@angular/core';
import {UserService} from "./../service/user.service";


@Component({
    selector: 'loading',
    template: `
        <div class="center-block-vertical loading" *ngIf="showLoader">
            <img src="assets/icons/loading.svg" alt="loading.">
        </div>
    `,
    styles: [`img {
        width: 5px
    }`

    ]

})
export class Loading implements OnInit {
    public showLoader: boolean = true;

    constructor(public service: UserService) {
        this.service.getSpinner().subscribe(event => {
            this.showLoader = event;
        })
    }

    ngOnInit() {
    }
}
