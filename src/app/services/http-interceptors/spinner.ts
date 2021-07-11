import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { SpinenrService } from "../spinner.service";

@Injectable()
export class Spinner implements HttpInterceptor {
  constructor(private spinnerService: SpinenrService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.show.next(true);
    return next
      .handle(req)
      .pipe(finalize(() => this.spinnerService.show.next(false)));
  }
}
