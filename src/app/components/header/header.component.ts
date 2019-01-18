import { Component } from '@angular/core';

import { RoutingService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: RoutingService) {
  }

  public goToDefaultPage(): void {
    this.router.goToDefaultPage();
  }
}
