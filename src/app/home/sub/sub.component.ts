import { Component, inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {
router:Router=inject(Router);

activateroute:ActivatedRoute=inject(ActivatedRoute);
NavigateToAbout(){
  // this.router.navigate(['About']) method one for navigating
// this.router.navigateByUrl('About') 
 //this.router.navigate(['About'],{relativeTo:this.activateroute});
 this.router.navigate(['About']);
}
}
