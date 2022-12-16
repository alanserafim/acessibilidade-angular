import { KeyboardManagerModule } from './../directives/keyboard-manager/keyboard-manager.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoSemanticoComponent } from './yes-no-semantico.component';



@NgModule({
  declarations: [
    YesNoSemanticoComponent
  ],
  imports: [
    CommonModule,
    KeyboardManagerModule
  ],
  exports:[
    YesNoSemanticoComponent
  ]
})
export class YesNoSemanticoModule { }
