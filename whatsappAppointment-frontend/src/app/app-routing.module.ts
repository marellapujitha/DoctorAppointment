import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';

const routes: Routes = [
  {path:'',component:AppointmentFormComponent},
  {path: 'confirmation', component:AppointmentConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
