import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { ShowresultComponent } from './showresult/showresult.component';
import { authguardGuard } from '../guard/authguard.guard';

/**
 * Student feature module routes
 * All routes are protected with auth guard and require 'student' role
 */
export const routes: Routes = [
  {
    // Student dashboard route
    path: 'studentdashboard',
    component: StudentdashboardComponent,
    canActivate: [authguardGuard],
    data: { role: 'student' }
  },
  {
    // Student result display route
    path: 'showresult',
    component: ShowresultComponent,
    canActivate: [authguardGuard],
    data: { role: 'student' }
  },
];

/**
 * Student feature module
 * Contains student-specific components and routing
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Register child routes for lazy loading
    RouterModule.forChild(routes)
  ]
})
export class StudentModule { }
