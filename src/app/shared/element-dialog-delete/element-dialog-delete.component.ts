import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/views/home/home.component';

@Component({
  selector: 'app-element-dialog-delete',
  templateUrl: './element-dialog-delete.component.html',
  styleUrls: ['./element-dialog-delete.component.scss']
})
export class ElementDialogDeleteComponent implements OnInit {
  element!: PeriodicElement;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogDeleteComponent>,) { }

  ngOnInit(): void {

  }
}
