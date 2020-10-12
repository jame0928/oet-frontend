import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Services
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hasFormErrors: boolean = false;  
  demoData = {
    username:'demo@grupooet.com',
    password:'pb-nico'
  }

  constructor(
    private authService:AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.authService.logout();
    this.createForm();
  }

  createForm() {
		this.loginForm = this.fb.group({
      username: [this.demoData.username, Validators.compose([Validators.required])],
      password: [this.demoData.password, Validators.compose([Validators.required])],      
		});
  }

  login(){
    
    this.hasFormErrors = this.authService.validateFormErrors(this.loginForm)
    if(this.hasFormErrors){
      return;
    }

    let formValues = this.loginForm.value;

    this.authService.login(formValues.username,formValues.password).subscribe();

  }

}
