import { Component } from '@angular/core';

import { RoutingService } from '../../services';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent {

  //TODO: refactor
  public array = new Array(7);

  constructor(private router: RoutingService) { }

  public goToCityDescriptionPage(): void {
    this.router.goToCityDescriptionPage();
  }
}
