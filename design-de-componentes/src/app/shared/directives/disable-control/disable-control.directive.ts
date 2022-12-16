import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDisableControl]'
})
export class DisableControlDirective implements OnChanges {

  //propriedades
  @Input() appDisableControl = false;

  //Construtor
  constructor(private ngControl: NgControl) { }


  //Métodos
  public ngOnChanges(changes: SimpleChanges): void {
    if(changes['appDisableControl']){
      const action = this.appDisableControl
        ? 'disable'
        : 'enable';

        // @ts-ignore
      this.ngControl.control[action]();
    }
  }

}
