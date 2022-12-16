import { DisableControlModule } from './shared/directives/disable-control/disable-control.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/yes-no-button-group/yes-no-button-group.module';
import { YesNoSemanticoModule } from './shared/yes-no-semantico/yes-no-semantico.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    FormsModule,
    DisableControlModule,
    YesNoSemanticoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
