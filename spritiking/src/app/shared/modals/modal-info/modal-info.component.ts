import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'modal-info',
    templateUrl: 'modal-info.component.html'
})

export class ModalInfoComponent implements OnInit {
    @Input() title: string;
    @Input() message: string;
    @Input() type: number;
    @Input() okButtonLabel: string;

    constructor(
        public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
        if (!this.title) {
            this.title = 'kein Titel';
        }
        if (!this.message) {
            this.message = 'Hinweistext';
        }
        if (!this.okButtonLabel) {
            this.okButtonLabel = 'Ok';
        }
        if (!this.type) {
            this.type = 1;
        }
    }
}