import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy{
  //@ts-ignore
  public lastFocusedElement: Element

  constructor() { }

  public ngOnInit(): void {
    //@ts-ignore
    this.lastFocusedElement = document.activeElement;
  }

  ngOnDestroy(): void {
   if (this.lastFocusedElement){
    (this.lastFocusedElement as HTMLElement).focus();
   }
  }

}
