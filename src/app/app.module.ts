import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { DoctorAddComponent } from './components/doctor-add/doctor-add.component';
import { LoginComponent } from './components/login/login.component';
import { BillAddComponent } from './components/bill-add/bill-add.component';
import { BillInfoComponent } from './components/bill-info/bill-info.component';
import { BillListComponent } from './components/bill-list/bill-list.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentInfoComponent } from './components/appointment-info/appointment-info.component';
import { AppointmentAddComponent } from './components/appointment-add/appointment-add.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginInfoComponent } from './components/login-info/login-info.component';
import { LoginAddComponent } from './components/login-add/login-add.component';
import { LoginListComponent } from './components/login-list/login-list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { BillService } from './services/bill.service';
import { AppointmentService } from './services/appointment.service';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { RegisterComponent } from './components/register/register.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
import { PatientUpdatedComponent } from './components/patient-updated/patient-updated.component';
import { PatientService } from './services/patient.service';


@NgModule({
  declarations: [
    AppComponent,
    PatientAddComponent,
    PatientInfoComponent,
    PatientListComponent,
    DoctorListComponent,
    DoctorInfoComponent,
    DoctorAddComponent,
    LoginComponent,
    BillAddComponent,
    BillInfoComponent,
    BillListComponent,
    AppointmentListComponent,
    AppointmentInfoComponent,
    AppointmentAddComponent,
    LoginInfoComponent,
    LoginAddComponent,
    LoginListComponent,
    PatientHomeComponent,
    DoctorHomeComponent,
    RegisterComponent,
    DoctorUpdateComponent,
    PatientUpdatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginService,BillService,AppointmentService,PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
