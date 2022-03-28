import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-bill-add',
  templateUrl: './bill-add.component.html',
  styleUrls: ['./bill-add.component.css']
})
export class BillAddComponent implements OnInit {

  billForm!: FormGroup;
  successMessage!: string;

  constructor(public formBuilder:FormBuilder, public billService:BillService,public router:Router) { }

  ngOnInit(): void {
    this.billForm = this.formBuilder.group({
      billid : [''],
      billAmount : [''],
      patientid : [''],
      doctorid : ['']
    })
  }

  displayBillInfo()
  {
    console.log(this.billForm.value)
    this.billService.saveBill(this.billForm.value).subscribe((data:any) => {
      this.successMessage = 'Bill with id '+this.billForm.value.billid+' saved successfully';
      
    },err =>this.router.navigate(['billInfo']) )
  }

}
