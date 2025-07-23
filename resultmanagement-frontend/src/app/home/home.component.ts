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
  // Stats data will be added here when we have real data to display

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
