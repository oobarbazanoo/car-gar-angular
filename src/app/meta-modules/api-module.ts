import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthApi, AuthApiBaseUrl } from "../services/api-clients/auth-api";
import { urls } from "../services/api-clients/base-urls";

@NgModule({
  exports: [HttpClientModule],
  providers: [AuthApi, { provide: AuthApiBaseUrl, useValue: urls.auth }]
})
export class ApiModule {}
