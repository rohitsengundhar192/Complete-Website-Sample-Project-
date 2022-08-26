import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogexampleComponent } from '../dialogexample/dialogexample.component';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent  {
  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogexampleComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

//constructor(public dialog:MatDialog) { }
//
//  openDialog(){
//    let dialogRef =  this.dialog.open(DialogexampleComponent,{data:{name:'rohit'}});
//
//    dialogRef.afterClosed().subscribe(XPathResult => {
//           console.log('Dialog result:${result}');
//    });
//
// }
