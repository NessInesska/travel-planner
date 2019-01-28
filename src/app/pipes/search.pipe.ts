import { Pipe, PipeTransform } from '@angular/core';

import { Flight } from '../interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public foundFlights: Flight[] = [];


  transform(flights: Flight[], value: string, value2: string) {
    let departureCityInputValue = value.toLowerCase();
    let arrivalCityInputValue = value2.toLowerCase();

    if (flights && flights.length && (departureCityInputValue || arrivalCityInputValue)) {
      return flights.filter(
        flight => {
          let flightDepartureCity = flight.departure.toLowerCase();
          let flightArrivalCity = flight.arrival.toLowerCase();
          let flightDepartureIncludesInputValue = flightDepartureCity.startsWith(departureCityInputValue);
          let flightArrivalIncludesInputValue = flightArrivalCity.startsWith(arrivalCityInputValue);

          // Search by both departure city and arrival city inputs
          if (departureCityInputValue && arrivalCityInputValue) {
            if (flightDepartureIncludesInputValue && flightArrivalIncludesInputValue) {

              this.foundFlights.filter(filteredFlight => {
                if (!filteredFlight.arrival.toLowerCase().startsWith(arrivalCityInputValue)) {
                  return false;
                }
              });
              this.pushFilteredFlights(flight);
              return flight;
            }
            return false;
          }

          // Search by only departure city input
          if (departureCityInputValue && !arrivalCityInputValue) {
            if (!flightDepartureIncludesInputValue) {
              return false;
            }
            this.pushFilteredFlights(flight);
            return flight;
          }

          // Search by only arrival city input
          if (arrivalCityInputValue && !departureCityInputValue) {
            if (!flightArrivalIncludesInputValue) {
              return false;
            }
            this.pushFilteredFlights(flight);
            return flight;
          }
        })
    } else {
      return flights;
    }
  }

  private pushFilteredFlights(flight: Flight): void {
    this.foundFlights.push(flight);
  }
}
