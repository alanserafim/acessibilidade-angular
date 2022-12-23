import { ModalService, ModalRef } from './shared/components/modal/services/modal.service';
import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //atributos
  // @ts-ignore
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'design-de-componentes-2';
  public firstName= 'Alan';
  // @ts-ignore
  public modalRef: ModalRef;

  //Construtor
  constructor(
    private modalService: ModalService
  ){}

  //Métodos
  public show() : void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }
}
