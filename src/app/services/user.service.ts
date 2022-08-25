import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { UtilsService } from './utilService.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private KEY = 'user';

  constructor(private utilService: UtilsService) {
  }

  //mock the server


  private _user$ = new BehaviorSubject<User>(this.utilService.load(this.KEY) || null)
  public user$ = this._user$.asObservable()


  public getUser() {
    return this.user$
  }


}