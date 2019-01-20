import { Component, Input } from '@angular/core';

import { Flight } from '../../interfaces';
import { FLIGHT_DETAILS_MESSAGES } from '../../constants/messages.constants';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})
export class FlightInfoComponent {

  @Input() flight: Flight;

  public FLIGHT_DETAILS_MESSAGES = FLIGHT_DETAILS_MESSAGES;

}
