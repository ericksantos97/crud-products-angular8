import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: User = new User('admin', '123', 'Erick');
  public subject: Subject<string> = new Subject();

  constructor() { }

  public getUser(): User {
    return this.user;
  }

  public setEvent(username): void {
    this.subject.next(username);
  }

  public getEvent(): Observable<string> {
    return this.subject.asObservable();
  }

}
