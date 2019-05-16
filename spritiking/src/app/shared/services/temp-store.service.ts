import { Injectable, OnInit } from '@angular/core';

//  models
import { SoftwareProject } from '../../software-project/software-project.model';


@Injectable({
    providedIn: 'root'
})
export class TempStoreService implements OnInit {

    public softwareProject: SoftwareProject = new SoftwareProject();

    constructor(

    ) { }

    ngOnInit() {

    }
}
