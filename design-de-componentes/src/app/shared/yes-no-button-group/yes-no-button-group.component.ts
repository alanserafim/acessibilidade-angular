import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { UniqueIdService } from './../services/unique-id/unique-id.service';

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ],
})
export class YesNoButtonGroupComponent implements ControlValueAccessor {
  @Input() public value: string = '';
  @Output() public valueChange = new EventEmitter<string>();
  @Input() public label: string = '';

  public id: string = '';
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor(
    uniqueIdService: UniqueIdService
  ) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix("yes-no-button-group");
  }

  public activate(value: string): void {
    this.writeValue(value);
  }

  //Métodos da interface ControlValueAccessor para integrar o componente com reactive forms
  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {

  }


}
