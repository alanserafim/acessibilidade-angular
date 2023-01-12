import { FocusBackModule } from './../../directives/focus-back/focus-back.module';
import { FocustrapModule } from './../../directives/focustrap/focustrap.module';
import { ModalService } from './services/modal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    FocustrapModule,
    FocusBackModule
  ],
  exports: [
    ModalComponent
  ],
  providers: [
    ModalService
  ]
})
export class ModalModule { }
