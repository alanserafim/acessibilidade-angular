import { Component } from '@angular/core';

import { ModalConfig } from './../interfaces/modal-config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  //atributos
  // @ts-ignore
 public config: ModalConfig;
}
