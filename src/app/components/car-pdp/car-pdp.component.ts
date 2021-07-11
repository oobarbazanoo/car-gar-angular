import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { mergeMap } from "rxjs/operators";
import {
  CarResponse,
  CarsApi,
  GetCarRequest
} from "src/app/services/api-clients/cars-api";
import { CarsService } from "src/app/services/cars.service";
import { Car } from "./models/car";

@Component({
  selector: "app-car-pdp",
  templateUrl: "./car-pdp.component.html"
})
export class CarPdpComponent implements OnInit, OnDestroy {
  private subs: Subscription = new Subscription();

  private warehouseId?: number;
  private carId?: number;

  noSuchCar: boolean = false;
  car?: Car;

  constructor(
    private route: ActivatedRoute,
    private carsApi: CarsApi,
    private carsService: CarsService
  ) {}

  ngOnInit(): void {
    const sub = this.route.params
      .pipe(
        mergeMap((params: Params) => {
          this.warehouseId = params.warehouseId;
          this.carId = params.carId;
          const request = new GetCarRequest({
            warehouseId: this.warehouseId,
            carId: this.carId
          });
          return this.carsApi.car(request);
        })
      )
      .subscribe((response: CarResponse) => {
        if(!response) {
          this.noSuchCar = true;
          return;
        }
        
        this.car = { ...response };
        this.car.inCart = this.carsService.alreadyAdded(
          Number(response.warehouseId),
          Number(response.id)
        );
      });
    this.subs.add(sub);
  }

  addToCart(): void {
    this.carsService.addACar(Number(this.warehouseId), Number(this.carId));
    if (this.car) {
      this.car.inCart = true;
    }
  }

  removeFromCart(): void {
    this.carsService.removeACar(
      Number(this.warehouseId),
      Number(this.carId)
    );
    if (this.car) {
      this.car.inCart = false;
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
