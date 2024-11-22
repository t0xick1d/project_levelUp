import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LC {
    public setData(key: string, value: any): void {
        const transformValue = this.transformToString(value);
        localStorage.setItem(key, transformValue);
    }


    public getData(key: string): any {
        const value = localStorage.getItem(key);
        if (!value) {
            console.warn('error key');
            return null;
        }
        return JSON.parse(value);
    }

    public clear(): void {
        localStorage.clear();
    }

    public removeData(key: string): void {
        if (localStorage.getItem(key) === undefined) {
            console.warn('error key');
        }
        localStorage.removeItem(key);
    }

    public exists(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }

    public existsIn(key: string): boolean {
        return key in localStorage;
    }

    private transformToString(data: any): string {
        return JSON.stringify(data);
    }
}