import { Component, Input } from '@angular/core';

import { Flight } from '../../interfaces';

@Component({
  selector: 'app-flight-final-details',
  templateUrl: './flight-final-details.component.html',
  styleUrls: ['./flight-final-details.component.scss']
})
export class FlightFinalDetailsComponent {

  @Input() selectedFlights: Flight[];
  @Input() totalPrice: number;

}
