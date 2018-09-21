import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignInState } from './signInState';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private defaultData: SignInState = { isSignedIn: false, isNesAdmin: false, userName: 'none' };

  // Observable sources
  private signedInSource: BehaviorSubject<SignInState> = new BehaviorSubject<SignInState>(this.defaultData);
  signedIn$: Observable<SignInState> = this.signedInSource.asObservable();

  constructor() {
  }

  signInUser(user: User): boolean {
    if (user !== null) {
      if (user.username === user.password) {
        this.signedInSource.next({ isSignedIn: true, isNesAdmin: false, userName: user.username });
        return true;
      }
    }

    return false;
  }

  logoutUser() {
    this.signedInSource.next(this.defaultData);
  }
}
