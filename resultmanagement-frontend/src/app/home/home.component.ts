import { Component, OnInit } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CountUpModule, RouterModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  // Stats counters for animated statistics
  studentsCount = 12500;
  schoolsCount = 450;
  uptimeRate = 99.9;

  // Options for ngx-countup directive
  countUpOptions = {
    enableScrollSpy: true,
    scrollSpyOnce: true,
    duration: 2
  };
  
  decimalOptions = {
    enableScrollSpy: true,
    scrollSpyOnce: true,
    duration: 2,
    decimalPlaces: 1,
    suffix: '%'
  };

  ngOnInit() {
    // Initialize any component logic here
  }

  // Navigate to login page
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  // Navigate to registration page
  navigateToRegistration() {
    this.router.navigate(['/registration']);
  }

  // Function to handle scroll to next section
  scrollToNextSection() {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
