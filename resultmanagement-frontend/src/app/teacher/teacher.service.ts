import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

/**
 * Service for handling teacher-related API calls
 */
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private http: HttpClient) { }

  /**
   * Add a new student result
   * @param result - Student result data to be added
   */
  AddResult(result: any): Observable<any> {
    return this.http.post(environment.API_URL + "api/addResult", result);
  }

  /**
   * Get all student results
   * Requires authentication token in headers
   */
  getAllResult(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get(environment.API_URL + "api/getAllResult", { headers });
  }

  /**
   * Delete a student result by ID
   * @param _id - ID of the result to delete
   */
  deleteResult(_id: string): Observable<any> {
    console.log('Deleted', _id, "-----------------------------------");
    return this.http.delete(`${environment.API_URL}api/deleteResult`, {
      body: { _id: _id }
    });
  }

  /**
   * Update an existing student result
   * @param _id - ID of the result to update
   * @param result - Updated result data
   */
  editResult(_id: string, result: any): Observable<any> {
    return this.http.put(`${environment.API_URL}api/updateResult`, {
      _id: _id,
      ...result
    });
  }
}
