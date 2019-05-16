import { Routes } from '@angular/router';

//  components
import { PrivacyPolicyComponent } from './privacy/privacy-policy.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AgbComponent } from './agb/agb.component';

export const infoRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'agb', component: AgbComponent },
            { path: 'impressum', component: ImpressumComponent },
            { path: 'privacy', component: PrivacyPolicyComponent },
            { path: '', redirectTo: '/info/privacy' }
        ]
    }
];
