import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username = sessionStorage.getItem("username");
  email = sessionStorage.getItem("email");
  birthdate = sessionStorage.getItem("birthdate");
  age = sessionStorage.getItem("age");

  constructor(private router: Router) {
    debugger;
   }

  ngOnInit(): void {
    if (!this.email){
      this.router.navigate(['/login']);
    }
  }
  changeData(){
    sessionStorage.setItem('username',JSON.stringify(this.username));
    sessionStorage.setItem('birthdate', JSON.stringify(this.birthdate));
    sessionStorage.setItem('age', JSON.stringify(this.age));
    sessionStorage.setItem('email', JSON.stringify(this.email));
    this.router.navigate(['/account']);
  }

}
