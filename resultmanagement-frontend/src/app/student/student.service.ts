import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

/**
 * Service for handling student-related API calls
 */
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }

  /**
   * Fetches student result by roll number
   * @param rollno - The roll number of the student
   * @returns Observable with student result data
   */
  getResult(rollno: string): Observable<any> {
    return this.http.get(
      `${environment.API_URL}api/getStudentResult?rollno=${rollno}`
    );
  }
}
