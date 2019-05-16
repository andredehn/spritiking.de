import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../../core/services/common.service';
import { MailModel } from '../models/mail.model';

import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MailService {
    constructor(
        private svcComm: CommonService,
        private http: HttpClient,
    ) {
    }

    url = 'http://api.andredehn.de/api/service/sendmail_ad_test';

    sendMail(mail: MailModel): Observable<any> {
        const jsonData = JSON.stringify(mail);

        this.svcComm.info('data', jsonData);

        const curUrl = this.url;
        this.svcComm.info('send to API --> URL: ' + curUrl);
        const headers = this.createHeaders();
        return this.http.post(this.url, jsonData, { headers });
    }

    private createRequest(verb: string, url: string, body?: any, auth: boolean = false): HttpRequest<boolean> {
        const request = new HttpRequest(verb, url, body);

        request.headers.append('Content-Type', 'application/json');

        request.headers.append('Access-Control-Allow-Origin', 'http://andredehn.de');

        return request;
    }

    private createHeaders(): HttpHeaders {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://andredehn.de'
        });
        return headers;
    }

    private extractData(url: string, body: any, res: Response) {
        const r = res.json();

        this.svcComm.info('######################################################################');
        this.svcComm.info('---*url---', url);
        this.svcComm.info('---*body---', body);
        this.svcComm.info('---*res---', r);
        this.svcComm.info('######################################################################');

        return r;
    }
}
