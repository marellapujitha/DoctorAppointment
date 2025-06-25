import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-confirmation',
  templateUrl: './appointment-confirmation.component.html',
  styleUrls: ['./appointment-confirmation.component.css']
})
export class AppointmentConfirmationComponent implements OnInit {

  appointmentData: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Access passed state data
    this.appointmentData = history.state;
    if (!this.appointmentData.name) {
      // No data passed, redirect back to form (optional)
      this.router.navigateByUrl('')
      console.log("no data")
    }
  }
}
