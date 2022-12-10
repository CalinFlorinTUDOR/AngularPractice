import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  setForm!: any;
  pass1: string = '';
  pass2: string = '';
  
  constructor() {}

  ngOnInit() {
    
    this.setForm = new FormGroup ({

      username: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      fname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password2nd: new FormControl('', [Validators.required, Validators.minLength(6)]),
      age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(130)])

    });

    

  }

  onSubmit() {

  console.log(this.setForm.value)

  this.addMultipleUsers(this.setForm.value);

}

  addMultipleUsers(user: any) {

    if (this.setForm.valid && this.pass1 === this.pass2) {
      let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users' ) || '{}');
      users = [user, ...users];

      localStorage.setItem('Users', JSON.stringify(users));

  } else {
    users = [user];
    
    localStorage.setItem('Users', JSON.stringify(users));
    }
    }
  
  }

  get username(): FormControl {
    return this.setForm.get('username') as FormControl;
    
  }  

  get email(): FormControl {
    return this.setForm.get('email') as FormControl;
  }  

  get fname(): FormControl {
    return this.setForm.get('fname') as FormControl;
  }  

  get lname(): FormControl {
    return this.setForm.get('lname') as FormControl;
  }  

  get password(): FormControl {
    return this.setForm.get('password') as FormControl;
  } 
  
  get password2nd(): FormControl {
    return this.setForm.get('password2nd') as FormControl;
  } 

  get age(): FormControl {
    return this.setForm.get('age') as FormControl;
  } 



}