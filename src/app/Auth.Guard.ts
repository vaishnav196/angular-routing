import { Component, inject } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Route, Router } from "@angular/router";
import { AuthGuardService } from "./services/auth-guard.service";
import { ContactComponent } from "./contact/contact.component";

export const CanActivate = () => {
  const authservice: AuthService = inject(AuthService);
  const route: Router = inject(Router);


  if (authservice.islogged) {
    return true
  }
  else {
    return false
  }
}



export const CanActivateChild = () => {
  const authservice: AuthService = inject(AuthService);
  const route: Router = inject(Router);


  if (authservice.islogged) {
    return true
  }
  else {
    return false
  }
}


export const CanDeactive = (component) => {
  const authservice: AuthService = inject(AuthService);
  const route: Router = inject(Router);

  return component.canexit()
}


