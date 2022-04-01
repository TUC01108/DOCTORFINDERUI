import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-updated',
  templateUrl: './patient-updated.component.html',
  styleUrls: ['./patient-updated.component.css']
})

export class PatientUpdatedComponent implements OnInit {
    patientForm!: FormGroup;
    successMessage!: string;
    patient:Patient;
  
    constructor(public formBuilder:FormBuilder, public patientService:PatientService,public router:Router) { }
  
    ngOnInit(): void {
      this.patientForm = this.formBuilder.group({
        patientid : [''],
        name : [''],
      email : [''],
      password : [''],
      city : [''],
      symptom : ['']
      })
    }
    updatePatientInfo()
    {
      console.log(this.patientForm.value)
      this.patientService.updatePatient(this.patientForm.value.patientid , this.patientForm.value).subscribe((data:any) => {
        this.successMessage = 'Patient with patient id '+this.patientForm.value.patientid+' updated successfully';
        
      },err =>this.router.navigate(['patientInfo']) )
    }
  
  }