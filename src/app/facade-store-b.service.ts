import { Injectable } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FacadeTable } from 'src/app/facade-table.service';

@Injectable({
    providedIn: 'root'
})
export class FacadeStoreBService extends FacadeTable {
    constructor() {
        super(new DataService);
    }

    public getData(): void {
        this.getDataFacade('storeB');
    }
}
