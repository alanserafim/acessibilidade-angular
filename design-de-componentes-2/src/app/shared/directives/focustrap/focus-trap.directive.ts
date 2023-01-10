import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit {

  // @ts-ignore
  private firstFocusableElement: HTMLElement = null;
  // @ts-ignore
  private lastFocusableElement: HTMLElement = null;

  constructor(private elementRef: ElementRef<any>) { }

  ngAfterViewInit(): void {
    const focusableElements = this.elementRef
      .nativeElement
      .querySelectorAll(`
      [tabindex]:not([tabindex="-1"]),
      a[href]:not([disabled]),
      button:not([disabled]),
      textarea:not([disabled]),
      input:not([disabled]),
      select:not([disabled])`
      ) as Array<HTMLElement>;
    this.firstFocusableElement = focusableElements[0];
    this.lastFocusableElement = focusableElements[focusableElements.length -1];
    this.firstFocusableElement.focus();
  }

}
