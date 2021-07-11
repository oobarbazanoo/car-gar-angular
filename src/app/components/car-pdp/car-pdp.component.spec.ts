import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppModule } from "src/app/app.module";
import { CarsApi } from "src/app/services/api-clients/cars-api";
import { CarsApiMock } from "src/app/services/mocks/cars.api.mock";

import { CarPdpComponent } from "./car-pdp.component";

describe("CarPdpComponent", () => {
  let component: CarPdpComponent;
  let fixture: ComponentFixture<CarPdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarPdpComponent],
      imports: [AppModule, RouterTestingModule],
      providers: [{ provide: CarsApi, useClass: CarsApiMock }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
