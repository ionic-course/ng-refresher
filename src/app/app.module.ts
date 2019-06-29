import { PersonInputComponent } from './persons/person-input.component';
import { PersonsComponent } from './persons/persons.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, PersonsComponent, PersonInputComponent
  ],
  imports: [
    BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
