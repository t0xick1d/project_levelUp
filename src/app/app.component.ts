import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablesComponent } from 'src/app/tables/tables.component';
import { SelectUserComponent } from 'src/app/select-user/select-user.component';
import { FacadeStoreAService } from 'src/app/facadeStoreA.service';
import { FacadeStoreBService } from 'src/app/facade-store-b.service';
import { ProfileComponent } from 'src/app/factory/profile/profile.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, TablesComponent, SelectUserComponent, ProfileComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'templave';

    constructor(private fA: FacadeStoreAService, private fB: FacadeStoreBService) {
        this.fA.getData();
        this.fB.getData();
        this.fA.data$.subscribe(data => {
            console.log(data);
        });
        this.fB.data$.subscribe(data => {
            console.log(data);
        });

    }
}
