import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';

import { ModalService } from './../../shared/components/modal/services/modal.service';


@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrls: ['./template-outlet.component.scss']
})
export class TemplateOutletComponent implements AfterViewInit{
  // @ts-ignore
@ViewChild('template1') public template1: TemplateRef<any>;
  // @ts-ignore
@ViewChild('template2') public template2: TemplateRef<any>;
  // @ts-ignore
public selectedTemplate: TemplateRef<any>;



constructor(private modalService: ModalService){

}
  ngAfterViewInit(): void {
    this.selectedTemplate = this.template1;
  }

  public show() : void {
    this.selectedTemplate = this.template2;
     }

}
