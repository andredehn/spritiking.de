import { Component, OnInit } from '@angular/core';
import { INavRoute } from './navRoute.model';

@Component({
    selector: 'custom-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

    public navRoutes: INavRoute[] = [];

    constructor() { }
    ngOnInit() {
        this.navRoutes = NavRoutes;
    }

    navToggle() {
        this.toggleNavbarCollapse();
    }

    toggleNavbarCollapse() {
        const target = document.getElementById('navbarSupportedContent');
        if (target.classList.contains('collapse-in')) {
            target.classList.remove('collapse-in');
            target.classList.add('collapse');
        } else {
            target.classList.remove('collapse');
            target.classList.add('collapse-in');
        }
    }
}
export const NavRoutes: INavRoute[] = [
    {
        name: 'Start',
        route: '/start/home',
        isLink: false,
    },
    // {
    //     name: 'Projekte',
    //     route: '/software-project/list',
    //     isLink: false,
    // },
    // {
    //     name: 'Über mich',
    //     route: '/about/me',
    //     isLink: false,
    // },
    // {
    //     name: 'Lebenslauf',
    //     route: '/about/personal-data-sheet',
    //     isLink: false,
    // },
    {
        name: 'Kontakt',
        route: '/contact',
        isLink: false,
    },
];
