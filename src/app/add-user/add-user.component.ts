import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserServiceService } from 'src/app/shared/services/user-service.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;

  constructor( private UserServiceService: UserServiceService
  ) { }

  ngOnInit() {
  }

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      this.UserServiceService.addUser(username);
      this.el.nativeElement.value = '';
    }
  }

}
