import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {
  doctors: Doctor[] = [];
  public errorMessage!:string;

  constructor(public doctorService: DoctorService) { 
    this.doctorService.getDoctors().subscribe((data:any) => {
      this.doctors = data;
   })
  }

  ngOnInit(): void {
  }

}
