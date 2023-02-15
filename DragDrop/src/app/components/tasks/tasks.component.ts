import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep', 'Buy milk'];

  inProgress = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  done = [];

  doneList: any;
  todoList: any;
  inProgressList: any;
  $event?: string;

  drop(event: CdkDragDrop<string[]>) {
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
  constructor() { }

  ngOnInit(): void {
  }

}
