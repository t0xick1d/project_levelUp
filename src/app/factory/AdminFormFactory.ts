import { ProfileFormFactory } from 'src/app/factory/ProfileFormFactory';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export class AdminFormFactory implements ProfileFormFactory {
    constructor(private fb: FormBuilder) {
    }

    createForm(): FormGroup {
        return this.fb.group({
            userName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            role: new FormControl('admin', [Validators.required])
        });
    }
}

export class ClientFormFactory implements ProfileFormFactory {
    constructor(private fb: FormBuilder) {
    }

    createForm(): FormGroup {
        return this.fb.group({
            userName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            address: new FormControl('', [Validators.required])
        });
    }
}

