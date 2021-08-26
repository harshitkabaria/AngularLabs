import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl,ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private formBuilder: FormBuilder,private router: Router) { 
    
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [ '',Validators.required],
      password: ['',Validators.required]
  });}
  onSubmit(){
    
    if(this.loginForm.value.email == "abc@gmail.com" && this.loginForm.value.password == "1234"){
      this.router.navigateByUrl('/account');
    }
    else if(this.loginForm.value.email == "abc1@gmail.com" && this.loginForm.value.password == "12345"){
      this.router.navigateByUrl('/account');
    }
    else if(this.loginForm.value.email == "abc2@gmail.com" && this.loginForm.value.password == "123"){
      this.router.navigateByUrl('/account');
    }
    else{
      alert("credential invalid.")

    }
  }
  }


