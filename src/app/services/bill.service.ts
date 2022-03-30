import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Bill } from '../models/bill';

const billURL = "http://localhost:5050/bill"
@Injectable({
  providedIn: 'root'
})
export class BillService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(public httpClient:HttpClient) { }

  // getting all the bills
  getBills() : Observable<Bill []>  
  {
    return this.httpClient.get<Bill []> (billURL)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  // save a single bill
  saveBill(bill:Bill) : Observable<Bill> {
    return this.httpClient.post<Bill> (billURL,bill,this.httpOptions);
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
