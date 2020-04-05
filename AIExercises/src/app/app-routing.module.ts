import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkSheetComponent } from './work-sheets-component/work-sheets.component';
import { ExerciseSheetComponent } from './exercise-sheets-component/exercise-sheets.component';

const routes: Routes = [
  {
    path: 'stats',
    component: DashboardComponent
  },
  {
    path: 'worksheets',
    component: WorkSheetComponent
  },
  {
    path: 'exercisesheets',
    component: ExerciseSheetComponent
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo: '/dashboard'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
