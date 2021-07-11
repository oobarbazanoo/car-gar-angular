import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";

import { CarsPlpComponent } from "./cars-plp.component";

describe("CarsPlpComponent", () => {
  let component: CarsPlpComponent;
  let fixture: ComponentFixture<CarsPlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsPlpComponent],
      imports: [AppModule]
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
