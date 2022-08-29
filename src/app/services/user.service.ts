import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';
import { Move } from '../models/move.model';
import { Contact } from '../models/contact.model';


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

  addMove(contact: Contact, amount: number) {
    if (this.user.coins - amount < 0 || amount<1){
      console.error('Now Enough Coins')
      return false
    } 
    let move: Move = {
      toId: contact._id!, 
      to: contact.name,
      at: Date.now(),
      amount
    }
    this.user.coins -= amount
    this.user.moves.unshift(move)
    this.storageService.saveToSesStorage('userDB', this.user)
    this.loadUser()
    return true
  }

}