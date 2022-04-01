import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Doctor } from '../models/doctor';

const doctorURL = "http://localhost:5050/doctor"
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(public httpClient:HttpClient) { }

  // getting all the doctors
  getDoctors() : Observable<Doctor []>  
  {
    return this.httpClient.get<Doctor []> (doctorURL)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  // save a single doctor
  saveDoctor(doctor:Doctor) : Observable<Doctor> {
    return this.httpClient.post<Doctor> (doctorURL,doctor,this.httpOptions);
  }

   //Update Doctor
   updateDoctor(doctorid:number,doctor:Doctor): Observable<Doctor> {
    return this.httpClient.put<Doctor>(`${doctorURL}/${doctorid}`,doctor,this.httpOptions)
 
  }

  searchDoctorBySpecialty(doctor:Doctor) : Observable<Doctor []>
  {
    return this.httpClient.get<Doctor []> (`${doctorURL}/searchDoctorBySpecialty/${doctor.specialty}`);
  }

  searchDoctorById(doctor:Doctor): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${doctorURL}/${doctor.doctorid}`);
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
