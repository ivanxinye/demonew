import {Injectable, Inject} from '@angular/core';
import {Observable, Subject} from 'rxjs';


@Injectable()
export class UserService {
    public sharedObj = {}
    setter(props, value) {
        this.sharedObj[props] = value;
    }

    getter(props) {
        return this.sharedObj[props]
    }
    public showLoader = new Subject<any>();

    /* Setter for loading status using in components*/
    public isLoading(state: boolean) {
        this.showLoader.next(state);
    }

    /*Getter for loading status using in loader components*/
    public getSpinner(): Observable<any> {
        return this.showLoader.asObservable();
    }

    changeCurrency(currency, part?){
        if(currency !== undefined){
            var str = currency.toString();
            var arr = str.split('.');
            var integer = arr[0]
            var decimal = arr.length > 1 ? arr[1] : ''
            let result = ''
            while (integer.length > 3) {
                result = ',' + arr[0].slice(-3) + result; 
                integer = integer.slice(0, -3);
            }
            while (2 - decimal.length)  decimal += '0';
            if(part === "decimal"){
                return decimal
            } else if(part === 'integer'){
                return integer + result
            } else return integer + result + '.' + decimal
        } else return ''
        
    }

}
