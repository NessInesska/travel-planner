import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-price-counter',
  templateUrl: './total-price-counter.component.html',
  styleUrls: ['./total-price-counter.component.scss']
})
export class TotalPriceCounterComponent {

  @Input() selectedItems;
  @Input() totalPrice: number;

}
