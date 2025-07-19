import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { TeacherdashboardComponent } from './teacher/teacherdashboard/teacherdashboard.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },{
        path: 'registration',
        component:RegistrationComponent
    },{
        path: 'login',
        component:LoginComponent
    },
    { path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)},
        {
          path: 'teacher',
          loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
        },// lazy loading

    {
        path:'**',
        redirectTo: ''
    }
];


