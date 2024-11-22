import { Component, OnInit } from '@angular/core';
import { FormFactorySelector } from 'src/app/factory/FormfactorySelector';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
    profileForm!: FormGroup;

    constructor(private formFactorySelector: FormFactorySelector) {
    }

    ngOnInit(): void {
        const user = 'client';
        const factory = this.formFactorySelector.getFactory(user);
        this.profileForm = factory.createForm();
    }
}


interface Form {
    name: string;
    type: 'text' | 'number' | 'checkbox';
    values?: [];
    value?: any;
    options: [{
        name: 'App',
        value: 'true'
    }];
}