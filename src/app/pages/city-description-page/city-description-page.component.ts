import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { City, Action } from '../../interfaces';
import { ActionsService, CitiesService } from '../../services';

@Component({
  selector: 'app-city-description-page',
  templateUrl: './city-description-page.component.html',
  styleUrls: ['./city-description-page.component.scss']
})
export class CityDescriptionPageComponent implements OnInit {

  public city: City;
  public actions: Action[];

  constructor(private citiesService: CitiesService,
              private route: ActivatedRoute,
              private actionsService: ActionsService) {
  }

  public ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.citiesService.getCityById(id).subscribe(res => this.city = res);
    this.actionsService.getActions()
      .subscribe(res => {
        this.actions = res;
        console.log(res);
      });
  }
}
