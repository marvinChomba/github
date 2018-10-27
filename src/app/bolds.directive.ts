import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldsDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.fontWeight = "bold";
  }

}
