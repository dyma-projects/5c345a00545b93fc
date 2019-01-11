import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/shared/services/user-service.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: string[];

  constructor(private UserServiceService: UserServiceService
  ) { }

  ngOnInit() {
    this.UserServiceService.users.subscribe((users: any) => {
      this.users = users
    })
    // il faut initialiser les users ici avec le service
  }

}
