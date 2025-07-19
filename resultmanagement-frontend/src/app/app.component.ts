import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TeacherdashboardComponent } from './teacher/teacherdashboard/teacherdashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,TeacherdashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resultmanagement';
}
