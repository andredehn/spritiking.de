import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

//  interfaces
import { IContact } from '../shared/interfaces/contact.interface';
import { MailModel } from '../shared/models/mail.model';

//  services
import { MailService } from '../shared/services/mail.service';
import { CommonService } from '../core/services/common.service';
import { TempStoreService } from '../shared/services/temp-store.service';


@Component({
    templateUrl: './contact.component.html',
    host: {
        class: 'custom-content'
    }
})

export class ContactComponent implements OnInit {

    contact: IContact;
    frmContact: FormGroup;
    agbAccepted: boolean = false;
    sendingMail: boolean = false;

    constructor(
        private mailService: MailService,
        private commonService: CommonService,
        private tempStoreService: TempStoreService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.initForm();
        this.defaultInitContact();
        this.initTempStore();
    }

    toggleAgbAccepted() {
        this.agbAccepted = !this.agbAccepted;
    }

    // h2805007.stratoserver.net
    initTempStore() {
        console.log('this.tempStoreService.apartment.id', this.tempStoreService.softwareProject.id);
        // if (this.tempStoreService.softwareProject.id) {
        //     this.contact.desiredAmbiance = this.tempStoreService.softwareProject.name;
        // }
    }

    initForm() {
        // this.frmContact = this.formBuilder.group({
        //     'email': ['', Validators.required],
        //     'firstName': [''],
        //     'lastName': [''],
        // });
    }

    defaultInitContact() {
        this.contact = {
            id: null,
            firstName: '',
            lastName: '',
            address: '',
            email: '',
            remark: ''
        };
    }

    sendContact(formValues) {
        this.sendingMail = true;
        const body = `
            <h1>Neue Anfrage</h1>
            <h2>VON: ${this.contact.email}<br /></h2>

            <strong>Vorname: </strong>${this.contact.firstName}<br />
            <strong>Nachname: </strong>${this.contact.lastName}<br />
            <strong>Adresse: </strong><br />
            ${this.contact.address}<br />
            <br />
            <strong>E-Mail: </strong>${this.contact.email}<br />
            <br />
            <strong>Bemerkung: </strong>${this.contact.remark}<br />
        `;

        const mail = new MailModel();
        mail.dest = this.contact.email;
        mail.subject = 'Anfrage von andredehn.de';
        mail.body = body;
        mail.isHtmlBody = true;

        this.mailService.sendMail(mail).subscribe(res => {
            this.commonService.info('mail was send', res);
            this.sendingMail = false;

            if (res === false) {
                return;
            }

            this.router.navigateByUrl('/contact/custom/submitted');
        });
    }
}
