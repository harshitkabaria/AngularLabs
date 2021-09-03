import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl,ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes,Router } from '@angular/router';
import { HttpErrorResponse } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
import { NgForm } from '@angular/forms';
import { UserPwd } from '../userpwd';
import { userObject } from '../userObject';
// import { USERPWD } from '../mock-users';
const BACKEND_URL = 'http://localhost:3000';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email:string = ""
  password:string = ""
  verify:boolean = false
  feedback:string = ""
  user:userObject = {username: "User1", birthday: "01/01/1990", age: 30, email: "user1@gmail.com", password: "123", valid: false}
  userpwd = new UserPwd()


  constructor(private formBuilder: FormBuilder,private router: Router,private httpClient:HttpClient) { 
    
  }

  ngOnInit(): void {
  
 }
 public loginFunc(){
  this.userpwd.email = this.email
  this.userpwd.password = this.password

  this.httpClient.post(BACKEND_URL + '/api/auth', this.userpwd, httpOptions)
  .subscribe((data: any) => {
    if (data.valid){
      debugger
      sessionStorage.setItem('username', data.username);
      sessionStorage.setItem('birthdate', data.birthday);
      sessionStorage.setItem('age', data.age);
      sessionStorage.setItem('email', data.email);
      this.router.navigateByUrl('account');
    } else {
      alert('Sorry, email or password is wrong')
    }
  });
}
  }


