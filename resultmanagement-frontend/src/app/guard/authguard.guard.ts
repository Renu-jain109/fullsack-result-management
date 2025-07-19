import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

/**
 * Authentication Guard to protect routes based on user authentication and role
 * 
 * This guard checks if:
 * 1. The user is authenticated (logged in)
 * 2. The user has the required role to access the route
 * 
 * If either check fails, the user is redirected to the login page
 */
export const authguardGuard: CanActivateFn = (route, state) => {
  // Inject required services
  const loginService = inject(LoginService);
  const router = inject(Router);
  
  // Get the expected role from route data and current user's role
  const expectedRole = route.data['role'];
  const userRole = loginService.getRole();

  // Check if user is authenticated and has the required role
  if (loginService.isAuthenticated() && userRole === expectedRole) {
    // Allow access to the route
    return true;
  } else {
    // Redirect to login page if not authenticated or incorrect role
    router.navigate(['/login']);
    return false;
  }
};
