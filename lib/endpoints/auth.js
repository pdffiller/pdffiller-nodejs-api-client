'use strict';

const Base = require('../extends/base');
const endpoints = require('../constants').endpoints;
const methods = require('../constants').methods;

/**
 * @classdesc Auth endpoint
 * @class
 */
class Auth extends Base {
  constructor() {
    super();
    this.access_token = null;
  }
  /**
   * Obtains authentication token based on provided Client ID and Client Secret
   * @param {object} credentials credentials for getting access token
   * @param {boolean} [auto_update] auto update user token after one will expire
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  authorize(credentials, auto_update, callback) {
    return this.request({
      endPoint: endpoints.AUTH_ENDPOINT,
      method: methods.POST,
      data: credentials,
    }).then((tokensInfo) => {
      if (typeof tokensInfo.expires_in === 'number' && auto_update) {
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
   * Set up a timer for auto update an access token
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

  /**
   * Return an access token.
   * @return {string}
   */
  getAccessToken() {
    return this.access_token;
  }

  /**
   * Set an access token.
   * @param {string} token An access token string
   */
  setAccessToken(token) {
    this.access_token = token;
  }
}

module.exports = Auth;
