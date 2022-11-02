import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Student, StudentClass } from '../types/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  @ViewChild('newStudentName', { static: true }) studentName!: ElementRef;
  @ViewChild('newStudentSurname', { static: true }) studentSurname!: ElementRef;
  @ViewChild('newStudentIndex', { static: true }) studentIndex!: ElementRef;
  @ViewChild('newStudentMath',{ static: true }) studentMath!: ElementRef;
  @ViewChild('newStudentProgramming',{ static: true }) studentProgramming!: ElementRef;
  @ViewChild('newStudentJS',{ static: true }) studentJS!: ElementRef;
  @ViewChild('newStudentAIOK',{ static: true }) studentAIOK!: ElementRef;

  @Output() newStudent = new EventEmitter<StudentClass>();

  constructor() {}

  ngOnInit(): void {}

  onAddStudent() {
    if (
      this.studentName.nativeElement.value != '' &&
      this.studentSurname.nativeElement.value != '' &&
      this.studentIndex.nativeElement.value != ''
    ) {
      this.newStudent.emit(
        new StudentClass(
          this.studentName.nativeElement.value,
          this.studentSurname.nativeElement.value,
          this.studentIndex.nativeElement.value,
          [
            {
              name: 'matematyka',
              rate: this.studentMath.nativeElement.value,
            },
            {
              name: 'programowanie',
              rate: this.studentProgramming.nativeElement.value,
            },
            { name: 'JS', rate: this.studentJS.nativeElement.value },
            { name: 'AIOK', rate: this.studentJS.nativeElement.value },
          ],0
        )
      );
      this.studentName.nativeElement.value = '';
      this.studentSurname.nativeElement.value = '';
      this.studentIndex.nativeElement.value = '';
      this.studentMath.nativeElement.value = '';
      this.studentProgramming.nativeElement.value = '';
      this.studentJS.nativeElement.value = '';
      this.studentAIOK.nativeElement.value = '';
    }
  }
}
