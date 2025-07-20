import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LetterPipe } from '../pipe/letter.pipe';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink, LetterPipe],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {

  // Form group to manage registration form
  registrationForm: FormGroup;

  // Inject required services
  formBuilder = inject(FormBuilder);
  registrationService = inject(RegistrationService);
  toastr = inject(ToastrService);
  router: any = inject(Router); // Use 'Router' injection token for routing

  // Initialize form with validation rules
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: [false, Validators.required]
    });
  }

  // Handle form submission
  submit() {
    // Get form values
    const formData = {
      userName: this.registrationForm.get('userName').value,
      email: this.registrationForm.get('email').value,
      password: this.registrationForm.get('password').value,
      confirmPassword: this.registrationForm.get('confirmPassword').value,
      role: this.registrationForm.get('role').value
    };

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      this.toastr.error("Passwords do not match");
      return;
    }

    // Check form validity
    if (!this.registrationForm.valid) {
      this.toastr.error("All fields are required");
      return;
    }

    // Submit registration data
    this.registrationService.registration(formData).subscribe({
      next: (res: any) => {
        this.toastr.success("Registration successful");
        this.registrationForm.reset();
        // Optionally, redirect or perform other actions after successful registration
         this.router.navigate(['/login']);
      },
      error: (error) => {
        this.toastr.error('Registration failed');
      }
    });
  }
}






