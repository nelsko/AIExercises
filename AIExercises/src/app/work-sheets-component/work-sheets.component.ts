import { Chart } from 'chart.js';

import { Component, ViewChild, OnInit } from '@angular/core';

import { MatDialog, MatTable } from '@angular/material';
import { WorkSheetEditCreateComponent } from '../work-sheets-edit-create-component/work-sheets-edit-create.component';
import { CLASS_NAME } from '@angular/flex-layout';


export interface UsersData {
  id: number;
  name: string;
  test: boolean;
  homework: boolean;
  allowedTime: number;
  easyProblems: string[];
  mediumProblems: string[];
  hardProblems: string[];
  easyProblemsPerWorkSheet: number;
  mediumProblemsPerWorkSheet: number;
  hardProblemsPerWorkSheet: number;
}

const ELEMENT_DATA: UsersData[] = [
  {
    id: 1, name: 'Math test', test: true, homework: false, allowedTime: 45,
    easyProblems: ['Addition', 'Subtraction', 'Multiplication' ],
    mediumProblems: ['Square Root Operation' ],
    hardProblems: [ 'Integrals' ],
    easyProblemsPerWorkSheet: 1,
    mediumProblemsPerWorkSheet: 1,
    hardProblemsPerWorkSheet: 1
  },
  {
    id: 2, name: 'Math Homework', test: false, homework: true, allowedTime: null,
    easyProblems: ['Addition', 'Subtraction', 'Division' ],
    mediumProblems: ['Factorial', 'Exponentiation'],
    hardProblems: [ 'Polynomial equation' ],
    easyProblemsPerWorkSheet: 2,
    mediumProblemsPerWorkSheet: 2,
    hardProblemsPerWorkSheet: 1
  }
];

@Component({
  templateUrl: './work-sheets.component.html',
  styleUrls: ['./work-sheets.component.scss']
})
export class WorkSheetComponent implements OnInit {
  ngOnInit(){

  }

  counter: number = 3;
  displayedColumns: string[] = ['id', 'name','action'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(public dialog: MatDialog) { }

  openDialog(action, obj) {
    obj.action = action;
    var dialogRefCopy = null;
    if (obj.action == 'Delete') {
      dialogRefCopy = this.dialog.open(WorkSheetEditCreateComponent, {
        height: '350px',
        width: '600px',
        data: obj
      });
    } else {
      dialogRefCopy = this.dialog.open(WorkSheetEditCreateComponent, {
        height: '650px',
        width: '600px',
        data: obj
      });
    }
    const dialogRef = dialogRefCopy;

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(obj) {
    var d = new Date();
    this.dataSource.push({
      id: this.counter, name: obj.name, test: obj.test, homework: obj.homework, allowedTime: obj.allowedTime,
      easyProblems: obj.easyProblems,
      mediumProblems: obj.mediumProblems,
      hardProblems: obj.hardProblems,
      easyProblemsPerWorkSheet: obj.easyProblemsPerWorkSheet,
      mediumProblemsPerWorkSheet: obj.mediumProblemsPerWorkSheet,
      hardProblemsPerWorkSheet: obj.hardProblemsPerWorkSheet
    });
    this.table.renderRows();
    this.counter++;

  }

  updateRowData(obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id == obj.id) {
        value.name = obj.name;
        value.test = obj.test;
        value.homework = obj.homework;
        value.allowedTime = obj.allowedTime;
        value.easyProblems = obj.easyProblems;
        value.mediumProblems = obj.mediumProblems;
        value.hardProblems = obj.hardProblems;
        value.easyProblemsPerWorkSheet = obj.easyProblemsPerWorkSheet;
        value.mediumProblemsPerWorkSheet = obj.mediumProblemsPerWorkSheet;
        value.hardProblemsPerWorkSheet = obj.hardProblemsPerWorkSheet;
      }
      return true;
    });
  }

  deleteRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }


}
