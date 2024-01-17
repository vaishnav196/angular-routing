import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
firstname:'';
lastname:'';
middlename:'';
issubmitted:boolean=false;
onsubmit(){
  this.issubmitted=true;
  this.canexit()
}
canexit(){
  if(this.firstname|| this.lastname||this.middlename && !this.issubmitted){
    return confirm('you have not saved data.Do you want to save changes?')
  
  }
  else{
    return true;
  }
}
}
