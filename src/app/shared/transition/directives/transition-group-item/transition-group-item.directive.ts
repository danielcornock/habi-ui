import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[habi-transition-group-item]'
})
export class TransitionGroupItemDirective {
  prevPos: any;

  newPos: any;

  el: HTMLElement;

  moved: boolean;

  moveCallback: any;

  constructor(elRef: ElementRef) {
    this.el = elRef.nativeElement;
  }
}
