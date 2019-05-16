import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { startRoutes } from './start-routes';

//  components
import { StartHomeComponent } from './home/start-home.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(startRoutes)
    ],
    declarations: [
        StartHomeComponent,
    ],
    exports: [
        StartHomeComponent,
    ],
})
export class StartModule { }