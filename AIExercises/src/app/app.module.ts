import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngMaterialModule } from './angular.material';
import { MatCardModule, MatTableModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { WorkSheetComponent } from './work-sheets-component/work-sheets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkSheetEditCreateComponent } from './work-sheets-edit-create-component/work-sheets-edit-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ExerciseSheetComponent } from './exercise-sheets-component/exercise-sheets.component';
import { ExerciseSheetEditCreateComponent } from './exercise-sheets-edit-create-component/exercise-sheets-edit-create.component';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WorkSheetComponent,
    WorkSheetEditCreateComponent,
    ExerciseSheetComponent,
    ExerciseSheetEditCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngMaterialModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  entryComponents: [
    WorkSheetEditCreateComponent,
    ExerciseSheetEditCreateComponent
  ],
  exports: [
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
