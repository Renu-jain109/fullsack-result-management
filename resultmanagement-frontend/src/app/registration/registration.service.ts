import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

/**
 * Service to handle user registration operations
 * Communicates with the backend API for user registration
 */
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  /**
   * Register a new user
   * @param object User registration data
   * @returns Observable with registration response
   */
  registration(object: any): Observable<any> {
    return this.http.post(environment.API_URL + "api/addRegister", object);
  }
}
