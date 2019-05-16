import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-loading-spinner',
    template: `<div class="loading-spinner">`,
    styles: [`
        .loader-spinner {
            position: relative;
            border: 16px solid #f3f3f3; /* Light grey */
            border-top: 16px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 120px;
            height: 120px;
            top: 100px;
            margin: 0 auto;
            animation: spin 1s linear infinite;
        }
      
        /* Safari */
        @-webkit-keyframes spin {
            0% { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); 
        }`
    ],
})

export class LoadingSpinnerComponent implements OnInit {

    loadingSpinnerPath: string = '../../assets/images/loading.gif';
    @Input() loading: boolean = false;

    constructor() { }

    ngOnInit() { }
}