import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
import { AnimationsNgIfComponent } from './animations-ng-if/animations-ng-if.component';



@NgModule({
  declarations: [
    TemplateOutletComponent,
    AnimationsNgIfComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateOutletComponent
  ]
})
export class ExamplesModule { }
