import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../service/api.service';


export class RealForm {
  constructor(
    public sno: number,
    public name1: string,
    public gender1: string,
    public date1: string,
    public country1: string
  ) {}
}

interface gender {
  value: string;
  viewValue: string;
}
interface country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-realform',
  templateUrl: './realform.component.html',
  styleUrls: ['./realform.component.scss'],
})
export class RealformComponent implements OnInit {
  realforms!: RealForm[];
  actionBtn: string = 'submit';
  editId: any = 0;
  DATA_ELEMENT: any;

  [x: string]: any;

  constructor(

    private _formBuilder: FormBuilder,
    private apiService: ApiService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getRealForm();
  }

  getRealForm() {
    this.httpClient
      .get<any>('http://localhost:3000/get-user-details')
      .subscribe((response) => {
        console.log(response);
        this.realforms = response;
      });
  }

  async putdetails(data: any, sno: number) {
    try {
      this.httpClient
        .delete<any>(
          `http://localhost:3000/update-user-details?sno=${sno}`,
          data
        )
        .subscribe((response) => {
          console.log(response);
          this.getRealForm();
        });
      // return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteUserDetails(sno: number) {
    try {
      this.httpClient
        .delete<any>(`http://localhost:3000/delete-user-details?sno=${sno}`)
        .subscribe((response) => {
          console.log(response);
          this.getRealForm();
        });
      // return data;
    } catch (error) {
      throw error;
    }
  }

  editUserDetails(realform: any) {
    this.actionBtn = 'Update';
    this.editId = realform.sno;
    this.firstFormGroup.controls['name1'].setValue(realform.name1);
    this.firstFormGroup.controls['gender1'].setValue(realform.gender1);
    this.firstFormGroup.controls['date1'].setValue(realform.date1);
    this.firstFormGroup.controls['country1'].setValue(realform.country1);
  }
  Updatelogin() {
    this.httpClient.put(`http://localhost:3000/update-user-details?sno=${this.editId}`,this.firstFormGroup.value).subscribe({
        next: (_res) => {
          alert("updated Sucessfully !");
          this.apiService.getUserDetails().subscribe((data: any) => {
            console.log(data);
            this.getRealForm();
          })
          this.firstFormGroup.reset();
        },
        error: () => {
          alert('error while updating!!!');
        },
      });
  }

  //validations
  countrys: country[] = [
    { value: 'Ind', viewValue: 'India' },
    { value: 'SL', viewValue: 'Srilanka' },
    { value: 'Fra', viewValue: 'France' },
  ];

  genders: gender[] = [
    { value: 'M', viewValue: 'Male' },
    { value: 'Fe', viewValue: 'Female' },
    { value: 'Ot', viewValue: 'Others' },
  ];

  firstFormGroup = this._formBuilder.group({
    name1: ['', Validators.required],
    gender1: ['', Validators.required],
    date1: ['', Validators.required],
    country1: ['', Validators.required],
  });

  get name1() {
    return this.firstFormGroup.get('name');
  }
  get gender1() {
    return this.firstFormGroup.get('gender');
  }
  get date1() {
    return this.firstFormGroup.get('date');
  }
  get country1() {
    return this.firstFormGroup.get('country');
  }

  firstformvalue: any;

  submitstatus!: boolean;
  //submit button
  submit() {
    this.firstformvalue = this.firstFormGroup.value;
    this.submitstatus = true;
    if (!this.editId) {
      if (this.firstFormGroup.valid) {
        this.apiService.postUserDetails(this.firstFormGroup.value).subscribe({
          next: (_res) => {
            alert('registered Sucessfully !');
            this.firstFormGroup.reset();
            this.getRealForm();
          },
          error: () => {
            alert('Not Registered Sucessfully');
          },
        });
      }
    } else {
      this.Updatelogin();
    }
  }
}
function data(_data: any) {
  throw new Error('Function not implemented.');
}
