import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'error',
    templateUrl: 'error.html',
    styleUrls: ['error.scss'],
})

export class ErrorPage implements OnInit{

    constructor(
        private router: Router) {
}
    back(){
        this.router.navigate(['/'])
    }
    ngOnInit() {
      
    }
}
