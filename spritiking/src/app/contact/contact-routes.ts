import { Routes } from '@angular/router';

//  components
import { ContactComponent } from './contact.component';
import { ContactSubmittedComponent } from './contact-submitted.component';

export const contactRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'custom', component: ContactComponent },
            { path: 'custom/submitted', component: ContactSubmittedComponent },
            { path: 'custom/apartment/:id', component: ContactComponent },
            { path: '', redirectTo: '/contact/custom' }
        ]
    }
];
