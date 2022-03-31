import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { Patient } from 'src/app/models/patient';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  patientForm!: FormGroup;
  successMessage!: string;
  public errorMessage!:string;
  patients: Patient[] = [];
  appointments: Appointment[] = [];

  constructor(public formBuilder:FormBuilder, public patientService:PatientService,public router:Router, public appointmentService: AppointmentService) { }


  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      doctorAssigned : ['']
    })

    this.appointmentService.getAppointments().subscribe((data:any) => {
      this.appointments = data;
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

  removeAppointment(appointmentid:number) {
    this.appointmentService.deleteAppointment(appointmentid).subscribe((data: any)=> 
    {
      this.successMessage = 'Appointment with appointment id '+appointmentid+' deleted successfully';
      
    }, err => {
      this.refreshAppointments()
    })
  }

  refreshAppointments() {
    this.appointmentService.getAppointments().subscribe((data:any) => 
    {
      this.appointments = data;
  },err => this.errorMessage = err)
  }

}
