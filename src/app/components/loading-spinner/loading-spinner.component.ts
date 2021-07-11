import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SpinenrService } from "src/app/services/spinner.service";

@Component({
  selector: "app-loading-spinner",
  templateUrl: "./loading-spinner.component.html",
  styleUrls: ["./loading-spinner.component.scss"]
})
export class LoadingSpinnerComponent implements OnDestroy, OnInit {
  private subs: Subscription = new Subscription();

  show: boolean = false;

  constructor(private spinnerService: SpinenrService) {}

  ngOnInit(): void {
    this.subs.add(
      this.spinnerService.show.subscribe((show: boolean) => {
        this.show = show;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
