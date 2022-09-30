import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { ApiService } from 'src/service/api.service';
import * as countryInfo from 'countrycitystatejson';
import { MatSnackBar } from '@angular/material/snack-bar';




interface country {
  value: string;
  viewValue: string;
}
export class RealForm {
  constructor(
    public id:string,
    public fn1: string,
    public ln1: string,
    public date1: string,
    public sex1: string,
    public des1: string,
    public add1: string,
    public phone1: string,
    public pass1: string,
    public ctryid: string
  ) {}
}
export interface User {
  name: string;
}


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  actionBtn: string = 'submit';
  countries:any[]=[];
  filteredOptions: Observable<User[]> | undefined;
  ctryid!: string;

  realforms!: RealForm[];

  editId: any = 0;

  actBtnInnerText!: string;
  update!: () => void;

    ngOnInit() {
      this.countries=countryInfo.getCountries()

      this.filteredOptions = this.country.controls['countrycontrol'].valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.countries.slice();
        }),
      );
     // this.getTableDetails(ctryid);
    }
    DATAELEMENT:any;
    displayFn(user: User): string {
      return user && user.name ? user.name : '';
    }

    private _filter(name: string): User[] {
      const filterValue = name.toLowerCase();

      return this.countries.filter(option => option.name.toLowerCase().includes(filterValue));
    }



  countrys: country[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'Others', viewValue: 'Others'},
  ];
  constructor(
    private _formBuilder: FormBuilder,
      private apiService: ApiService,
       private httpClient: HttpClient,
       private _snack: MatSnackBar
       ) {}

  firstFormGroup = this._formBuilder.group({
    fn1: ['', Validators.required],
    ln1: ['', Validators.required],
    date1: ['', Validators.required],
    sex1: ['', Validators.required],
    des1: ['', Validators.required],
    add1: ['', Validators.required],
    pass1: ['', Validators.required],
    phone1: ['', Validators.required],
  })
changecountryid:any;

changecountry(dataa:any){
  this.changecountryid=dataa.flagClass
  console.log(this.changecountryid)
}
country=new FormGroup({
  countrycontrol:new FormControl<string|User>('')
})


  get fn1(){
    return this.firstFormGroup.get('fn1');
  }
   get ln1(){
    return this.firstFormGroup.get('ln1');
  }

  get date1(){
    return this.firstFormGroup.get('date1');
  }
  get sex1(){
    return this.firstFormGroup.get('sex1');
  }
  get des1(){
    return this.firstFormGroup.get('des1');
  }
  get add1(){
    return this.firstFormGroup.get('add1');
  }
  get pass1(){
    return this.firstFormGroup.get('pass1');
  }
  get phone1(){
    return this.firstFormGroup.get('phone1');
  }

firstformvalue:any;

submitstatus!:boolean;

submit(){
  let countryflag:any={
    fn1:this.firstFormGroup.get('fn1')?.value,
    ln1:this.firstFormGroup.get('ln1')?.value,
    date1:this.firstFormGroup.get('date1')?.value,
    sex1:this.firstFormGroup.get('sex1')?.value,
    des1:this.firstFormGroup.get('des1')?.value,
    add1:this.firstFormGroup.get('add1')?.value,
    pass1:this.firstFormGroup.get('pass1')?.value,
    phone1:this.firstFormGroup.get('phone1')?.value,
    ctryid:this.changecountryid,

  }


  console.log(countryflag)
  this.firstformvalue=this.firstFormGroup.value;
  this.submitstatus=true;
  if(!this.editId){
    if (this.firstFormGroup.valid) {
      this.apiService.postUsersDetails(this.changecountryid,countryflag).subscribe({
        next: (_res) => {
          alert('registered Sucessfully !');
          this.firstFormGroup.reset();

        },
        error: () => {
          alert('Not Registered');
        },
      });
    }
  }

  else{
    this.updateTableDetails();
  }
}

countrysubmit(){
  let countryInfo:any=this.country.controls['countrycontrol'].value;
  let countryShortname:string=countryInfo.shortName;
   console.log(countryShortname)
   this.apiService.getTableDetails(countryShortname).subscribe(
    {
      next:(res)=>{
        this.DATAELEMENT=res
        console.log(res);

      },
      error:(rej)=>{
        console.log(rej);

      }
    }
   )
}


//second

secondFormGroup = this._formBuilder.group({
  phone2: ['', Validators.required],
  pass2: ['', Validators.required],

})

get phone2(){
  return this.secondFormGroup.get('phone2');
}
get pass2(){
  return this.secondFormGroup.get('pass2');
}

secondformvalue:any;
submitstatuss!:boolean;

sub(){
  let countryflag:any={
    phone2:this.secondFormGroup.get('phone2')?.value,
    pass2:this.secondFormGroup.get('pass2')?.value,
  }
  console.log(countryflag)
  this.secondformvalue=this.secondFormGroup.value;
  this.submitstatus=true;
  if (this.secondFormGroup.valid) {
    this.apiService.loginDetails(this.changecountryid,countryflag.phone2,countryflag.pass2).subscribe({
      next: (_res) => {
        alert('login Sucessfully !');
        this.secondFormGroup.reset();
      },
      error: () => {
        alert('login Un-Sucessfull');
      },
    });
  }
}

//Table

getTableDetails() {
  this.apiService.getTableDetails(this.ctryid)
    .subscribe((response) => {
      console.log(response);
      this.realforms = response;
    });
}


editUserDetails(realform: any) {

  this.actionBtn = 'Update';
  this.editId = realform.id;
  this.firstFormGroup.controls['fn1'].setValue(realform.fn1);
  this.firstFormGroup.controls['ln1'].setValue(realform.ln1);
  this.firstFormGroup.controls['date1'].setValue(realform.date1);
  this.firstFormGroup.controls['sex1'].setValue(realform.sex1);
  this.firstFormGroup.controls['des1'].setValue(realform.des1);
  this.firstFormGroup.controls['add1'].setValue(realform.add1);
  this.firstFormGroup.controls['phone1'].setValue(realform.phone1);
  this.firstFormGroup.controls['pass1'].setValue(realform.pass1);
  this.firstFormGroup.controls['ctryid'].setValue(realform.ctryid);

}

updateTableDetails()
{  let countryInfo:any=this.country.controls['countrycontrol'].value;
let countryShortname:string=countryInfo.shortName;

  let countryflag:any={
    fn1:this.firstFormGroup.get('fn1')?.value,
    ln1:this.firstFormGroup.get('ln1')?.value,
    date1:this.firstFormGroup.get('date1')?.value,
    sex1:this.firstFormGroup.get('sex1')?.value,
    des1:this.firstFormGroup.get('des1')?.value,
    add1:this.firstFormGroup.get('add1')?.value,
    pass1:this.firstFormGroup.get('pass1')?.value,
    phone1:this.firstFormGroup.get('phone1')?.value,
    ctryid:this.changecountryid,


  };
  console.log(this.ctryid);
   this.apiService.updateTableDetails(countryShortname,this.editId,countryflag).subscribe({
    next:(_res)=>{
      alert("updated Sucessfully !") ;
      this.countrysubmit();
      this.firstFormGroup.reset();
        },
    error:()=>{
      alert("Not updated ")
    }
   })
}


deleteTabledetails(row:any){
  let id:number=row.id;
  let ctryid:string=(row.ctryid).toLowerCase();

  this.apiService.deleteTableDetails(ctryid, id)
  .subscribe({
   next:()=>{
    //  this.getTableDetails()
     this.countrysubmit()
     this._snack.open('Delete successful ','done',{
      duration:2000
     })
    },
   error:()=>{
     alert("error while deleting")
   }
  })
 }

}





