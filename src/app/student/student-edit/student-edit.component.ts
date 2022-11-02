import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { StudentClass } from 'src/app/types/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit {
  @ViewChild('studentName', { static: true }) studentName!: ElementRef;
  @ViewChild('studentSurname', { static: true }) studentSurname!: ElementRef;
  @ViewChild('studentIndex', { static: true }) studentIndex!: ElementRef;
  @ViewChild('studentMath', { static: true }) studentMath!: ElementRef;
  @ViewChild('studentProgramming', { static: true })
  studentProgramming!: ElementRef;
  @ViewChild('studentJS', { static: true }) studentJS!: ElementRef;
  @ViewChild('studentAIOK', { static: true }) studentAIOK!: ElementRef;

  @Output() onStudentEdit = new EventEmitter<StudentClass>();
  @Output() onCancelStudentEdit = new EventEmitter<void>();

  // studentForEdit: StudentClass = new StudentClass('', '', 0, [], 0);

  constructor() {}

  ngOnInit(): void {}

  editStudent() {

    this.onStudentEdit.emit(

      new StudentClass(
        this.studentName.nativeElement.value,
        this.studentSurname.nativeElement.value,
        this.studentIndex.nativeElement.value,
        [
          { name: 'matematyka', rate: this.studentMath.nativeElement.value },
          {
            name: 'programowanie',
            rate: this.studentProgramming.nativeElement.value,
          },
          { name: 'JS', rate: this.studentJS.nativeElement.value },
          { name: 'AIOK', rate: this.studentAIOK.nativeElement.value },
        ],
        0
      )

    );
  }
  cancelEditingStudent(){
    this.onCancelStudentEdit.emit();
  }
}
