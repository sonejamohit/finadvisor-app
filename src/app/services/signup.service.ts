import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignUp } from '../data-type';
import {BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
import { UrlTree } from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  isUserLoggedIn=new BehaviorSubject<boolean>(false)
  static isUserLoggedIn: boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
  
  constructor(private http:HttpClient, private router:Router) { }
  
  usersignup(data: SignUp){
    this.http
    .post('http://localhost:3000/signup',
    data, {observe:'response'})
    .subscribe((result)=>{
      if(result){
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['user-home'])
      }
    })
  }
    reloadUser(){
      if(localStorage.getItem('user') ){
        this.isUserLoggedIn.next(true);
        this.router.navigate(['user-home'])
      }
    };
  }
