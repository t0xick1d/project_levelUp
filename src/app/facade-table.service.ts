import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class FacadeTable<T = any> {
    data$ = new BehaviorSubject<T[]>([]);

    protected constructor(private dataS: any) {
    }

    protected getDataFacade(storeName: string): void {
        this.dataS.getData(storeName).subscribe((v: any) => {
            this.data$.next(v);
        });
    }
}
