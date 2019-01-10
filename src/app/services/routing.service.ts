import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) {
  }

  public goToDefaultPage(): Promise<boolean> {
    return this.router.navigate(['/default']);
  }

  public goToCityDescriptionPage(): Promise<boolean> {
    return this.router.navigate(['/city'])
  }
}
