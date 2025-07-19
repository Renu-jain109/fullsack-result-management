import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StudentService } from '../student.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Component for student dashboard to search and view results
 */
@Component({
  selector: 'app-studentdashboard',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatToolbarModule, FormsModule],
  templateUrl: './studentdashboard.component.html',
  styleUrl: './studentdashboard.component.css'
})
export class StudentdashboardComponent implements OnInit {
  // Form group for student result search
  studentResult: FormGroup;

  // Injected services
  fb = inject(FormBuilder);
  studentService = inject(StudentService);
  router = inject(Router);

  /**
   * Initialize the form with empty controls
   */
  ngOnInit(): void {
    this.studentResult = this.fb.group({
      rollno: new FormControl<number>(null),
      name: new FormControl<string>(null),
    });
  }

  /**
   * Handle form submission to fetch student result
   */
  submit() {
    const rollno = this.studentResult.get('rollno')?.value;

    // Validate roll number
    if (!rollno) {
      alert("Please enter a Roll Number");
      return;
    }

    // Fetch student result
    this.studentService.getResult(rollno).subscribe(
      (res: any) => {
        if (res) {
          // Navigate to show result with data
          this.router.navigate(['/student/showresult'], { state: { data: res } });
        }
      },
      (error) => {
        alert("Result not Found");
      }
    );
  }

  /**
   * Clear the search form
   */
  clear() {
    this.studentResult.reset();
  }
}
