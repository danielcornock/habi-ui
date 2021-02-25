import { Injectable } from '@angular/core';

import { StorageKeys } from '../../constants/storage-keys.constant';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public set(key: StorageKeys, payload: string): void {
    localStorage.setItem(key, payload);
  }

  public get(key: StorageKeys): string {
    return localStorage.getItem(key);
  }

  public remove(key: StorageKeys): void {
    localStorage.removeItem(key);
  }

  public setObject<T>(key: StorageKeys, payload: T): void {
    const stringPayload = JSON.stringify(payload);

    this.set(key, stringPayload);
  }

  public getObject<T>(key: StorageKeys): T {
    const payload = this.get(key) || '{}';

    return JSON.parse(payload);
  }
}
