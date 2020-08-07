import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currecyInt' })
export class CurrecyInt implements PipeTransform {
    transform(value): string {
        var str = value.toString();
        var arr = str.split('.');
        var integer = arr[0]
        var decimal = arr.length > 1 ? arr[1] : ''
        let result = ''
        while (integer.length > 3) {
            result = ',' + arr[0].slice(-3) + result; 
            integer = integer.slice(0, -3);
        }
        return integer + result
        
    }
}
@Pipe({ name: 'currecyDec' })
export class CurrecyDec implements PipeTransform {
    transform(value): string {
        var str = value.toString();
        var arr = str.split('.');
        var integer = arr[0]
        var decimal = arr.length > 1 ? arr[1] : ''
        let result = ''
        while (2 - decimal.length)  decimal += '0';
        return decimal
    }
}
@Pipe({ name: 'currecyWhole' })
export class CurrecyWhole implements PipeTransform {
    transform(value): string {
        var str = value.toString();
        var arr = str.split('.');
        var integer = arr[0]
        var decimal = arr.length > 1 ? arr[1] : ''
        let result = ''
        while (integer.length > 3) {
            result = ',' + arr[0].slice(-3) + result; 
            integer = integer.slice(0, -3);
        }
        while (2 - decimal.length)  decimal += '0';

        return integer + result + '.' + decimal
    }
}