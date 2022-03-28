import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent implements OnInit {

  appointmentForm!: FormGroup;
  successMessage!: string;

  constructor(public formBuilder:FormBuilder, public loginService:LoginService,public router:Router) { }


  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      appointmentid : [''],
      date : ['',[Validators.required]],
      symptom : ['',],
      patientid : [''],
      doctorid : ['']
    })
  }

  displayAppointmentInfo()
  {
    console.log(this.appointmentForm.value)
    this.loginService.saveLogin(this.appointmentForm.value).subscribe((data:any) => {
      this.successMessage = 'Appointment with id '+this.appointmentForm.value.loginid+' saved successfully';
      
    },err =>this.router.navigate(['appointmentInfo']) )
  }

}
