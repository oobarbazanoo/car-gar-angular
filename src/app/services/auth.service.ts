import { Injectable } from "@angular/core";

const tokenKey: string = "tokenKey";

@Injectable()
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    const token = localStorage.getItem(tokenKey);
    if (token && 0 < token.length) {
      return true;
    }
    return false;
  }
}
