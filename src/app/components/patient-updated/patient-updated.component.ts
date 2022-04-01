import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientProfile } from 'src/app/models/patientProfile';
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
        name : [''],
        age : [''],
        gender : [''],
        dob : [''],
        height : [''],
        weight : ['']
      })
    }
    updatePatientInfo()
    {
      console.log()
      this.patientService.updatePatient(this.patientForm.value.patientid , this.patient).subscribe((data:any) => {
        this.successMessage = 'Patient with patient id '+this.patientForm.value.patientid+' updated successfully';
        
      },err =>this.router.navigate(['patientInfo']) )
    }
  
  }