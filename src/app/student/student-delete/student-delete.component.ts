import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css'],
})
export class StudentDeleteComponent implements OnInit {
  @Output() isDelete = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  cancel() {
    this.isDelete.emit(false);
  }
  delete() {
    this.isDelete.emit(true);
  }
}
