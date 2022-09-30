import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export class RealForm {
  constructor(
    public date: string,
    public no_active_groups: string,
    public no_of_day_groups: string,
    public no_of_day_and_night: string,
    public no_male: string,
    public no_female: string,
    public no_total: string,
    public activity_id: string,
    public education_institute_name: string,
    public male: string,
    public female: string,
    public totals: string,
    public head_name: string,
    public customer_id: string,
    public volunteer: string,
    public guide_id: string,
    public guideactivity_id: string,
    public guidemale: string,
    public guidefemale: string,
    public guidetotals: string,
    public guide_details: string,
    public guideeducation_institute_name: string
  ) {}
}

export interface User {
  name: string;
}

@Component({
  selector: 'app-trip-booking',
  templateUrl: './trip-booking.component.html',
  styleUrls: ['./trip-booking.component.scss'],
})
export class TripBookingComponent implements OnInit {
  DATAELEMENT: any;
  realforms!: RealForm[];
  realforms1!: RealForm[];
  realforms2!: RealForm[];
  realforms4!: RealForm[];
  date: any;
  datees: any;

  constructor(private apiService: ApiService) {}

  radiobut(data: any) {
    this.date = data;
    console.log(this.date);
  }
  datefil(data: any) {
    this.datees = data;
    console.log(this.datees);
  }

  getTripDetails() {
    this.apiService.getTripDetails().subscribe((response) => {
      console.log(response);
      this.realforms = response;
    });
  }
  getTripID() {
    this.apiService.getTripId(this.date).subscribe((response) => {
      console.log(response);
      this.realforms1 = response;
    });
  }
  getallTripDetails() {
    this.apiService.getallTripDetails().subscribe((response) => {
      console.log(response);
      this.realforms2 = response;
    });
  }

  getGuideTripID() {
    this.apiService.getGuideTripId(this.datees).subscribe((response) => {
      console.log(response);
      this.realforms4 = response;
    });
  }

  //Auto-complete

  myControl = new FormControl<string | User>('');
  options: User[] = [{ name: '2022-09-26' }, { name: '2022-09-27' }];
  filteredOptions!: Observable<User[]>;

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  ngOnInit() {
    this.getTripDetails();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }
}
