import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
