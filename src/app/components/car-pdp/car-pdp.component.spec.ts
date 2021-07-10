import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPdpComponent } from './car-pdp.component';

describe('CarPdpComponent', () => {
  let component: CarPdpComponent;
  let fixture: ComponentFixture<CarPdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPdpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
