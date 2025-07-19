import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

/**
 * Service handling user authentication operations
 * Manages login/logout functionality and user session
 */
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  /**
   * Authenticates user with provided credentials
   * @param object - Contains email, password, and role
   * @returns Observable with authentication response
   */
  login(object: any): Observable<any> {
    return this.http.post(environment.API_URL + "api/login", object);
  }

  /**
   * Clears user session data from local storage
   * Used when user logs out
   */
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  };
  getRole() {
    return localStorage.getItem('role');
  }

}


