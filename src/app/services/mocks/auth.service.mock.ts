import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";
import { AuthApi, LoginResponse, SignupResponse } from "../api-clients/auth-api";

const tokenKey: string = "tokenKey";
const loginKey: string = "loginKey";

export class AuthServiceMock {
  loginSubject = of("");
  constructor(private api: AuthApi) {}

  login(login: string, password: string): Observable<LoginResponse> {
      return of(new LoginResponse({}));
  }

  isLoggedIn(): boolean {
      return true;
  }

  getDefaultLoginForm(): FormGroup {
    return new FormGroup({
      login: new FormControl("", [
        Validators.required,
        Validators.maxLength(10)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
      ])
    });
  }

  signup(login: string, password: string): Observable<SignupResponse> {
      return of(new SignupResponse());
  }

  logout(): void {
    this.setToken(null);
    this.setLogin(null);
  }

  getToken(): string | null {
    return localStorage.getItem(tokenKey);
  }

  private setToken(token: string | null): void {
    if (token) {
      localStorage.setItem(tokenKey, token);
    } else {
      localStorage.removeItem(tokenKey);
    }
  }

  private setLogin(login: string | null): void {
    if (login) {
      localStorage.setItem(loginKey, login);
    } else {
      localStorage.removeItem(loginKey);
    }
  }
}
