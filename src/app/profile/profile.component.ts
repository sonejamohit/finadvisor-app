import { Component } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private user:SignupService, private router: Router){}
  showLogin = false; 
  ngOnInit():void{
    this.user.reloadUser()
  }
  signUp(data:SignUp):void{
    this.user.usersignup(data)
  }
  // login(data:SignUp):void{
  //   console.warn(data);
  //   // this.signup.usersignup(data)
  //   // this.signup.usersignup(data).subscribe((result)=>{
  //   //   if(result){
  //   //     this.router.navigate(['user-home'])
  //   //   }
  //   // });
  // }
  // openLogin(){
  //   this.showLogin=true;
  // }
  // openSignUp(){
  //   this.showLogin=false;
  // }
}
