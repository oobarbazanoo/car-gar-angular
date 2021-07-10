import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarsPlpComponent } from "../components/cars-plp/cars-plp.component";
import { LoginComponent } from "../components/login/login.component";
import { SignupComponent } from "../components/signup/signup.component";
import { AccessGuard as AccessGuard } from "../guards/access.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "cars",
    pathMatch: "full"
  },
  {
    path: "cars",
    component: CarsPlpComponent,
    data: { whenNotLoggedRedirectTo: "login" },
    canActivate: [AccessGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    data: { whenLoggedRedirectTo: "cars" },
    canActivate: [AccessGuard]
  },
  {
    path: "signup",
    component: SignupComponent,
    data: { whenLoggedRedirectTo: "cars" },
    canActivate: [AccessGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
