import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { PrintTitleDirective } from './print-title-directive.directive';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    PrintTitleDirective,
    AddStudentComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
