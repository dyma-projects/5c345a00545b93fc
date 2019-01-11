import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public users : BehaviorSubject<string[]> = new BehaviorSubject(["paul"]);

  constructor() { }

  addUser(reference: any) {
    this.users.value.push(reference);
  }
}
