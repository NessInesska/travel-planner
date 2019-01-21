import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Flight } from '../../interfaces';
import { FLIGHT_DETAILS_MESSAGES } from '../../constants/messages.constants';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})
export class FlightInfoComponent {

  @Input() flight: Flight;
  @Output() selectedFlight: EventEmitter<string> = new EventEmitter<string>();

  public FLIGHT_DETAILS_MESSAGES = FLIGHT_DETAILS_MESSAGES;

  public selectFlight(): void {
    this.selectedFlight.emit(this.flight.id);
  }
}
