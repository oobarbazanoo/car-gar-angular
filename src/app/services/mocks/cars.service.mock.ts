import { of } from "rxjs";

export class CarsServiceMock {
  numberOfCars = of(0);

  getCars(): { warehouseId: number; carId: number }[] {
    return [];
  }

  addACar(warehouseId: number, carId: number): void {
      
  }

  removeACar(warehouseId: number, carId: number): void {
      
  }

  alreadyAdded(warehouseId: number, carId: number): boolean {
      return true;
  }
}
