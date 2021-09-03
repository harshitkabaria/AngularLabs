import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username = sessionStorage.getItem("username");
  email = sessionStorage.getItem("email");
  birthdate = sessionStorage.getItem("birthdate");
  age = sessionStorage.getItem("age");
  constructor(private router:Router) { }

  ngOnInit(): void {
    if (!this.email){
      this.router.navigate(['/login']);
    }
  }

}
