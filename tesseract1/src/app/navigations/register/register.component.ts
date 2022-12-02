import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  myform!: any;
  constructor() {}

  ngOnInit() {
    this.myform = new FormGroup ({
      username: new FormControl(''),
      email: new FormControl(''),
      fname: new FormControl(''),
      lname: new FormControl(''),
      password: new FormControl(''),
      passwors2nd: new FormControl(''),
      age: new FormControl('')
    });
  }

  onSubmit() {

  localStorage.setItem('userData', JSON.stringify(this.myform.value))
}
}