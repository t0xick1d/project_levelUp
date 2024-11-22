import { FormGroup } from '@angular/forms';

export interface ProfileFormFactory {
    createForm(): FormGroup;
}