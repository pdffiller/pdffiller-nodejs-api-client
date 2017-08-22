const Base = require('../extends/base');
const constants = require('../constants/');

class Auth extends Base {
  constructor() {
    super();
    this.access_token = null;
  }
  /**
   * Exchange the client access token
   * @param {object} credentials credentials for getting access token
   * @param {boolean} [autoUpdate] autoUpdate user token after one will expire
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  authorize(credentials, autoUpdate, callback) {
    return this.request({
      endPoint: constants.AUTH_ENDPOINT,
      method: 'POST',
      data: credentials,
    }).then((tokensInfo) => {
      if (typeof tokensInfo.expires_in === 'number' && autoUpdate) {
        this.autoUpdateToken(tokensInfo);
      }

      this.setAccessToken(tokensInfo.access_token);
      if (callback) {
        callback(null, tokensInfo);
        return;
      }
      return tokensInfo; // eslint-disable-line
    })
      .catch((err) => {
        if (callback) {
          callback(err, null, null);
          return;
        }
        throw err;
      });
  }

  /**
   * set up a timer for auto update an access token
   * @private
   * @param {object} accessTokenData access token data for refresh token flow
   */
  autoUpdateToken(accessTokenData) {
    setTimeout(() => {
      this.authorize({
        grant_type: 'refresh_token',
        client_id: accessTokenData.client_id,
        client_secret: accessTokenData.client_secret,
        refresh_token: accessTokenData.refresh_token,
      }, true).catch(err => console.error('auto update token error', err)); // eslint-disable-line
    }, (accessTokenData.expires_in - 256) * 1000);
  }

  getAccessToken() {
    return this.access_token;
  }

  setAccessToken(token) {
    this.access_token = token;
  }
}

module.exports = Auth;
