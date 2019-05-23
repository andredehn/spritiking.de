import { Routes } from '@angular/router';

//  components
import { PerMilComponent } from './per-mil.component';
import { PerMilCalculatorComponent } from './per-mil-calculator/per-mil-calculator.component';


export const perMilRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'calculator', component: PerMilCalculatorComponent },
            { path: '', redirectTo: '/per-mil', component: PerMilComponent }
        ]
    }
];