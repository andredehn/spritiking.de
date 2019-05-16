import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    toTop() {
        console.log('screen top');
        window.scrollTo(0, 0);
    }

    log(message: string, obj?: any) {
        console.log(message, obj);
    }
    info(message: string, obj?: any) {
        console.info(message, obj);
    }
    warn(message: string, obj?: any) {
        console.warn(message, obj);
    }
    error(message: string, obj?: any) {
        console.error(message, obj);
    }
}
