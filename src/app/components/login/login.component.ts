import { Component, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { LoginResponse } from "src/app/services/api-clients/auth-api";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnDestroy {
  private subs: Subscription = new Subscription();
  form: FormGroup = this.auth.getDefaultLoginForm();

  constructor(
    private auth: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  login(): void {
    this.subs.add(
      this.auth
        .login(
          this.form.controls.login.value,
          this.form.controls.password.value
        )
        .subscribe(
          (response: LoginResponse) => {
            if (response.success) {
              this.snackBar.open("Successfully logged in!", "Ok", {
                panelClass: "bg-primary"
              });
              this.router.navigate(["/cars"]);
            } else {
              const message: string = response.message || "Something is wrong";
              this.snackBar.open(message, "Ok", {
                panelClass: "bg-danger"
              });
            }
          },
          () => {
            this.snackBar.open("Somethign is wrong", "Ok", {
              panelClass: "bg-danger"
            });
          }
        )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
