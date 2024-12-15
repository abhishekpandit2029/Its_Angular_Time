import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedHeading]',
  standalone: true
})
export class RedHeadingDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = "red"
  }

}
