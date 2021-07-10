import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const redirectTo : string = this.auth.isLoggedIn() ? 
      route.data.whenLoggedRedirectTo : route.data.whenNotLoggedRedirectTo;

    if (redirectTo) {
      this.router.navigate([redirectTo]);
      return false;
    }

    return true;
  }
}
