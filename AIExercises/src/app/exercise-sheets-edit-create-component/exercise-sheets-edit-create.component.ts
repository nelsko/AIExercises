import { Component, OnInit, Inject, Optional  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { FormControl } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';

export interface UsersData {
  name: string;
  id: number;
}

@Component({
  templateUrl: './exercise-sheets-edit-create.component.html',
  styleUrls: ['./exercise-sheets-edit-create.component.scss']
})
export class ExerciseSheetEditCreateComponent implements OnInit {
  ngOnInit() {

  }

  action: string;
  local_data: any;
  solutionsForm = new FormControl();
  difficultiesForm = new FormControl();
  allSolutionTypes = ['Directly Validated', 'Indirectly validated'];
  difficulties = [
    { value: 'easy-0', viewValue: 'Easy' },
    { value: 'medium-1', viewValue: 'Medium' },
    { value: 'hard-2', viewValue: 'Hard' }
  ];
  solution = null;
  showTask = true;

  constructor(
    public dialogRef: MatDialogRef<ExerciseSheetEditCreateComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
    if (this.action == 'Update') {
      this.solution = 1;
      var copyThis = this;
      this.difficulties.forEach(function (elem) {
        if (elem.viewValue == copyThis.local_data.difficulty) {
          copyThis.local_data.difficulty = elem.value;
        }
      });
      this.local_data.difficulty = copyThis.local_data.difficulty;
    } else {
      this.showTask = false;
    }
  }

  doAction() {
    var copyThis = this;
    this.difficulties.forEach(function (elem) {
      if (elem.value == copyThis.local_data.difficulty) {
        copyThis.local_data.difficulty = elem.viewValue;
      }
    });
    this.local_data.difficulty = copyThis.local_data.difficulty;
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
  
}
