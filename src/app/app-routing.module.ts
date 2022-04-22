import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentAddComponent } from './components/appointment-add/appointment-add.component';
import { AppointmentInfoComponent } from './components/appointment-info/appointment-info.component';
import { BillAddComponent } from './components/bill-add/bill-add.component';
import { BillInfoComponent } from './components/bill-info/bill-info.component';
import { DoctorAddComponent } from './components/doctor-add/doctor-add.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { LoginAddComponent } from './components/login-add/login-add.component';
import { LoginInfoComponent } from './components/login-info/login-info.component';
import { LoginComponent } from './components/login/login.component';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { PatientUpdatedComponent } from './components/patient-updated/patient-updated.component';
import { RegisterComponent } from './components/register/register.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
//import { CanActivateAuthGuard } from './services/auth.service';




const routes: Routes = [
  { path:'', redirectTo : 'login', pathMatch :'full'},
  { path: 'login', component : LoginComponent},
  { path: 'loginAdd', component : LoginAddComponent},
  { path:'loginInfo', component : LoginInfoComponent},
  { path: 'patientAdd', component : PatientAddComponent},
  { path: 'patientInfo', component : PatientInfoComponent},
  { path: 'doctorAdd', component : DoctorAddComponent},
  { path: 'doctorInfo', component : DoctorInfoComponent},
  { path: 'billAdd', component : BillAddComponent},
  { path: 'billInfo', component : BillInfoComponent},
  { path: 'appointmentAdd', component : AppointmentAddComponent},
  { path: 'appointmentInfo', component : AppointmentInfoComponent},
  { path: 'patientHome', component : PatientHomeComponent}, //, canActivate: [CanActivateAuthGuard]},
  { path: 'doctorHome', component : DoctorHomeComponent},
  { path: 'register', component : RegisterComponent},
  { path: 'doctorUpdate', component : DoctorUpdateComponent},
  { path: 'patientUpdated', component : PatientUpdatedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
