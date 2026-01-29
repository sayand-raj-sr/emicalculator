import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private route:Router){}
user:any={
  username:"",
  password:"",
  email:"",
  confirmpassword:""
}
register(){
  if(this.user.username&&this.user.email&&this.user.password&&this.user.confirmpassword){
    if(this.user.password===this.user.confirmpassword){
      alert('register successfull........')
      sessionStorage.setItem('userdetails',JSON.stringify(this.user))
      this.route.navigate(['/login'])
    }
    else{
      alert('password missmathch')
    }
  }
  else{
    alert('fill the form')
  }
}
}
