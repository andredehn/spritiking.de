import { Routes } from '@angular/router';

//  component
import { StartHomeComponent } from './home/start-home.component';

export const startRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'home', component: StartHomeComponent },
            { path: '', redirectTo: '/home' }
        ]
    }
]