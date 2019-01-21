import { Component, Input } from '@angular/core';

import { Action, City } from '../../interfaces';
import { RoutingService } from '../../services';

@Component({
  selector: 'app-place-planning-costs',
  templateUrl: './place-planning-costs.component.html',
  styleUrls: ['./place-planning-costs.component.scss']
})
export class PlacePlanningCostsComponent {

  @Input() action: Action;
  @Input() city: City;

  constructor(private router: RoutingService){
  }

  public goToActionsPage(cityId: string, actionId: string): void {
    this.router.goToActionsPage(cityId, actionId);
  }
}
