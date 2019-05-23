import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    { path: 'info', loadChildren: './info/info.module#InfoModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
    { path: 'start', loadChildren: './start/start.module#StartModule' },
    { path: 'per-mil', loadChildren: './per-mil/per-mil.module#PerMilModule' },
    { path: '', redirectTo: '/start/home', pathMatch: 'full' },
];
