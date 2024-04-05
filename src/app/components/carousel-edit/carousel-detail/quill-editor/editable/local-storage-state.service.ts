import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageStateService {
  constructor() {}

  /**
   * Get the state from localStorage
   * @param key The key to use in localStorage
   * @param defaultValue The default value if the key is not found
   * @param serialize The serialization function (default to JSON.stringify)
   * @param deserialize The deserialization function (default to JSON.parse)
   */
  getState<T>(
    key: string,
    defaultValue: T | (() => T),
    serialize: (value: T) => string = JSON.stringify,
    deserialize: (value: string) => T = JSON.parse
  ): T {
    const valueInLocalStorage = localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return typeof defaultValue === 'function' ? (defaultValue as Function)() : defaultValue;
  }

  /**
   * Set the state in localStorage
   * @param key The key to use in localStorage
   * @param state The state to store
   * @param serialize The serialization function (default to JSON.stringify)
   */
  setState<T>(key: string, state: T, serialize: (value: T) => string = JSON.stringify): void {
    localStorage.setItem(key, serialize(state));
  }
}
