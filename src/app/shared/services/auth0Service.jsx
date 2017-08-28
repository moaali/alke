import Auth0Lock from 'auth0-lock';
import { autobind } from 'core-decorators';
import history from 'shared/config/history';
import Auth0Config from 'shared/config/auth0';
import doNotification from 'shared/services/doNotificationService';

class Auth0 {
  constructor() {
    this.lock = do {
      /* eslint-disable */
      if (
        Auth0Config.clientID &&
        Auth0Config.domain
      ) {
        new Auth0Lock(
          Auth0Config.clientID,
          Auth0Config.domain,
          Auth0Config.options
        );
      } else {
        null;
      }
      /* eslint-enable */
    };
  }

  @autobind
  login() {
    this.lock.on('authenticated', function (authResult) {
      this.lock.getUserInfo(authResult.accessToken, function (error) {
        console.log('=========> hello from login', authResult.accessToken)
        if (error) {
          doNotification('error', 'Wrong Credentials');
          return;
        }

        this.setSession(authResult);
      });
    });

    this.lock.show();
  }

  @autobind
  handleAuthentication() {
    console.log('=========> hello from handleAuthentication')
    localStorage.setItem('id_token', 'secret token');
    history.replace('/dashboard');
  }

  /**
   * [1] : Set the time that the access token will expire at.
   * [2] : Navigate to the home route.
   */
  setSession(authResult) {
    console.log('=========> hello from setSession')
    // [1]
    const
      expiresAt = JSON.stringify(
        (authResult.expiresIn * 1000) + new Date().getTime()
      );

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    console.log(localStorage);

    // [2]
    history.replace('/');
  }


  /**
   * [1] : Clear access token and ID token from local storage.
   * [2] : Navigate to the home route.
   */
  @autobind
  logout() {
    console.log('=========>  called from logout')
    // [1]
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    // [2]
    history.replace('/');
  }

  /**
   * Check whether the current time is past the
   * access token's expiry time.
   */
  @autobind
  isAuthenticated() {
    console.log('=========> hello from authenticated')
    return new Date().getTime() < JSON.parse(localStorage.getItem('expires_at'));
  }
}

export default new Auth0();
