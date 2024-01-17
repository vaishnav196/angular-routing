import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
activaRouteLink:ActivatedRoute=inject(ActivatedRoute);
router:Router=inject(Router);

ngOnInit(): void {
  this.activaRouteLink.fragment.subscribe((data)=>{
      console.log(data)
      this.jumtosection(data);
  })
}

jumtosection(section:any){
  
document.getElementById(section)?.scrollIntoView({behavior:'smooth'})
}
}
