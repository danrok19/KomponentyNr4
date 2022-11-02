import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student, StudentClass } from '../../app/types/student';

export type WhichType = {
  student: StudentClass;
  which: number;
};
@Component({
  selector: 'print-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() studentForPrint!: StudentClass;
  @Input() isOdd!: boolean;
  @Input() title!: string;
  @Input() which!: number;
  @Input() allStudentsAvg!: number; //nowe
  clicked: number = -1;
  studentForEdit: StudentClass = new StudentClass('', '', 0, [], 0);
  studentToDelete: number = -1; //NOWE
  show: number = -1; //NOWE
  sholarship: number = -1; //NOWE

  @Output() doEditInParent: EventEmitter<WhichType> = new EventEmitter();
  @Output() doDeleteInParent = new EventEmitter<void>(); //NOWE

  constructor() {}

  ngOnInit() {}

  clickOnStudent(which: number): void {
    this.studentForEdit.Name = this.studentForPrint.Name;
    this.studentForEdit.Surname = this.studentForPrint.Surname;
    this.studentForEdit.Index_nr = this.studentForPrint.Index_nr;
    this.clicked = which;
  }

  hide(student: StudentClass): void {
    if (this.studentForEdit.Name.length > 0) {
      // this.studentForPrint.Name=this.studentForEdit.Name;
      // this.studentForPrint.Surname=this.studentForEdit.Surname;
      // this.studentForPrint.Index_nr=this.studentForEdit.Index_nr;
      let tempStudent: WhichType = { student, which: this.which };
      // tempStudent.student=this.studentForEdit;
      // tempStudent.which=this.clicked;
      this.doEditInParent.emit(tempStudent);
      this.clicked = -1;
    }
  }
  cancelEditing() {
    this.clicked = -1;
  }
  deleteWhichStudent() {
    this.studentToDelete = this.which;
  }
  isDelete(e: boolean) {
    if (!e) {
      this.studentToDelete = -1;
    } else {
      this.doDeleteInParent.emit();
    }
  }

  showSubjects() {
    this.show = this.which;
  }

  calcSholarship() {
    if (this.studentForPrint.GradesAvg > this.allStudentsAvg) {
      this.sholarship = this.studentForPrint.GradesAvg * 200;
    } else {
      this.sholarship = 0;
    }
  }
}
