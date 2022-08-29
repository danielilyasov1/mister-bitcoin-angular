import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.scss']
})
export class TransferHistoryComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }
  
  @Input() user!: User
  @Input() contact!: Contact
  user$!: Observable<User>
  subscription!: Subscription
  moves!: Move[]

  ngOnInit() {
    this.userService.loadUser()
    this.subscription = this.userService.user$.subscribe(user => {
      this.user = user
      this.contact ?
        this.moves = this.user.moves.filter(move => move['to'] === this.contact?.name)
        : this.moves = this.user.moves
    })
  }
}
