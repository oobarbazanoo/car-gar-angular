import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnDestroy {
  private subs: Subscription = new Subscription();
  login: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.subs.add(
      this.auth.loginSubject.subscribe((login: string | null) => {
        this.login = login;
      })
    );
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
