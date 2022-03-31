import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {
  patientForm!: FormGroup;
  successMessage!: string;

  constructor(public formBuilder:FormBuilder, public patioentService:PatientService,public router:Router) { }

  ngOnInit(): void {
  }

}
