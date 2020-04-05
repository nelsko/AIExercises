import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkSheetComponent } from './work-sheets-component/work-sheets.component';

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
    path: '',
    pathMatch:'full',
    redirectTo: '/stats'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
