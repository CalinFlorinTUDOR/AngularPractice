import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({

      username: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])

    });
  constructor() { }

  ngOnInit() {}

  onSubmit() {

    this.loginData(this.loginForm.value);
  
  }

    loginData(user: any) {

      if (this.loginForm.valid) {
      let users = [];
      if (localStorage.getItem('Users')) {
        users = JSON.parse(localStorage.getItem('Users' ) || '[]');
        users = [user, ...users];

        localStorage.setItem('Users', JSON.stringify(users));

    } else {
      users = [user];
      
      localStorage.setItem('Users', JSON.stringify(users));

    }
  }
    
    }

  get username(): FormControl {
      return this.loginForm.get('username') as FormControl;
    }  

    get password(): FormControl {
      return this.loginForm.get('password') as FormControl;
    }  

}
