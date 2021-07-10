import { NgModule } from "@angular/core";

//components
import { AppComponent } from "./app.component";
import { CarsPlpComponent } from "./components/cars-plp/cars-plp.component";
import { CarPdpComponent } from "./components/car-pdp/car-pdp.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

//modules
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./meta-modules/material-module";
import { AppRoutingModule } from "./meta-modules/routing-module";

@NgModule({
  declarations: [
    AppComponent,
    CarsPlpComponent,
    CarPdpComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
