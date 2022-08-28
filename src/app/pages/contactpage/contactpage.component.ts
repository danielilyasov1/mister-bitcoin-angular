import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service'

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
  ) { }

  contacts!: Contact[]
  subscription!: Subscription
  currUser!: User
  currBitcoin$!: Observable<number>
  selectedContactId!: string
  msg!: string

  onRemoveContact(contact: Contact) {
    this.contactService.deleteContact(contact._id as string)
    this.msg = 'Deleted ' + contact.name + ' Successfully'
  }

  ngOnInit(): void {
    this.contactService.loadContacts();
    this.contactService.contacts$.subscribe((contacts) => this.contacts = contacts)
  }

}
