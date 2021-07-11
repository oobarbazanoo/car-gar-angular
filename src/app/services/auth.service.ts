import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import {
  AuthApi,
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse
} from "./api-clients/auth-api";

const tokenKey: string = "tokenKey";
const loginKey: string = "loginKey";

@Injectable()
export class AuthService {
  loginSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(localStorage.getItem(loginKey));
  constructor(private api: AuthApi) {}

  login(login: string, password: string): Observable<LoginResponse> {
    return this.api.login(new LoginRequest({ login, password })).pipe(
      tap((response: SignupResponse) => {
        if (response.success) {
          this.setToken(response.token || "");
          this.setLogin(login);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(tokenKey);
    if (token && 0 < token.length) {
      return true;
    }
    return false;
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
    return this.api.signup(new SignupRequest({ login, password })).pipe(
      tap((response: SignupResponse) => {
        if (response.success) {
          this.setToken(response.token || "");
          this.setLogin(login);
        }
      })
    );
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
    this.loginSubject.next(login);
  }
}
