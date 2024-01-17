import { Injectable, OnInit, inject } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  constructor() {
    
   }
  islogged: boolean = false;
activeRoute:ActivatedRoute=inject(ActivatedRoute);
  userservice: UserService = inject(UserService);


  login(username: string, password: string) {
    let US = this.userservice.users.find((u)=> u.username === username && u.password === password )
console.log(US)
    if (US === undefined) 
      this.islogged=false;
    
    else 
      this.islogged = true
    return US
    
  }

  logout(){
    this.islogged=false;
  }

isAuthenticated(){
  return this.islogged
}



}
