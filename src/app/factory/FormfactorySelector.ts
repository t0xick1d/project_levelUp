import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProfileFormFactory } from 'src/app/factory/ProfileFormFactory';
import { AdminFormFactory, ClientFormFactory } from 'src/app/factory/AdminFormFactory';

@Injectable({ providedIn: 'root' })
export class FormFactorySelector {
    constructor(private fb: FormBuilder) {
    }

    getFactory(userType: 'admin' | 'client'): ProfileFormFactory {
        if (userType === 'admin') {
            return new AdminFormFactory(this.fb);
        }
        return new ClientFormFactory(this.fb);
    }
}