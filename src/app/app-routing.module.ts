import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentAddComponent } from './components/appointment-add/appointment-add.component';
import { AppointmentInfoComponent } from './components/appointment-info/appointment-info.component';
import { BillAddComponent } from './components/bill-add/bill-add.component';
import { BillInfoComponent } from './components/bill-info/bill-info.component';
import { DoctorAddComponent } from './components/doctor-add/doctor-add.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { LoginInfoComponent } from './components/login-info/login-info.component';
import { LoginComponent } from './components/login/login.component';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';



const routes: Routes = [
  { path:'', redirectTo : 'loginInfo', pathMatch :'full'},
  { path: 'login', component : LoginComponent},
  { path:'loginInfo', component : LoginInfoComponent},
  { path: 'patientAdd', component : PatientAddComponent},
  { path: 'patientInfo', component : PatientInfoComponent},
  { path: 'doctorAdd', component : DoctorAddComponent},
  { path: 'doctorInfo', component : DoctorInfoComponent},
  { path: 'billAdd', component : BillAddComponent},
  { path: 'billInfo', component : BillInfoComponent},
  { path: 'appointmentAdd', component : AppointmentAddComponent},
  { path: 'appointmentInfo', component : AppointmentInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
