import { Pipe, PipeTransform } from '@angular/core';

import { Flight } from '../interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(flights: Flight[], value: string, value2: string) {
    let departureCityInputValue = value.toLowerCase();
    let arrivalCityInputValue = value2.toLowerCase();

    if (flights && flights.length) {
      return flights.filter(
        flight => {
          let flightDepartureCity = flight.departure.toLowerCase();
          let flightArrivalCity = flight.arrival.toLowerCase();

          if (value && flightDepartureCity.includes(departureCityInputValue)) {
            return false;
          }
          return value2 && flightArrivalCity.includes(arrivalCityInputValue);
        })
    } else {
      return flights;
    }
  }
}
