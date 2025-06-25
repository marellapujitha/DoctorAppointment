import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  standalone: false,
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css',
})
export class AppointmentFormComponent {
  today: String;
  availableSlots = [
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
  ];

  appontmentForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private ser: AppointmentService,
    private router: Router
  ) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    this.today = `${year}-${month}-${day}`;
    this.appontmentForm = fb.group({
      name: ['', Validators.required],
      numb: ['', Validators.required],
      pdate: ['', Validators.required],
      ptime: ['', Validators.required],
    });
  }

  msg: any;

  bookAppontment() {
    this.ser.booking(this.appontmentForm.value).subscribe({
      next: (res) => {
        this.msg = res;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: this.msg.status,
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/confirmation'], {
          state: this.appontmentForm.value,
        });
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 409) {
          // Show double booking error message from backend
          alert(
            error.error.message ||
              'This time slot is already booked. Please choose another.'
          );
        } else {
          // Generic error message
          alert(
            'Something went wrong. Please try again later or enter all mandatory Details'
          );
        }
      },
    });
  }
}
