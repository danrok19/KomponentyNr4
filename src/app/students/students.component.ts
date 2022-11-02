import { Component, OnInit, Output } from '@angular/core';
import { Student, StudentClass } from '../../app/types/student';
import { WhichType } from '../student/student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: StudentClass[] = [];
  addStudentBtn!: boolean;
  constructor() {}

  ngOnInit() {
    console.log('Students');
    this.students[0] = new StudentClass(
      'Ala',
      'Makota',
      123485,
      [
        { name: 'matematyka', rate: 5 },
        { name: 'programowanie', rate: 4 },
        { name: 'JS', rate: 4.5 },
        { name: 'AIOK', rate: 5 },
      ],
      0
    );
    this.students[1] = new StudentClass(
      'Jan',
      'Kowlaski',
      2345,
      [
        { name: 'matematyka', rate: 3.5 },
        { name: 'programowanie', rate: 4 },
        { name: 'JS', rate: 5 },
        { name: 'AIOK', rate: 5 },
      ],
      0
    );
    this.students.push(
      new StudentClass(
        'Adrian',
        'Duda',
        156789,
        [
          { name: 'matematyka', rate: 5 },
          { name: 'programowanie', rate: 4 },
          { name: 'JS', rate: 4.5 },
          { name: 'AIOK', rate: 5 },
        ],
        0
      )
    );
  }

  doEdit(editedStudent: WhichType) {
    console.log(editedStudent);
    this.students[editedStudent.which] = editedStudent.student;
    //call edit method on server
  }

  onStudentAdded(newStudent: StudentClass) {
    this.students.push(newStudent);
  }

  deleteStudent(studentRef: StudentClass) {
    const studentToDeleteIndex = this.students.findIndex((student) => {
      return student.Index_nr === studentRef.Index_nr;
    });
    this.students.splice(studentToDeleteIndex, 1);
  }
  calcAllStudentsAvg():number {
    let sum = 0;
    this.students.forEach((student) => {
      sum += student.GradesAvg;
    });
    return sum / this.students.length;
  }
}
