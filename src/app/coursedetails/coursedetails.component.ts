import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
//activeRouteLink: ActivatedRoute:inject(ActivatedRoute)//

  cid:string="";
router:Router=inject(Router);
activateroute:ActivatedRoute=inject(ActivatedRoute);
ngOnInit(): void {
//this.cid=this.activateroute.snapshot.paramMap.get('id')//
 this.cid= String(this.activateroute.snapshot.paramMap.get('id'))
 console.log(this.activateroute.snapshot.paramMap.get('id')) 

}

}
