import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  nume='Calin'
  constructor() {}

  ngOnInit(): void {
  }


  storeData(){
    let data = {
      username: 'username.value',
      email: 'email.value',
      fname: 'fname.value',
      lname: 'lname.value',
      password: 'password.value',
      password2nd: 'password2nd.value',
      age: 'age.value'
      
    };
        localStorage.setItem('username.value', JSON.stringify(data));

  }
}
