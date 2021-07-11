import { Observable, of } from "rxjs";
import { Car, CarResponse, CarsResponse, GetCarRequest, Warehouse } from "../api-clients/cars-api";

const mockCarsResponse = new CarsResponse({
  warehouses: [new Warehouse({ id: 47 })],
  allCars: [new Car({ id: 48 })]
});

const mockCarResponse = new CarResponse();

export class CarsApiMock {
  cars(): Observable<CarsResponse> {
    return of(mockCarsResponse);
  }

  car(body: GetCarRequest | undefined): Observable<CarResponse> {
    return of(mockCarResponse);
  }
}
