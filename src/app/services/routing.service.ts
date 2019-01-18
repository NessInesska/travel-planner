import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTING_PATHES } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) {
  }

  public goToDefaultPage(): Promise<boolean> {
    return this.router.navigate([ROUTING_PATHES.DEFAULT]);
  }

  public goToCityDescriptionPage(id: string): Promise<boolean> {
    return this.router.navigate([ROUTING_PATHES.CITY, id])
  }

  public goToActionsPage(id: string): Promise<boolean> {
    return this.router.navigate([ROUTING_PATHES.ACTIONS, id])
  }
}
