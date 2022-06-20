import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';
import { ElementDialogDeleteComponent } from 'src/app/shared/element-dialog-delete/element-dialog-delete.component';
import { ElementDialogEditComponent } from 'src/app/shared/element-dialog-edit/element-dialog-edit.component';
export interface PeriodicElement {
  cont: number;
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

var id: number = 1;
var ct: number = 1;

const ELEMENT_DATA: PeriodicElement[] =
  [
    //{ cont: ct++, position: id++, name: 'Hydrogen', weight: "1.0079", symbol: 'H' },
    //{ cont: ct++, position: id++, name: 'Helium', weight: '4.0026', symbol: 'He' },
    //{ cont: ct++, position: id++, name: 'Lithium', weight: "6.941", symbol: 'Li' },
    //{ cont: ct++, position: id++, name: 'Beryllium', weight: "9.0122", symbol: 'Be' },
    //{ cont: ct++, position: id++, name: 'Boron', weight: "10.811", symbol: 'B' },
    //   { position: id++, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    //   { position: id++, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    //   { position: id++, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    //   { position: id++, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    //   { position: id++, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['cont', 'name', 'weight', 'symbol', 'action'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  //janela de add
  openDialog(element: PeriodicElement | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element = {
        cont: ct,
        position: id,
        name: '',
        weight: '',
        symbol: ''
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result !== null) {
        if (result.name != "" && result.weight != "" && result.symbol != "") {
          console.log('creat')
          this.dataSource.push(result);
          id++;
          ct++;
          this.table.renderRows();
        } else {
          alert("Todos os campos devem ser preenxidos")
        }
      }
    });
  }

  //janela edit
  openDialogEdit(element: PeriodicElement): void {
    const dialogRef = this.dialog.open(ElementDialogEditComponent, {
      width: '250px',
      data: element = {
        cont: element.cont,
        position: element.position,
        name: element.name,
        weight: element.weight,
        symbol: element.symbol
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        if (result.name != "" && result.weight != "" && result.symbol != "") {
          console.log('edit')
          this.dataSource[result.position - 1] = result;
          this.table.renderRows();
        } else {
          alert("Todos os campos devem ser preenxidos")
        }
      }
    }
    );
  }

  //janela de confirmar delete
  openDialogDelete(element: PeriodicElement): void {
    const dialogRef = this.dialog.open(ElementDialogDeleteComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === null) {
        if (this.dataSource[element.position] === undefined) {
          console.log("deleteUltimo")
          this.dataSource = this.dataSource.filter(p => p.cont !== element.cont);
          id--;
        } else {
          var c: number = 0
          while (1) {
            if (this.dataSource[element.position + c] !== undefined) {
              this.dataSource[element.position + c].position--;
              c++;
            } else {
              id--;
              c = 0;
              console.log("delete")
              this.dataSource = this.dataSource.filter(p => p.cont !== element.cont);
              break;
            }
          }
        }
        this.table.renderRows();
      }
    });
  }
}