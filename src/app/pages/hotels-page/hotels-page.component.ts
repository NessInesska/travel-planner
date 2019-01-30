import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { City } from '../../interfaces';
import { Hotel } from '../../interfaces/hotel';
import { CitiesService, HotelsService } from '../../services';

@Component({
  selector: 'app-hotels-page',
  templateUrl: './hotels-page.component.html',
  styleUrls: ['./hotels-page.component.scss']
})
export class HotelsPageComponent implements OnInit {

  public cityId = this.router.snapshot.params['id'];

  public currentCity: City;
  public hotels: Hotel[];
  public currentCityHotels: Hotel[];
  public arrayOfNumbers = [];
  public today = new Date();

  constructor(private router: ActivatedRoute,
              private citiesService: CitiesService,
              private hotelsService: HotelsService,
              private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    let getCityById$ = this.citiesService.getCityById(this.cityId);
    let getHotelsByCityId$ = this.hotelsService.getHotelsByCityId(this.cityId);
    let getNumbers$ = this.hotelsService.getAdultsNumbers();

    forkJoin([getCityById$, getHotelsByCityId$, getNumbers$]).subscribe(
      data => {
        this.currentCity = data[0];
        this.currentCityHotels = data[1];
        this.arrayOfNumbers = data[2];
      }
    );
  }
}
