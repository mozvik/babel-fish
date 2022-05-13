import { Injectable } from '@angular/core';
import { User } from '../register/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: User | undefined | null
  private _translateCount: number = 0

  get user(): User | undefined | null {
    return this.loadUser();
  }

  set user(user: User | undefined | null) {
    this._user = user;
    this.saveUser();
  }

  get translateCount(): number { 
    return Number(this.loadTranslateCount());
  }

  set translateCount(count: number) { 
    this._translateCount = count;
    this.saveTranslateCount();
  }

  constructor() { }


  private saveUser(): void {
    if (this._user) {
      window.localStorage.setItem('registeredUser', JSON.stringify(this._user));
    }
  }
  private loadUser(): User | null {
    const data = window.localStorage.getItem('registeredUser')
    return data ? JSON.parse(data) : null;
  }

  private loadTranslateCount(): string | null { 
    const data = window.localStorage.getItem('translateCount')
    return data ? data : '0';
  }

  private saveTranslateCount(): void { 
      window.localStorage.setItem('translateCount', this._translateCount.toString());
  }

}
