import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() {
    }

    getData(storeName: string): Observable<any> {
        return new Observable<any>(observer => {
            setTimeout(() => {
                console.log(storeName);
                observer.next([
                    { position: 1, name: 'Hydrogen', weight: Math.random(), symbol: 'H' },
                    { position: 2, name: 'Helium', weight: Math.random(), symbol: 'He' }
                ]);
            }, 500);

        });
    }
}
