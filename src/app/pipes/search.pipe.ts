import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(flights, value) {
    return flights.filter(flight => {
      return flight.departure.toLowerCase().includes(value.toLowerCase());
    });
  }
}
