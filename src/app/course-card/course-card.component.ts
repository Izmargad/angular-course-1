import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {COURSES} from '../../db-data';
import {Course} from '../model/course';

@Component({
  // the html tag that the component belongs to
  selector: 'course-card', 
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

@Input()
course:Course;

@Output('courseSelected')
courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }
  onCourseViewed(){
    console.log("Card Compoment Event Triggered");

    this.courseEmitter.emit(this.course);
  }
}
