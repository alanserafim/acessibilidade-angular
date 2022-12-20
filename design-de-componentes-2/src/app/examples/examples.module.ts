import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';



@NgModule({
  declarations: [
    TemplateOutletComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateOutletComponent
  ]
})
export class ExamplesModule { }
