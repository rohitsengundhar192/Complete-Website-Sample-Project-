import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) {}

  // constructor(public dialog: MatDialog) {}
  //openDialog() {
  //  const dialogRef = this.dialog.open(Audit1Component);
  //
  //  dialogRef.afterClosed().subscribe(result => {
  //    console.log(`Dialog result: ${result}`);
  //  });
  //}

  close() {
    if (this.breakpointObserver) {
      console.log('min-width: 960px <= absolute');
    } else {
      console.log('min-width: 960px > relative');
    }
  }

  heads: string = 'Template';

  table() {
    this.heads = 'Table';
  }
  step() {
    this.heads = 'Stepper';
  }
  tabs() {
    this.heads = 'Tabs';
  }
  file() {
    this.heads = 'File Upload';
  }
  dialogue() {
    this.heads = 'Dialogue';
  }
  reform() {
    this.heads = 'Form';
  }
  form() {
    this.heads = 'Address Form';
  }
  tel() {
    this.heads = 'Telephone';
  }
  audit() {
    this.heads = 'Audit Trail';
  }
  time() {
    this.heads = 'Time';
  }
  mul() {
    this.heads = 'Country';
  }
  test() {
    this.heads = 'Test';
  }
  dyn() {
    this.heads = 'Forms';
  }
  trip() {
    this.heads = 'Trip Booking';
  }
  ave() {
    this.heads = 'Average Performance';
  }


  sidenavClose() {
    if (this.sidenav.mode == 'side') {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
}
