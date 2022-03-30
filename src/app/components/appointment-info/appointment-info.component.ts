import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-info',
  templateUrl: './appointment-info.component.html',
  styleUrls: ['./appointment-info.component.css']
})
export class AppointmentInfoComponent implements OnInit {

  appointments: Appointment[] = [];
  public errorMessage!:string;

  constructor(public appointmentService: AppointmentService) {
    this.appointmentService.getAppointments().subscribe((data:any) => {
      this.appointments = data;
    })
   }

  ngOnInit(): void {
  }

}
