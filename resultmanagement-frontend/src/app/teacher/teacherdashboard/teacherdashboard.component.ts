import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { TeacherService } from '../teacher.service';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';

/**
 * Component for managing teacher dashboard and student results
 */
@Component({
  selector: 'app-teacherdashboard',
  standalone: true,
  imports: [TableModule, CommonModule, InputIconModule, IconFieldModule, RouterLink, ButtonModule, SharedModule],
  templateUrl: './teacherdashboard.component.html',
  styleUrl: './teacherdashboard.component.css'
})
export class TeacherdashboardComponent implements OnInit {
  // Injected services
  teacherService = inject(TeacherService);
  router = inject(Router);

  // Component state
  resultList: any[] = [];

  /**
   * Initialize component and load results
   */
  ngOnInit(): void {
    this.getAllResult();
  }

  /**
   * Fetches all student results from the server
   */
  getAllResult() {
    this.teacherService.getAllResult().subscribe({
      next: (res: any) => {
        if (res.status === 'success') {
          this.resultList = res.data || [];
        } else {
          console.error('Error fetching results:', res.data);
          alert('Error loading results');
          this.resultList = [];
        }
      },
      error: (err) => {
        console.error('API Error:', err);
        alert('Server error occurred while fetching results');
        this.resultList = [];
      }
    });
  }

  /**
   * Deletes a student result
   * @param _id - The ID of the result to delete
   */
  deleteResult(_id: string) {
    if (!confirm('Are you sure you want to delete this result?')) {
      return;
    }

    this.teacherService.deleteResult(_id).subscribe({
      next: (res: any) => {
        if (res.result) {
          this.getAllResult(); // Refresh the list
          alert('Result deleted successfully');
        } else {
          console.error('Failed to delete result:', res);
          alert('Failed to delete result');
        }
      },
      error: (err) => {
        console.error('Error deleting result:', err);
        alert('Error deleting result');
      }
    });
  }

  /**
   * Navigates to the update result page with the selected result data
   * @param result - The result object to edit
   */
  edit(result: any) {
    this.router.navigate(['/teacher/updateresult'], { state: { data: result } });
  }
}
