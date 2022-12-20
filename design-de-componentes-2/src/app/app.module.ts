import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplesModule } from './examples/examples.module';
import { ModalModule } from './shared/components/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    ExamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
