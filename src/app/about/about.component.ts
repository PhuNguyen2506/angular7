import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatFormFieldControl} from '@angular/material';
export interface DialogData{
	animal: string;
  	name: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  animal: string;
  name: string;
  ngOnInit() {
  }

  openDialog():void{
  	const dialogRef = this.dialog.open(dialogDemo, {
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}


@Component({
	selector: 'dialogDemo',
	templateUrl:'./dialogDemo.component.html',
})

export class dialogDemo{
	constructor(
    public dialogRef: MatDialogRef<dialogDemo>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
