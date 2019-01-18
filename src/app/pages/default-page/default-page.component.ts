import { Component, OnInit } from '@angular/core';

import { City } from '../../interfaces';
import { CitiesService, RoutingService } from '../../services';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  public cities;

  constructor(private router: RoutingService,
              private citiesService: CitiesService) {
  }

  public ngOnInit(): void {
    this.citiesService.getCities().subscribe((res: City[]) => {
      this.cities = res;
      console.log(this.cities);
    });
  }

  // public goToCityDescriptionPage(city: City): void {
  //   this.router.goToCityDescriptionPage(city.id);
  // }

  public goToCityDescriptionPage(city: City): void {
    this.citiesService.getCityById(city.id)
      .subscribe(
        res => {
          this.citiesService.city = res;
          this.router.goToCityDescriptionPage(city.id);
        });
  }

}
