import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { CarPdpComponent } from './car-pdp.component';

describe('CarPdpComponent', () => {
  let component: CarPdpComponent;
  let fixture: ComponentFixture<CarPdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPdpComponent ],
      imports: [AppModule]
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
