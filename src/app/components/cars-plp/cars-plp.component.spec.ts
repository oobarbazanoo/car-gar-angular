import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { CarsApi } from "src/app/services/api-clients/cars-api";
import { CarsService } from "src/app/services/cars.service";
import { CarsApiMock } from "src/app/services/mocks/cars.api.mock";
import { CarsServiceMock } from "src/app/services/mocks/cars.service.mock";
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";
import { RouterTestingModule } from "@angular/router/testing";
import { CarsPlpComponent } from "./cars-plp.component";

describe("CarsPlpComponent", () => {
  let component: CarsPlpComponent;
  let fixture: ComponentFixture<CarsPlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsPlpComponent, LoadingSpinnerComponent],
      imports: [AppModule, RouterTestingModule],
      providers: [
        { provide: CarsService, useClass: CarsServiceMock },
        { provide: CarsApi, useClass: CarsApiMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsPlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
