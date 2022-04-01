import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.css']
})
export class DoctorUpdateComponent implements OnInit {
  doctorUpdateForm!: FormGroup;
  successMessage!: string;
  doctor:Doctor;

  constructor(public formBuilder:FormBuilder, public doctorService:DoctorService,public router:Router) { }

  ngOnInit(): void {
    this.doctorUpdateForm = this.formBuilder.group({
      doctorid : [''],
      name : [''],
      email : [''],
      password : [''],
      specialty : [''],
      city : ['']
    })
  }
  updateDoctorInfo()
  {
    console.log(this.doctorUpdateForm.value)
    this.doctorService.updateDoctor(this.doctorUpdateForm.value.doctorid , this.doctorUpdateForm.value).subscribe((data:any) => {
      this.successMessage = 'Doctor with doctor id '+this.doctorUpdateForm.value.doctorid+' updated successfully';
      
    },err =>this.router.navigate(['doctorInfo']) )
  }

}