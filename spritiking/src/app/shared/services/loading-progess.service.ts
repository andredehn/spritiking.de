import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingProgressService {

    private spinnerSubject = new Subject<SpinnerState>();

    public show(text?: string) {
        const spinnerState: SpinnerState = {
            show: true,
            text: text ? text : null
        };

        this.spinnerSubject.next(spinnerState);
    }

    public hide() {
        const spinnerState: SpinnerState = {
            show: false,
            text: null
        };

        this.spinnerSubject.next(spinnerState);
      }

    public spinner(): Observable<SpinnerState> {
         return this.spinnerSubject.asObservable();
    }
}

class SpinnerState {
    show: boolean = false;
    text: string = null;
}
