import { Component, Input } from '@angular/core';

import { Hotel } from '../../interfaces';
import { HOTEL_CARD_MESSAGES } from '../../constants';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent {

  @Input() hotel: Hotel;

  public HOTEL_CARD_MESSAGES = HOTEL_CARD_MESSAGES;

}
