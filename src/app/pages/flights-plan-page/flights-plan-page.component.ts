import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights-plan-page',
  templateUrl: './flights-plan-page.component.html',
  styleUrls: ['./flights-plan-page.component.scss']
})
export class FlightsPlanPageComponent implements OnInit {

  public value = '';
  public value2 = '';

  constructor() {
  }

  ngOnInit() {
  }

  public onSwapClick(): void {
    let tmp;

    if (this.value && this.value2) {
      tmp = this.value;
      this.value = this.value2;
      this.value2 = tmp;
    }
  }

}
