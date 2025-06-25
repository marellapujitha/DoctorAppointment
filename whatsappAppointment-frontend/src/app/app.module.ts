import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppointmentConfirmationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
