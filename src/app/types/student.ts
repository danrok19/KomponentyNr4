import { Subject } from './subject';

export type Student = {
  name: string;
  surname: string;
  index_nr: number;
};

export class StudentClass {
  constructor(
    private name: string,
    private surname: string,
    private index_nr: number,
    private subjects: Subject[],
    private gradesAvg: number
  ) {}

  get Name(): string {
    return this.name;
  }

  set Name(name: string) {
    this.name = name;
  }

  get Surname(): string {
    return this.surname;
  }

  set Surname(surname: string) {
    this.surname = surname;
  }

  get Index_nr(): number {
    return this.index_nr;
  }

  set Index_nr(index_nr: number) {
    this.index_nr = index_nr;
  }
  get Subjects(): Subject[] {
    return this.subjects;
  }

  set Subjects(subjects: Subject[]) {
    this.subjects = subjects;
  }

  get GradesAvg(): number {
    this.calcAvg();
    return this.gradesAvg;
  }
  set GradesAvg(avg: number) {
    this.gradesAvg = avg;
  }
  calcAvg() {
    let sum = 0;
    this.Subjects.forEach((subject) => {
      sum += Number(subject.rate);
    });
    this.gradesAvg = sum / 4;
  }
}
