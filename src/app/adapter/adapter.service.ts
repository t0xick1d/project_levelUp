import { Injectable } from '@angular/core';

interface User {
    id: number;
    name: string;
    email: string;
}

interface ExternalUser {
    externalID: string;
    fullname: string;
    emailAddress: string;
}

@Injectable({
    providedIn: 'root'
})
export class AdapterService {

    adapter(item: ExternalUser): User {
        return {
            id: parseInt(item.externalID, 10),
            email: item.emailAddress,
            name: item.fullname
        };
    }
}
