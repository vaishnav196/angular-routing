import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
import { User } from '../Model/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
// islogged:false;
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  authservice: AuthService = inject(AuthService);
  route: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get('logout'))
      if (logout) {
        this.authservice.logout();
        alert(`you are now Logged out`)
        
      }
    })
  }
  onloginclicked() {
    const username = this.username.nativeElement.value
    const password = this.password.nativeElement.value
    const User =this.authservice.login(username,password)
    // console.log(username)
    // console.log(password)
    if (User === undefined) {
      alert('The Login Credentials You Have Entered are Incorrect Please check Agian')
    }
    else {
      alert(`welcome ${User.name} you have SuccesFully Logged In `)
      this.route.navigate(['/Course'])
    }
  }
}
