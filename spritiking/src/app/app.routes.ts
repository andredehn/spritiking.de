import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    { path: 'info', loadChildren: './info/info.module#InfoModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
    { path: 'start', loadChildren: './start/start.module#StartModule' },
    { path: '', redirectTo: '/start/home', pathMatch: 'full' },
];
