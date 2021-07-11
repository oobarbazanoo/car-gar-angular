import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

const carsKey: string = "carsKey";

@Injectable()
export class CarsService {
  numberOfCars: BehaviorSubject<number> = new BehaviorSubject<number>(this.getCars().length);

  getCars(): { warehouseId: number; carId: number }[] {
    const cars = localStorage.getItem(carsKey);
    if (cars) {
      return JSON.parse(cars);
    }

    return [];
  }

  addACar(warehouseId: number, carId: number): void {
    const cars = this.getCars();
    cars.push({ warehouseId, carId });
    localStorage.setItem(carsKey, JSON.stringify(cars));

    this.numberOfCars.next(cars.length);
  }

  removeACar(warehouseId: number, carId: number): void {
    const cars = this.getCars();
    const newCars = cars.filter(c => c.warehouseId !== warehouseId || c.carId !== carId);
    localStorage.setItem(carsKey, JSON.stringify(newCars));

    this.numberOfCars.next(newCars.length);
  }

  alreadyAdded(warehouseId: number, carId: number): boolean {
    const cars = this.getCars();
    return cars.some(e => e.warehouseId === warehouseId && e.carId == carId);
  }
}
