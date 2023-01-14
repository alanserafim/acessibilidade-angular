import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';
import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //atributos
  // @ts-ignore
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'design-de-componentes-2';
  public firstName = 'Alan';
  // @ts-ignore
  public modalRef: ModalRef;
  public info = false;
  // @ts-ignore
  public form: FormGroup;


  //Construtor
  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ){}



  //Métodos
  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Alan', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false]
    })
  }

  public show() : void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return
    }
    console.log(this.form.value);
    this.modalRef.close();
  }
}
