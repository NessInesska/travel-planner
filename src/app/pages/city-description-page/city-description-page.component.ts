import { Component } from '@angular/core';
import { City } from '../../interfaces/city.interface';
import { RoutingService } from '../../services';

@Component({
  selector: 'app-city-description-page',
  templateUrl: './city-description-page.component.html',
  styleUrls: ['./city-description-page.component.scss']
})
export class CityDescriptionPageComponent {

  //TODO: refactor
  public arr = new Array(3);
  public city: City;

  constructor() {
  }
}
