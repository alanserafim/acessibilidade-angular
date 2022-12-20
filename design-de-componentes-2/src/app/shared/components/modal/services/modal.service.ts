import { Injectable, TemplateRef } from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  //atributos

  //construtor
  constructor() { }


  //métodos
  public open(config : ModalConfig): ModalRef{
    console.log('open called');
    return new ModalRef();
  }

}



//Classes
export class ModalRef {

  public close(): void {
    console.log('close called');

  }

}
