import { Component, HostBinding } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade';

import { ModalConfig } from './../interfaces/modal-config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]
})
export class ModalComponent {
  //atributos
  @HostBinding('@fade') fade = true;
  // @ts-ignore
 public config: ModalConfig;
}
