import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }
  subscription!: Subscription
  currContact!: Contact
  user!: User
  user$!: Observable<User>


  ngOnInit() {
    this.route.data.subscribe(data => {
      this.currContact = data['contact']
    })
    this.subscription = this.userService.user$.subscribe(user => {
      this.user = user!
    })
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }

}
