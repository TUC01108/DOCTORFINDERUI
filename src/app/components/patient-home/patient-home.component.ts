import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {
  patientForm!: FormGroup;
  successMessage!: string;
  doctorForm!: FormGroup;
  public errorMessage!:string;
  doctors: Doctor[] = [];

  constructor(public formBuilder:FormBuilder, public doctorService:DoctorService,public router:Router) { }

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      specialty : ['']
    })

  }

  displayPatientHome()
  {
    console.log(this.doctorForm.value)
    this.doctorService.searchDoctorBySpecialty(this.doctorForm.value).subscribe((data:any) => {
      this.successMessage = 'Doctor with specialty '+this.doctorForm.value.specialty;
      
        this.doctors = data;
        
        
      
    },err =>this.router.navigate(['doctorHome']) )
    
  }

}