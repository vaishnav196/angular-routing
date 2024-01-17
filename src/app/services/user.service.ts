import { Injectable } from '@angular/core';
import { User } from '../Model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users:User[]=[
    new User(1,'John Smith','js','1234'),
    new User(2,'Merry Jane','mj','1234'),
    new User(3,'Mark Vought','mv','1234'),
    new User(4,'Sarah King','sk','1234')
  ]

  
}
