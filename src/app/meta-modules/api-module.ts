import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthApi, AuthApiBaseUrl } from "../services/api-clients/auth-api";
import { urls } from "../services/api-clients/_base-urls";
import { CarsApi, CarsApiBaseUrl } from "../services/api-clients/cars-api";
import { Token } from "../services/http-interceptors/token";
import { Spinner as Spinner } from "../services/http-interceptors/spinner";

@NgModule({
  exports: [HttpClientModule],
  providers: [
    AuthApi,
    { provide: AuthApiBaseUrl, useValue: urls.auth },

    CarsApi,
    { provide: CarsApiBaseUrl, useValue: urls.cars },

    { provide: HTTP_INTERCEPTORS, useClass: Token, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: Spinner, multi: true }
  ]
})
export class ApiModule {}
