import { Component } from '@angular/core';

import { RoutingService } from '../../services';

@Component({
  selector: 'app-place-planning-costs',
  templateUrl: './place-planning-costs.component.html',
  styleUrls: ['./place-planning-costs.component.scss']
})
export class PlacePlanningCostsComponent {

  constructor(private router: RoutingService){
  }

  public goToActionsPage(id: string): void {
    this.router.goToActionsPage(id);
  }
}
