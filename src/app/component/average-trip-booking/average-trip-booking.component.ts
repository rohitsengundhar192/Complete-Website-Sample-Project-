import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/service/api.service';

export class RealForm {
  constructor(
    public racustomer_id: string,
    public raCustomer_name: string,
    public raUsername: string,
    public raDate: string,
    public raRating: string
  ) {}
}

@Component({
  selector: 'app-average-trip-booking',
  templateUrl: './average-trip-booking.component.html',
  styleUrls: ['./average-trip-booking.component.scss'],
})
export class AverageTripBookingComponent implements OnInit {
  realforms5!: RealForm[];
  guideid: any;

  datefil(data: any) {
    this.guideid = data;
    console.log(data);

    console.log(this.guideid);
  }
  idgroup = this._formBuilder.group({
    id: ['', Validators.required],
  });
  get id() {
    return this.idgroup.get('id');
  }
  constructor(
    private _formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  firstformvalue: any;

  submitstatus!: boolean;

  submit(data: any) {
    this.apiService.getAverageId(data.id).subscribe((response) => {
      console.log(response);
      this.realforms5 = response;
      this.firstformvalue = this.idgroup.value;
      this.submitstatus = true;
    });
  }

  ngOnInit(): void {}
}
