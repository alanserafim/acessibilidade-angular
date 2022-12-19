import { Injectable, TemplateRef } from '@angular/core';

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


//interfaces
export interface ModalConfig {
  templateRef: TemplateRef<any>;
  title: string;
}


//Classes
export class ModalRef {

  public close(): void {
    console.log('close called');

  }

}
