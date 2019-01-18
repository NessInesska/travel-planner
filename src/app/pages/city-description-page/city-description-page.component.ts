import { Component, OnInit } from '@angular/core';
import { City } from '../../interfaces/city.interface';

import { CitiesService } from '../../services';

@Component({
  selector: 'app-city-description-page',
  templateUrl: './city-description-page.component.html',
  styleUrls: ['./city-description-page.component.scss']
})
export class CityDescriptionPageComponent implements OnInit {

  //TODO: refactor
  public arr = new Array(3);
  public city: City;

  constructor(private cityService: CitiesService) { }

  public ngOnInit(): void {


    // this.cityService.getCityById('1').subscribe(city =>  this.city = city);
  }
}
