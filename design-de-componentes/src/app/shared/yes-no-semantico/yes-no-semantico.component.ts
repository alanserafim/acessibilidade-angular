import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../services/unique-id/unique-id.service';



enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}


@Component({
  selector: 'app-yes-no-semantico',
  templateUrl: './yes-no-semantico.component.html',
  styleUrls: ['./yes-no-semantico.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoSemanticoComponent)
    }
  ],
})
export class YesNoSemanticoComponent implements ControlValueAccessor {
  @Input() public label: string = '';
  @Input() public value: string = '';

  @Input() public disabled = false;
  @Output() public valueChange = new EventEmitter<string>();
  public onChange = (value: string) => {};
  public onTouched = () => {};

  public id: string = '';
  public options = YesNoButtonGroupOptions;

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
    this.disabled = isDisabled;
  }

}
