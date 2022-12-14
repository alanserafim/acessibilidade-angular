import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-de-componentes';
  // public yesNoAnswer: string = 'no';
  public form: FormGroup;
  public form2: FormGroup

  constructor(formBuilder: FormBuilder){
    this.form = formBuilder.group({
      yesNoAnswer: [{
        value: 'no',
        disabled: false
      }]
    });
    this.form2 = formBuilder.group({
      yesNoAnswer: [{
        value: 'no',
        disabled: false
      }]
    });
  }

  public submit():void {
    console.log(this.form.value)
    console.log(this.form2.value)
  }

}
