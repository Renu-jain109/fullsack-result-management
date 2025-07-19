import { Component, inject, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Component for updating existing student results
 */
@Component({
  selector: 'app-updateresult',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './updateresult.component.html',
  styleUrl: './updateresult.component.css'
})
export class UpdateresultComponent implements OnInit {
  // Injected services
  teacherService = inject(TeacherService);
  Fb = inject(FormBuilder);
  router = inject(Router);

  // Form group for the update form
  updateForm: FormGroup;

  /**
   * Initialize component and load result data from state
   */
  ngOnInit(): void {
    const data = history.state?.data;
    if (data) {
      this.updateForm = this.Fb.group({
        _id: data._id,
        rollno: data.rollno,
        name: data.name,
        dob: data.dob,
        score: data.score
      })
    }
  }

  submit() {
    const editData = this.updateForm.value;
    this.teacherService.editResult(editData._id, editData).subscribe({
      next: (res) => {
        this.router.navigate(['/teacher/teacherdashboard'], { state: { data: res } });
      },
      error: (err) => {
        console.error('Error updating result:', err);
        alert('Failed to update result. Please try again.');
      }
    });
  }

  /**
   * Reset the form to its initial state
   */
  resetForm(): void {
    if (confirm('Are you sure you want to reset all changes?')) {
      this.updateForm.reset();
    }
  }
}



