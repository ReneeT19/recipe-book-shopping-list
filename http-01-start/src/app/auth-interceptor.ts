import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        //add constraints by using if(req.url === '')
        // console.log('Request is on its way');
        // console.log(req.url);
        const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
        // return next.handle(req);
        return next.handle(modifiedRequest);
        // .pipe(tap(event => {
        //     console.log(event);
        //     if(event.type === HttpEventType.Response) {
        //         console.log('Response arrived, body data: ');
        //         console.log(event.body);
        //     }
        // }));
    }
}