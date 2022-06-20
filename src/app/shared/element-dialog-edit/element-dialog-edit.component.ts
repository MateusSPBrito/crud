import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/views/home/home.component';

@Component({
  selector: 'app-element-dialog-edit',
  templateUrl: './element-dialog-edit.component.html',
  styleUrls: ['./element-dialog-edit.component.scss']
})

export class ElementDialogEditComponent implements OnInit {
  element!: PeriodicElement;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogEditComponent>,
  ) { }

  //define se vai ser creat ou edit
  ngOnInit(): void {
   
    }
}
