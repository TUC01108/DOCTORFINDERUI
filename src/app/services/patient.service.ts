import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';
const patientURL = "http://localhost:5050/patient"
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(public httpClient:HttpClient) { }

  // getting all the patients
  getPatients() : Observable<Patient []>  
  {
    return this.httpClient.get<Patient []> (patientURL)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  // save a single patient
  savePatient(patient:Patient) : Observable<Patient> {
    return this.httpClient.post<Patient> (patientURL,patient,this.httpOptions);
  }

  searchPatientByDoctorAssigned(patient:Patient) : Observable<Patient []>
  {
    return this.httpClient.get<Patient []> (`${patientURL}/getPatientByDoctorAssigned/${patient.doctorAssigned}`);
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