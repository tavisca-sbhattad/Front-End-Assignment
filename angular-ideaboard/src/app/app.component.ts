import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ideaboard';
  sections:Array<Section> | undefined;
  count:number = 0;
  noteCount:number = 0;
    constructor(public dialog: MatDialog) {
    this.InitializeObject();
  }
    InitializeObject = () =>{
    if(!this.sections){
      this.sections = new Array<Section>();
    }
    let sections = this.sections;
    sections.push({
      title: "Title 1",
      notes: []
    });
    sections.push({
      title: "Title 2",
      notes: []
    });
    sections.push({
      title: "Title 3",
      notes: []
    });
    

  }

}
export interface Note {
  text: String;
  id:number;
}
export interface Section {
    title: String,
    notes: Array<Note>
}



