import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPrintTitle]'
})
export class PrintTitleDirective {
  @Input() color!: string;
  @Input() sep!: string;

  constructor(private element: ElementRef) { }

  ngAfterViewInit(): void {
    //this.element.nativeElement.innerText = 'Date of birth: ' + outDate;
    console.log(this.element);
    this.element.nativeElement.style.color=this.color;
    this.element.nativeElement.innerText=this.element.nativeElement.innerText.replaceAll(' ',this.sep);
    //. = 'Date of birth: ' + outDate;
  }

}