import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { contactRoutes } from './contact-routes';

//  components
import { ContactComponent } from './contact.component';
import { ContactSubmittedComponent } from './contact-submitted.component';


@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        RouterModule.forChild(contactRoutes)],
    declarations: [
        ContactComponent,
        ContactSubmittedComponent,
    ],
    providers: []
})
export class ContactModule { }
