import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeacherdashboardComponent } from '../teacher/teacherdashboard/teacherdashboard.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, TeacherdashboardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  // Form group to manage login form controls
  loginForm: FormGroup;

  // Injected services
  loginService = inject(LoginService);
  toastr = inject(ToastrService);
  router = inject(Router);

  constructor(private formBuilder: FormBuilder) { }

  // Initialize login form with validators
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: [false, Validators.required]
    });
  }

  // Handle form submission
  submit() {
    // Prepare login data
    const json = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
      role: this.loginForm.get('role')?.value
    };

    // Call login service and handle response
    this.loginService.login(json).subscribe((res: any) => {
      // Store token and user data in local storage
      localStorage.setItem('token', res.token);
      localStorage.setItem('username', res.username);
      localStorage.setItem('role', res.role);

      // Redirect to dashboard based on user role
      if (res.role === 'teacher') {
        window.location.href = '/teacher/teacherdashboard';
      } else {
        window.location.href = '/student/studentdashboard';
      }

      // Display success message and reset form
      this.toastr.success("Login successful");
      this.loginForm.reset();
    }, (error) => {
      console.error('Login failed:', error);
      this.toastr.error('Invalid login credentials');
    });
  }
}
