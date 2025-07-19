import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { AddresultComponent } from './addresult/addresult.component';
import { UpdateresultComponent } from './updateresult/updateresult.component';
import { authguardGuard } from '../guard/authguard.guard';

/**
 * Teacher feature module routes
 * All routes are protected with auth guard and require 'teacher' role
 */
export const routes: Routes = [
  {
    // Teacher dashboard - Main view for teachers
    path: 'teacherdashboard',
    component: TeacherdashboardComponent,
    canActivate: [authguardGuard],
    data: { role: 'teacher' }
  },
  {
    // Add new result page
    path: 'addresult',
    component: AddresultComponent,
    canActivate: [authguardGuard],
    data: { role: 'teacher' }
  },
  {
    // Update existing result page
    path: 'updateresult',
    component: UpdateresultComponent,
    canActivate: [authguardGuard],
    data: { role: 'teacher' }
  }
];

/**
 * Teacher Feature Module
 * Contains all teacher-specific components and routes
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Register routes as child routes
  ]
})
export class TeacherModule { }
