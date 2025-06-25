import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}
  booking(patient: any) {
    return this.http.post('http://localhost:2100/appointment', patient);
  }
}
