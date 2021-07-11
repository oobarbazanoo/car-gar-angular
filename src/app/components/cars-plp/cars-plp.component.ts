import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import {
  Car as ApiCar,
  CarsApi,
  CarsResponse
} from "src/app/services/api-clients/cars-api";
import { CarsService } from "src/app/services/cars.service";
import { Car } from "./models/car";
import { Warehouse } from "./models/warehouse";

@Component({
  selector: "app-cars-plp",
  templateUrl: "./cars-plp.component.html"
})
export class CarsPlpComponent implements OnInit, OnDestroy {
  private subs: Subscription = new Subscription();

  warehouses: Warehouse[] = [];

  constructor(private carsApi: CarsApi, private carsService: CarsService) {}

  ngOnInit(): void {
    const sub = this.carsApi.cars().subscribe((response: CarsResponse) => {
      if (response.warehouses) {
        const warehouses: Record<number, Warehouse> =
          this.readWarehouses(response);
        this.readCars(response, warehouses);
        this.initViewWarehouses(warehouses);
      }
    });
    this.subs.add(sub);
  }

  private readWarehouses(response: CarsResponse): Record<number, Warehouse> {
    const warehouses: Record<number, Warehouse> = {};
    if (response.warehouses) {
      for (const warehouse of response.warehouses) {
        if (warehouse.id) {
          warehouses[warehouse.id] = {
            id: warehouse.id,
            location: warehouse.location,
            name: warehouse.name,
            cars: []
          };
        }
      }
    }
    return warehouses;
  }

  private readCars(
    response: CarsResponse,
    warehouses: Record<number, Warehouse>
  ): void {
    if (response.allCars) {
      for (const car of response.allCars) {
        if (car.warehouseId) {
          const warehouse = warehouses[car.warehouseId];
          if (warehouse && warehouse.cars) {
            const viewCar = this.convertToViewCar(car);
            warehouse.cars.push(viewCar);
          }
        }
      }
    }
  }

  private convertToViewCar(apiCar: ApiCar): Car {
    const viewCar: Car = {...apiCar};
    viewCar.inCart = this.carsService.alreadyAdded(
      Number(apiCar.warehouseId),
      Number(apiCar.id)
    );
    return viewCar;
  }

  private initViewWarehouses(warehouses: Record<number, Warehouse>): void {
    this.warehouses = [];
    for (const warehouseId in warehouses) {
      warehouses[warehouseId].cars?.sort((a, b) => {
        const aDate: Date = a.added as Date;
        const bDate: Date = b.added as Date;
        if(bDate < aDate) {
          return 1;
        } else if(aDate < bDate) {
          return -1;
        }

        return 0;
      });
      this.warehouses.push(warehouses[warehouseId]);
    }
  }

  addToCart(warehouseId: number | undefined, car: Car): void {
    this.carsService.addACar(Number(warehouseId), Number(car.id));
    car.inCart = true;
  }

  removeFromCart(warehouseId: number | undefined, car: Car): void {
    this.carsService.removeACar(Number(warehouseId), Number(car.id));
    car.inCart = false;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
