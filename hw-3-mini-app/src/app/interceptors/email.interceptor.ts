import { HttpRequest, HttpHandlerFn, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user.interface';

export function emailInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  return next(req).pipe(
    map((event) => {    
      if (event.type === HttpEventType.Response) {
        const body = event.body as User;
          body.results = body.results.map((user: any) => {
              user.email = 'german.' + user.email;
            return user;
          });
      }
      return event;
    }),
  );
}
