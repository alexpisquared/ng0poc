import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginState } from './loginState';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private defaultData: LoginState = { isLoggedIn: false, isNesAdmin: false, userName: 'none' };

  // Observable sources
  private loggedInSource: BehaviorSubject<LoginState> = new BehaviorSubject<LoginState>(this.defaultData);
  loggedIn$: Observable<LoginState> = this.loggedInSource.asObservable();

  constructor() {
  }

  loginUser(user: User): boolean {
    if (user !== null) {
      if (user.username === user.password) {
        this.loggedInSource.next({ isLoggedIn: true, isNesAdmin: false, userName: user.username });
        return true;
      }
    }

    return false;
  }

  logoutUser() {
    this.loggedInSource.next(this.defaultData);
  }
}
