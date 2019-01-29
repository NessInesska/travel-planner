import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { City } from '../../interfaces';
import { Hotel } from '../../interfaces/hotel';
import { CitiesService, HotelsService } from '../../services';
import { FLIGHTS_PAGE_FILTER_MESSAGES } from '../../constants/messages.constants';

@Component({
  selector: 'app-hotels-page',
  templateUrl: './hotels-page.component.html',
  styleUrls: ['./hotels-page.component.scss']
})
export class HotelsPageComponent implements OnInit {

  public cityId = this.router.snapshot.params['id'];

  public currentCity: City;
  public hotels: Hotel[];

  // public FLIGHTS_PAGE_FILTER_MESSAGES = FLIGHTS_PAGE_FILTER_MESSAGES;

  // public hotelsGroup = this.fb.group([]);

  //TODO inntegration with backend
  public adults = [
    {number: 1},
    {number: 2},
    {number: 3},
    {number: 4},
    {number: 5},
    {number: 6},
    {number: 7},
    {number: 8},
    {number: 9},
    {number: 10}
  ];
  public today = new Date();
  public randomHotelId: number;
  public hotel: Hotel;

  constructor(private router: ActivatedRoute,
              private citiesService: CitiesService,
              private hotelsService: HotelsService,
              private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    let min = 1;
    let max = 50;

    //calculate random number between min and max values
    this.randomHotelId = Math.floor(Math.random() * (+max - +min) + +min);
    console.log(this.randomHotelId);

    this.citiesService.getCityById(this.cityId).subscribe(
      (city: City) => this.currentCity = city
    );

    this.hotelsService.getHotels().subscribe(
      (hotels: Hotel[]) => this.hotels = hotels
    );

    this.hotelsService.getHotelById(this.randomHotelId.toString()).subscribe(
      (res: Hotel) => this.hotel = res);
  }
}
