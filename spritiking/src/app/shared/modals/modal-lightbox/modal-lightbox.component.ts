import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'modal-lightbox',
    templateUrl: 'modal-lightbox.component.html'
})

export class ModalLightboxComponent implements OnInit {
    @Input() title: string;
    @Input() pictureUrl: string;
    @Input() type: number;
    @Input() okButtonLabel: string;

    constructor(
        public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
        if (!this.title) {
            this.title = '';
        }
        if (!this.pictureUrl) {
            this.pictureUrl = '../../assets/images/placeholders/DSC_7538.jpg';
        }
        if (!this.okButtonLabel) {
            this.okButtonLabel = 'Schließen';
        }
        if (!this.type) {
            this.type = 1;
        }
    }
}