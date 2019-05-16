import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  services
import { MailService } from './services/mail.service';
import { LoadingSpinnerComponent } from './components/loading-spinner.component';
import { ModalInfoComponent } from './modals/modal-info/modal-info.component';
import { ModalLightboxComponent } from './modals/modal-lightbox/modal-lightbox.component';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LoadingSpinnerComponent,
        ModalLightboxComponent,
        ModalInfoComponent,
    ],
    exports: [
        CommonModule,
        LoadingSpinnerComponent,
        ModalLightboxComponent,
        ModalInfoComponent,
    ],
    entryComponents: [
        ModalLightboxComponent, ModalInfoComponent
    ],
    providers: [
        MailService
    ],
})
export class SharedModule { }
