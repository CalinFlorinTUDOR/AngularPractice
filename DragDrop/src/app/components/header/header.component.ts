import { Component, OnInit, Output,  EventEmitter} from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sideToggle = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    
  }
  OnToggle()
  {
    this.sideToggle.emit();
  }

}
