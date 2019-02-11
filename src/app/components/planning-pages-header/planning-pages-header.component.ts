import { Component, Input } from '@angular/core';

import { City } from '../../interfaces';
import { RoutingService } from '../../services';

@Component({
  selector: 'app-planning-pages-header',
  templateUrl: './planning-pages-header.component.html',
  styleUrls: ['./planning-pages-header.component.scss']
})
export class PlanningPagesHeaderComponent {

  @Input() currentCity: City;

  constructor(private routingService: RoutingService) {
  }

  public goToCityPage(id: string): void {
    this.routingService.goToCityDescriptionPage(id);
  }
}
