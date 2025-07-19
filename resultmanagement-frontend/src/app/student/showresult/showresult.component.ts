import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Component to display student result
 */
@Component({
  selector: 'app-showresult',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './showresult.component.html',
  styleUrl: './showresult.component.css'
})
export class ShowresultComponent implements OnInit {
  // Array to store student result data
  studentData: any[] = [];

  // Inject required services
  studentService = inject(StudentService);
  rollno: number;

  /**
   * Initialize component and load data
   */
  ngOnInit(): void {
    this.loadData();
  }

  /**
   * Load student result data from router state
   */
  loadData() {
    // Get data passed through router state
    const res = history.state?.data;

    if (res?.data) {
      // Add student data to the array
      this.studentData.push(res.data);
    } else {
      console.warn('No student data found!');
    }
  }
}
