import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {
  
  shiftForm!: FormGroup;

  constructor(private fb:FormBuilder) { 

   
  }

  get shifts() {
    console.log(this.shiftForm.controls)

    return this.shiftForm.get('shifts') as FormArray;
  }
  addShift() {
    const shift = this.fb.group({
    

      date: '',
      start_time: '',
      end_time: '',
      hourly_wage: '',
      shift_place: '',
      shift_name: '',
      earnings: '',
      

    })
    this.shifts.push(shift)
    
  }
  
  deleteShift(i: number) {
    this.shifts.removeAt(i);
  }

  ngOnInit() {

    this.shiftForm=this.fb.group({
      shifts:this.fb.array([])
    })
  }
}




