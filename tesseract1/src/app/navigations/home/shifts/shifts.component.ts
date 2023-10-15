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

    this.shiftForm = this.fb.group({
      shifts: this.fb.array([])

    });
  }

  get shifts() {
    return this.shiftForm.get('shifts') as FormArray;
  }
  addShift() {
    const shift = this.fb.group({
    

      date: ['', Validators.required],
      start_time: ['', Validators.required],
      end_time: ['', Validators.required],
      hourly_wage: ['', Validators.required],
      shift_place: ['', Validators.required],
      shift_name: ['', Validators.required],
      earnings: ['', Validators.required]
    

    })
    this.shifts.push(shift)
    // console.log(this.shifts)
  }
  
  deleteShift(i: number) {
    this.shifts.removeAt(i);
  }

  ngOnInit() {
  }
}




