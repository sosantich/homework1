import { bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { App } from "./app/app";
import { emailInterceptor } from "./app/interceptors/email.interceptor";
 
bootstrapApplication(App, {
  providers: [
    provideHttpClient(withInterceptors([ emailInterceptor ]))
  ]
}).catch(err => console.error(err));