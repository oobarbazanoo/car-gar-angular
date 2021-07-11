import { of } from "rxjs";
import { Warehouse } from "../api-clients/cars-api";

const mockCars = [{
    warehouseId: 47, carId: 48
}];

export class CarsServiceMock {
  numberOfCars = of(0);

  getCars(): { warehouseId: number; carId: number }[] {
    return mockCars;
  }

  addACar(warehouseId: number, carId: number): void {
      
  }

  removeACar(warehouseId: number, carId: number): void {
      
  }

  alreadyAdded(warehouseId: number, carId: number): boolean {
      return mockCars.some(c => c.warehouseId === warehouseId && c.carId === carId);
  }
}
