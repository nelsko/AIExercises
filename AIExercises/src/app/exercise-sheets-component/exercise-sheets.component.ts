import { Chart } from 'chart.js';

import { Component, ViewChild, OnInit } from '@angular/core';

import { MatDialog, MatTable } from '@angular/material';
import { WorkSheetEditCreateComponent } from '../work-sheets-edit-create-component/work-sheets-edit-create.component';
import { CLASS_NAME } from '@angular/flex-layout';
import { ExerciseSheetEditCreateComponent } from 'src/app/exercise-sheets-edit-create-component/exercise-sheets-edit-create.component';


export interface UsersData {
  id: number;
  name: string;
  score: number;
  solutionType: string[];
  difficulty: string;
  hint: string;
}

const ELEMENT_DATA: UsersData[] = [
  {
    id: 1, name: 'Math exercise 1',
    score: 10,
    solutionType: ['Directly Validated'],
    difficulty: 'Medium',
    hint: 'Test hint'
  },
  {
    id: 2, name: 'Math exercise 2',
    score: 12,
    solutionType: ['Indirectly validated'],
    difficulty: 'Hard',
    hint: 'Test hint'
  }
];

@Component({
  templateUrl: './exercise-sheets.component.html',
  styleUrls: ['./exercise-sheets.component.scss']
})
export class ExerciseSheetComponent implements OnInit {
  ngOnInit(){

  }

  counter: number = 3;
  displayedColumns: string[] = ['id', 'name', 'score', 'difficulty', 'action'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(public dialog: MatDialog) { }

  openDialog(action, obj) {
    obj.action = action;
    var dialogRefCopy = null;
    if (obj.action == 'Delete') {
      dialogRefCopy = this.dialog.open(ExerciseSheetEditCreateComponent, {
        height: '350px',
        width: '600px',
        data: obj
      });
    } else {
      dialogRefCopy = this.dialog.open(ExerciseSheetEditCreateComponent, {
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
      id: this.counter, name: obj.name,
      score: obj.score,
      solutionType: obj.solutionType,
      difficulty: obj.difficulty,
      hint: obj.hint,
    });
    this.table.renderRows();
    this.counter++;

  }

  updateRowData(obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id == obj.id) {
        value.name = obj.name;
        value.score = obj.score;
        value.solutionType = obj.solutionType;
        value.difficulty = obj.difficulty;
        value.hint = obj.hint;

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
