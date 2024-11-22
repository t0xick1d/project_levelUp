import { Component } from '@angular/core';
import { FacadeStoreAService } from 'src/app/facadeStoreA.service';

@Component({
    selector: 'app-select-user',
    standalone: true,
    imports: [],
    templateUrl: './select-user.component.html',
    styleUrl: './select-user.component.css'
})
export class SelectUserComponent {
    constructor(private facade: FacadeStoreAService) {
    }
}
