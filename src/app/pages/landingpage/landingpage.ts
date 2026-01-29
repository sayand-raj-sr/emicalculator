import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landingpage',
  imports: [FormsModule],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css',
})
export class Landingpage {
 amount:number=0
 intrest:number=0
 tenure:number=0
 emi:number=0

 calculateintrest(){
  const p=this.amount;
  const r=this.intrest/12/100;
  const n=this.tenure*12;

  this.emi=Math.floor((p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1));
 }
}
