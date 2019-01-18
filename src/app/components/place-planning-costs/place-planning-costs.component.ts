import { Component, Input } from '@angular/core';

import { Action } from '../../interfaces';
import { RoutingService } from '../../services';

@Component({
  selector: 'app-place-planning-costs',
  templateUrl: './place-planning-costs.component.html',
  styleUrls: ['./place-planning-costs.component.scss']
})
export class PlacePlanningCostsComponent {

  @Input() action: Action;

  constructor(private router: RoutingService){
  }

  public goToActionsPage(id: string): void {
    this.router.goToActionsPage(id);
  }
}
