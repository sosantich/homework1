import { HttpRequest, HttpHandlerFn, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User, UserResult } from '../interfaces/user.interface';

export function emailInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  return next(req).pipe(
    map((event: HttpEvent<unknown>) => {    
      if (event.type === HttpEventType.Response) {
        const body = event.body as User;
          body.results = body.results.map((r: UserResult) => ({
            user: { ...r.user, email: `email.${r.user.email}` }
          }));
      }
      return event;
    }),
  );
}
