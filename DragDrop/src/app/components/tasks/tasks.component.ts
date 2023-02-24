import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskInterface } from 'src/app/task-interface';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  addForm!: FormGroup;
  
  todo: TaskInterface [] = [];

  inProgress: TaskInterface [] = [];

  done: TaskInterface [] = [];

  updateID!: any;

  editEnable: boolean = false;

  item: any;
  i: any;
  

  
  drop(event: CdkDragDrop<TaskInterface[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
        
      );
    }
  }
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      item : ['', Validators.required]
    })
  }
  addTask() {
    this.todo.push({
      description:this.addForm.value.item,
      done:false
    })
    this.addForm.reset();
  }

  onEdit(item: TaskInterface, i : number) {
    this.addForm.controls['item'].setValue(item.description);
    this.updateID = i;
    this.editEnable = true;
  }

  updateTask() {
    this.todo[this.updateID].description = this.addForm.value.item;
    this.todo[this.updateID].done = false;
    this.addForm.reset();
    this.updateID = undefined;
    this.editEnable = false;
  }

  deleteTask(i: number) {
    this.todo.splice(i,1)
  }

  deleteInProgressTask(i: number) {
    this.inProgress.splice(i,1)
  }
  deleteDoneTask(i: number) {
    this.done.splice(i,1)
  }
}
