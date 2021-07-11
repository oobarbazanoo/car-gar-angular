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

  it("should increment total cart count on car addition", () => {
    const fixture = TestBed.createComponent(CarsPlpComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    compiled.querySelector()
    expect(compiled.querySelector('mat-icon').textContent).toBe('0');
  });
});
