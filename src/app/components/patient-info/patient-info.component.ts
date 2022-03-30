import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  patients: Patient[] = [];
  public errorMessage!:string;

  constructor(public patientService: PatientService) {
    this.patientService.getPatients().subscribe((data:any) => {
      this.patients = data;
   })
   }

  ngOnInit(): void {
  }

}
