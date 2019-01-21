import { Component, Input } from '@angular/core';

import { Flight } from '../../interfaces';
import { FLIGHT_DETAILS_MESSAGES } from '../../constants/messages.constants';

@Component({
  selector: 'app-each-flight-final-details',
  templateUrl: './each-flight-final-details.component.html',
  styleUrls: ['./each-flight-final-details.component.scss']
})
export class EachFlightFinalDetailsComponent {

  @Input() selectedFlight: Flight;

  public FLIGHT_DETAILS_MESSAGES = FLIGHT_DETAILS_MESSAGES;

}
