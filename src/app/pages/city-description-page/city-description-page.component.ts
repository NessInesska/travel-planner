import { Component } from '@angular/core';

@Component({
  selector: 'app-city-description-page',
  templateUrl: './city-description-page.component.html',
  styleUrls: ['./city-description-page.component.scss']
})
export class CityDescriptionPageComponent {

  //TODO: refactor
  public arr = new Array(3);

  constructor() { }

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

}
