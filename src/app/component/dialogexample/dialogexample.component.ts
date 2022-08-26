import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialogexample',
  templateUrl: './dialogexample.component.html',
  styleUrls: ['./dialogexample.component.scss']
})
export class DialogexampleComponent implements OnInit {

//  constructor(@Inject(MAT_DIALOG_DATA) public data:any ) { }
constructor(
  public dialogRef:MatDialogRef<DialogexampleComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData,
) {}

onNoClick(): void {
  this.dialogRef.close();
}

  ngOnInit(): void {
  }

}
