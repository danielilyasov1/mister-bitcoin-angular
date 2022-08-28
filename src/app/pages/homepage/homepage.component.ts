import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { ContactService } from 'src/app/services/contact.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private bitcoinService: BitcoinService,
    private userService: UserService,
    private storageService: StorageService
  ) { }
  currUser!: User
  nickname!: string
  btcValue!: number

  async ngOnInit() {
    this.btcValue = await lastValueFrom(this.bitcoinService.getRate())
    this.contactService.loadContacts();
    if (this.storageService.loadFromSesStorage('userDB')) {
      this.currUser = this.storageService.loadFromSesStorage('userDB')
    }
  }

  onGoToContact() {
    this.router.navigateByUrl('/contact')
  }

  onEnterName() {
    this.currUser = this.userService.signUp(this.nickname)
    this.storageService.saveToSesStorage('userDB', this.currUser)
  }
}
