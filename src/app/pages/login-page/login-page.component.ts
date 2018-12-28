import { Component } from '@angular/core';

import { MESSAGES } from '../../constants';
import { RoutingService } from '../../services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public messages = MESSAGES;

  constructor(private router: RoutingService) { }

  public goToDefaultPage(): void {
    this.router.goToDefaultPage();
  }
}
