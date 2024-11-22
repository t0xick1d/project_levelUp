import { Injectable } from '@angular/core';
import { FacadeTable } from 'src/app/facade-table.service';
import { DataService } from 'src/app/data.service';

@Injectable({
    providedIn: 'root'
})
export class FacadeStoreAService extends FacadeTable {

    constructor() {
        super(new DataService);
    }

    public getData(): void {
        this.getDataFacade('storeA');
    }
}
