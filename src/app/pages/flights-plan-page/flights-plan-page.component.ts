import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { City, Flight } from '../../interfaces';
import { FlightsService } from '../../services';
import { FLIGHTS_PAGE_FILTER_MESSAGES, NOTHING_FOUND } from '../../constants/messages.constants';

@Component({
  selector: 'app-flights-plan-page',
  templateUrl: './flights-plan-page.component.html',
  styleUrls: ['./flights-plan-page.component.scss']
})
export class FlightsPlanPageComponent implements OnInit {

  //TODO: integration with backend
  public value = '';
  public value2 = '';

  public flights: Flight[];

  public citiesInputs: FormGroup = this.formBuild.group({
    departureCity: new FormControl(),
    arrivalCity: new FormControl()
  });

  //TODO: integration with backend
  public options: City[] = [
    {name: 'Berlin'},
    {name: 'Krakow'},
    {name: 'London'},
    {name: 'Los-Angeles'},
    {name: 'Moscow'},
    {name: 'Nevada'},
    {name: 'Oslo'},
    {name: 'Paris'},
    {name: 'San-Francisco'},
    {name: 'San-Ramon'},
    {name: 'Warsaw'}
  ];

  public filteredOptions: Observable<City[]>;
  public filteredOptions2: Observable<City[]>;

  public FLIGHTS_PAGE_FILTER_MESSAGES = FLIGHTS_PAGE_FILTER_MESSAGES;
  public NOTHING_FOUND = NOTHING_FOUND;

  public isLoading = false;

  public selectedFlight: Flight;
  public selectedFlights: Flight[] = [];

  public cityId = this.route.snapshot.params['id'];
  public flightsForCurrentCity: Flight[] = [];

  constructor(private formBuild: FormBuilder,
              private flightsService: FlightsService,
              private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.isLoading = true;

    this.flightsService.getFlightsByCity(this.cityId).subscribe(
      (res: Flight[]) => {
        this.flightsForCurrentCity = res;
        console.log(res);
      }
    );

    //Logic for auto suggestions
    this.filteredOptions = this.departureCity.valueChanges
      .pipe(
        startWith<string | City>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.filteredOptions2 = this.arrivalCity.valueChanges
      .pipe(
        startWith<string | City>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.flightsService.getFlights()
      .subscribe((res: Flight[]) => {
        this.flights = res;
        this.isLoading = false;
      });
  }


  public get departureCity(): AbstractControl {
    return this.citiesInputs.controls.departureCity;
  }

  public get arrivalCity(): AbstractControl {
    return this.citiesInputs.controls.arrivalCity;
  }

  public onSwapClick(): void {
    let tmp;

    if (this.value && this.value2) {
      tmp = this.value;
      this.value = this.value2;
      this.value2 = tmp;
    }
  }

  //displaying auto suggestions
  public displayFn(user?: City): string | undefined {
    return user ? user.name : undefined;
  }

  public selectFlight(id: string): void {
    this.flightsService.getFlightById(id).subscribe((res: Flight) => {
      this.selectedFlight = res;
      this.selectedFlights.push(res);
    });
  }

  //filters for auto suggestions
  private _filter(name: string): City[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
