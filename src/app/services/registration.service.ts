import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const loginURL = "http://localhost:8080/registration"
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(public httpClient:HttpClient) { }
}
