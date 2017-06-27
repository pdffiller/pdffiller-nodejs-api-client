const version = require('../package.json').version;
const request = require('request-promise');

const baseUrl = 'https://api.pdffiller.com/v2/';

class ApiRequests {
  constructor(context) {
    this.context = context;
  }

  authorization(credentials) {
    return request({
      url: `${baseUrl}oauth/token`,
      headers: {
        client: `node-js_ver-${version}`
      },
      method: 'POST',
      json: true,
      body: credentials
    }).then((accessToken) => {
      this.context.setAccessToken(accessToken.access_token);
      if (typeof accessToken.expires_in === 'number' && this.context.autoTokenUpdate) {
        this.autoUpdateToken(accessToken);
      }

      return accessToken;
    }, (err) => {
      throw err;
    });
  }

  autoUpdateToken(accessToken) {
    setTimeout(() => {
      this.authorization({
        grant_type: 'refresh_token',
        client_id: accessToken.client_id,
        client_secret: accessToken.client_secret,
        refresh_token: accessToken.refresh_token,
      });
    }, (accessToken.expires_in - 600) * 1000);
  }

  makeRequest(options) {
    return request({
      url: `${baseUrl}${options.endPoint}`,
      headers: {
        client: `node-js_ver-${version}`,
        Authorization: `Bearer ${this.context.token}`
      },
      method: options.method || 'GET',
      json: options.isJSON || false,
      body: options.data || null,
      qs: options.qs || null
    });
  }
}

module.exports = ApiRequests;

