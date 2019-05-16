import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { IStartNavRoute } from './start-navRoute.model';
import { Router } from '@angular/router';

@Component({
    selector: 'custom-start-home',
    templateUrl: './start-home.component.html',
    host: {
        class: 'custom-content'
    }
})

export class StartHomeComponent implements OnInit {
    currentPictureNumber: number = 0;
    currentPicture: string = '';

    navRoutes: IStartNavRoute[] = [];

    screenWidth: number = null;

    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
        this.screenWidth = screen.width;
        this.navRoutes = NavRoutes;
        this.currentPicture = pictures[this.currentPictureNumber]
        interval(1 * 10 * 1000).subscribe(() => {
            this.currentPictureNumber++;
            if (this.currentPictureNumber === pictures.length) {
                this.currentPictureNumber = 0;
            }

            this.currentPicture = pictures[this.currentPictureNumber];
        })
    }

    navigateTo(route: string) {
        this.router.navigateByUrl(route);
    }
}

export const pictures = [
    '../../../assets/images/start/start-screen.jpg',
    '../../../assets/images/start/start-screen-2.jpg',
]

export const NavRoutes: IStartNavRoute[] = [
    {
        name: 'Software-Projekte',
        route: '/software-project/list',
        icon: '',
        text: 'Eine Übersicht einiger meiner durchgeführten Projekte',
    },
]
