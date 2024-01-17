import { Component,inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // islogged=true;
  authservice: AuthService = inject(AuthService);
  route: Router = inject(Router);

  


}
