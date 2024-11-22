import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FacadeStoreAService } from 'src/app/facadeStoreA.service';
import { AsyncPipe } from '@angular/common';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}


@Component({
    selector: 'app-tables',
    standalone: true,
    imports: [MatTableModule, AsyncPipe],
    templateUrl: './tables.component.html',
    styleUrl: './tables.component.css'
})
export class TablesComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

    facade = inject(FacadeStoreAService);

    dataSource = this.facade.data$;

    constructor() {
    }

    ngOnInit(): void {
       
    }
}
