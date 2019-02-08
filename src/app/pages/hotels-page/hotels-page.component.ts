import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { ROUTING_PATH_PARAMS, HOTEL_FORM_CONTROLS, TIME, HOTEL_PLANNING_MESSAGES, HOTEL_PLANNING_PLACEHOLDERS } from '../../constants';
import { City, Hotel } from '../../interfaces';
import { CitiesService, HotelsService } from '../../services';

@Component({
  selector: 'app-hotels-page',
  templateUrl: './hotels-page.component.html',
  styleUrls: ['./hotels-page.component.scss']
})
export class HotelsPageComponent implements OnInit {

  public cityId = this.router.snapshot.params[ROUTING_PATH_PARAMS.ID];

  public currentCity: City;
  public currentCityHotels: Hotel[];
  public arrayOfNumbers = [];
  public selectedHotel: Hotel;
  public totalPrice: number;

  public today = new Date();
  public dateDifference: number;

  public HOTEL_FORM_CONTROLS = HOTEL_FORM_CONTROLS;
  public HOTEL_PLANNING_MESSAGES = HOTEL_PLANNING_MESSAGES;
  public HOTEL_PLANNING_PLACEHOLDERS = HOTEL_PLANNING_PLACEHOLDERS;

  public hotelPriceCounterForm: FormGroup = this.formBuilder.group({
    [HOTEL_FORM_CONTROLS.CURRENT_HOTEL_SELECTOR]:
      ['', {validators: [Validators.required]}],
    [HOTEL_FORM_CONTROLS.CHECK_IN_DATE_PICKER]:
      ['', {validators: [Validators.required, Validators.min(+this.today)]}],
    [HOTEL_FORM_CONTROLS.CHECK_OUT_DATE_PICKER]:
      ['', {validators: [Validators.required, Validators.min(+this.today)]}],
    [HOTEL_FORM_CONTROLS.NUMBER_OF_ADULTS_SELECTOR]:
      ['', {validators: [Validators.required]}],
    [HOTEL_FORM_CONTROLS.NUMBER_OF_ROOMS_SELECTOR]: new FormControl(),
  });

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

  public calculateHotelTotalPrice(): void {
    if (this.hotelPriceCounterForm.valid) {

      if (this.currentHotelSelectorValue.valueChanges) {
        this.currentCityHotels.filter(hotel => hotel.id === this.currentHotelSelectorValue.value);
        this.calculateDateDifference();
      }
    }
  }

  private calculateDateDifference() {
    let millisecondsToDays = TIME.MILLISECONDS * TIME.SECONDS * TIME.MINUTES * TIME.HOURS_IN_DAY;

    this.dateDifference = Math.floor(
      (this.arrivalDatePicker.value - this.departureDatePicker.value) / millisecondsToDays);
  }

  private get currentHotelSelectorValue(): AbstractControl {
    return this.hotelPriceCounterForm.controls[HOTEL_FORM_CONTROLS.CURRENT_HOTEL_SELECTOR];
  }

  private get departureDatePicker(): AbstractControl {
    return this.hotelPriceCounterForm.controls[HOTEL_FORM_CONTROLS.CHECK_IN_DATE_PICKER];
  }

  private get arrivalDatePicker(): AbstractControl {
    return this.hotelPriceCounterForm.controls[HOTEL_FORM_CONTROLS.CHECK_OUT_DATE_PICKER];
  }

  private get numberOfAdultsSelector(): AbstractControl {
    return this.hotelPriceCounterForm.controls[HOTEL_FORM_CONTROLS.NUMBER_OF_ADULTS_SELECTOR];
  }

  private get numberOfRoomsSelector(): AbstractControl {
    return this.hotelPriceCounterForm.controls[HOTEL_FORM_CONTROLS.NUMBER_OF_ROOMS_SELECTOR];
  }
}
