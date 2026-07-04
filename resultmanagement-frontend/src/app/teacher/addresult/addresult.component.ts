import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeacherService } from '../teacher.service';
import { ToastrService } from 'ngx-toastr';

/**
 * Component for adding new student results
 */
@Component({
  selector: 'app-addresult',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './addresult.component.html',
  styleUrl: './addresult.component.css'
})
export class AddresultComponent implements OnInit {
  // Form group for the add result form
  addResultForm: FormGroup;

  // Injected services
  formBuilder = inject(FormBuilder);
  teacherService = inject(TeacherService);
  router = inject(Router);
  toastr = inject(ToastrService);


  /**
   * Initialize the form with required validators
   */
  ngOnInit(): void {
    this.addResultForm = this.formBuilder.group({
      rollno: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      score: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  /**
   * Handle form submission
   * Collects form data and sends it to the server
   */

  submit() {
  if (this.addResultForm.invalid) {
    return;
  }

  const formData = this.addResultForm.value;

  this.teacherService.AddResult(formData).subscribe({
    next: () => {
      this.toastr.success(
        'Result added successfully',
        'Success'
      );

      this.router.navigate(['/teacher/teacherdashboard']);
    },
    error: (error) => {
      if (error?.error?.message === 'Result already exists') {
        this.toastr.error(
          'Roll number already exists',
          'Duplicate Entry'
        );
      } else {
        this.toastr.error(
          'Something went wrong. Please try again.',
          'Error'
        );
      }
    }
  });
}


  /**
   * Reset the form to its initial state
   */
  resetForm() {
    this.addResultForm.reset();
  }
}
