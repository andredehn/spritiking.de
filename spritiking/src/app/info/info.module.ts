import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { infoRoutes } from './info.routes';
import { SharedModule } from '../shared/shared.module';

//  components
import { PrivacyPolicyComponent } from './privacy/privacy-policy.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AgbComponent } from './agb/agb.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(infoRoutes)
    ],
    exports: [],
    declarations: [
        AgbComponent,
        ImpressumComponent,
        PrivacyPolicyComponent
    ],
})
export class InfoModule { }
