import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService) {
  }

  //mock the server

  user!: User
  private _user$ = new BehaviorSubject<User>({} as User)
  public user$ = this._user$.asObservable()


  // public getUser() {
  //   return this.user$
  // }

  signUp(name: string) {
    let user = {
      name: name,
      coins: 100,
      moves: [],
    }
    this._user$.next(user)
    return user
  }

  loadUser() {
    let user = this.storageService.loadFromSesStorage('userDB')
    this.user = user
    this._user$.next(user)
  }

  getLoggedUser() {
    return this.storageService.loadFromSesStorage('userDB')
  }


}