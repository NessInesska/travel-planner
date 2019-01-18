import { Component, OnInit } from '@angular/core';
import { City } from '../../interfaces/city.interface';

import { CitiesService, RoutingService } from '../../services';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  //TODO: refactor
  public array = new Array(7);
  public res;

  constructor(private router: RoutingService,
              private citiesService: CitiesService) {
  }

  public ngOnInit(): void {
    this.citiesService.getCities().subscribe((res: City[]) => {
      this.res = res;
      console.log(this.res);
    });
  }

  public goToCityDescriptionPage(id: string): void {
    this.router.goToCityDescriptionPage(id);
  }
}
