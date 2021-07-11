import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SpinenrService {
  show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
