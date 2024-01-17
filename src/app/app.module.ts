import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotFound404Component } from './not-found404/not-found404.component';
import { LoginComponent } from './login/login.component';
import { SubComponent } from './home/sub/sub.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { Service1Component } from './home/service1/service1.component';
import { Service2Component } from './home/service2/service2.component';
import { Service3Component } from './home/service3/service3.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormComponent } from './form/form.component';

  // const route:Routes =[
  //   {path:'',component:HomeComponent},
  
  //   {path:'Home',component:HomeComponent},
  //   {path:'About',component:AboutComponent},
  //   {path:'Contact',component:ContactComponent},
  //   {path:'Course',component:CourseComponent},
  //   {path:'Course/:id',component:CoursedetailsComponent},
  //   { path:'**',component:NotFound404Component}
  // ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    NotFound404Component,
    LoginComponent,
    SubComponent,
    CoursedetailsComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    CheckoutComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule, MatButtonModule, MatIconModule,MatInputModule,FormsModule,MatFormFieldModule, MatInputModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
