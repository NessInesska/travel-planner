import { Component, OnInit } from '@angular/core';

import { MESSAGES } from '../../constants';
import { RoutingService } from '../../services';
import GoogleAuth = gapi.auth2.GoogleAuth;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public messages = MESSAGES;


  private client_id2: string = '340154631-gnc39nv04g74nono6enjnji3svgv2788.apps.googleusercontent.com';
  private client_id: string = '340154631-fp8jep0dtq18dahiguoc1f9kb2td6j6o.apps.googleusercontent.com';
  public isSignedIn = false;
  public GoogleAuth: GoogleAuth;
  public isAuthorized = false;
  public currentApiRequest;

  constructor(private router: RoutingService) {
  }

  public ngOnInit(): void {
    // gapi.load('auth2', () => gapi.auth2.init({client_id: this.client_id}));
  }

  public onGoogleSignInSuccess() {
    gapi.load('auth2', () => {
      gapi.auth2.init({client_id: this.client_id});
      this.GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      this.GoogleAuth.isSignedIn.listen(this.updateSigninStatus);
      this.router.goToDefaultPage();
    });
  }

  public sendAuthorizedApiRequest(requestDetails) {
    this.currentApiRequest = requestDetails;
    if (this.isAuthorized) {
      // Make API request
      // gapi.client.request(requestDetails)

      // Reset currentApiRequest variable.
      this.currentApiRequest = {};
    } else {
      this.GoogleAuth.signIn();
    }
  }

  public updateSigninStatus(isSignedIn): void {
    if (isSignedIn) {
      this.isAuthorized = true;
      if (this.currentApiRequest) {
        this.sendAuthorizedApiRequest(this.currentApiRequest);
      }
    } else {
      this.isAuthorized = false;
    }
  }

  // public onGoogleSignInSuccess(event: GoogleSignInSuccess) {
  //   let googleUser: gapi.auth2.GoogleUser = event.googleUser;
  //   let id: string = googleUser.getId();
  //   let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
  //   console.log('ID: ' +
  //     profile
  //       .getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  // }
}
