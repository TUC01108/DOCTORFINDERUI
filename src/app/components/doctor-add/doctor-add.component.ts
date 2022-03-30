import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {
  doctorForm!: FormGroup;
  successMessage!: string;

  constructor(public formBuilder:FormBuilder, public doctorService:DoctorService,public router:Router) { }

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      name : ['',[Validators.required]],
      email : ['',[Validators.required]],
      password : ['',[Validators.required,Validators.minLength(4)]],
      specialty : ['',[Validators.required]],
      city : ['']
    })
  }
  displayDoctorInfo()
  {
    console.log(this.doctorForm.value)
    this.doctorService.saveDoctor(this.doctorForm.value).subscribe((data:any) => {
      this.successMessage = 'Doctor with doctor id '+this.doctorForm.value.doctorid+' saved successfully';
      
    },err =>this.router.navigate(['doctorInfo']) )
  }

}
