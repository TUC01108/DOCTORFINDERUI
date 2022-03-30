import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Appointment } from '../models/appointment';

const appointmentURL = "http://localhost:5050/appointment"
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(public httpClient:HttpClient) { }

  // getting all the bills
  getAppointments() : Observable<Appointment []>  
  {
    return this.httpClient.get<Appointment []> (appointmentURL)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  // save a single appointment
  saveAppointment(appointment:Appointment) : Observable<Appointment> {
    return this.httpClient.post<Appointment> (appointmentURL,appointment,this.httpOptions);
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) 
  {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `REVError Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
