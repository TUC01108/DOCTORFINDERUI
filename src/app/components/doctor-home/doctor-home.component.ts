import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  patientForm!: FormGroup;
  successMessage!: string;
  patients: Patient[] = [];

  constructor(public formBuilder:FormBuilder, public patientService:PatientService,public router:Router) { }


  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      doctorAssigned : ['']
    })
  }

  displayDoctorHome()
  {
    console.log(this.patientForm.value)
    this.patientService.searchPatientByDoctorAssigned(this.patientForm.value).subscribe((data:any) => {
      this.successMessage = 'Patient with doctor assigned '+this.patientForm.value.doctorAssigned;
      
        this.patients = data;
      
    },err =>this.router.navigate(['doctorHome']) )
  }

}
