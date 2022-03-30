import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/bill';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-bill-info',
  templateUrl: './bill-info.component.html',
  styleUrls: ['./bill-info.component.css']
})
export class BillInfoComponent implements OnInit {

  bills: Bill[] = [];
  public errorMessage!:string;

  constructor(public billService: BillService) {
    this.billService.getBills().subscribe((data:any) => {
      this.bills = data;
    })
   }

  ngOnInit(): void {
  }

}
