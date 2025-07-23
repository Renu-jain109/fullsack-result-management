import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../login/login.service';
import { CommonModule } from '@angular/common';

/**
 * Header Component
 * 
 * This component represents the main navigation header of the application.
 * It handles user authentication state and provides navigation links.
 * The header displays different options based on the user's authentication status.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  // Current logged-in user's display name
  user: string;
  
  // Flag to track authentication status
  loggedIn: boolean = false;
  
  // Router instance for navigation
  router = inject(Router);
  
  // User information from local storage
  username = localStorage.getItem('username'); 
  role = localStorage.getItem('role');
  
  /**
   * Constructor for HeaderComponent
   * @param loginService - Service for handling login/logout functionality
   */
  constructor(private loginService: LoginService) {}

  /**
   * Lifecycle hook that is called after data-bound properties are initialized
   * Used to set up the component's initial state
   */
  isMenuOpen = false;

  ngOnInit(): void {
    if (this.loginService.isAuthenticated()) {
      this.loggedIn = true;
    }
    this.user = this.username || null;
    this.getRole();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

getRole(){
if(this.username && this.role){
  if(this.role == 'teacher'){
    this.user = `Teacher : ${this.username}`;
  } else if(this.role == 'student'){
    this.user = `Student : ${this.username}`;
  }  
}
}

  logOut(){
    this.loginService.logOut();
    window.location.href='/login';

  }
  
}
