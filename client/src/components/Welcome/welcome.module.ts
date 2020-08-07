import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../app/material.module';
import { WelcomePage } from './welcome';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { CurrecyDec, CurrecyInt } from '../../filters/currancyChange';
import { UserService } from '../../service';
@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RoundProgressModule,
        
        

        RouterModule.forChild([
            {
                path: '',
                component: WelcomePage
            }
        ])
    ],
    declarations: [
        WelcomePage,
        CurrecyDec,
        CurrecyInt],
    providers: [UserService]

})
export class WelcomeModule {
}
