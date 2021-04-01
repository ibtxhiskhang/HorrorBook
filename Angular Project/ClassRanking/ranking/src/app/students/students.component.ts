import { Component, OnInit } from '@angular/core';
import { Student } from '../students';
import { STUDENTS } from '../mock-students';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
 student = STUDENTS

 

  constructor() { }

  ngOnInit(): void {
  }

}
