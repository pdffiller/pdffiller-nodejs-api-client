const version = require('../package.json').version;
const request = require('request-promise');

const baseUrl = 'https://api.pdffiller.com/v2/';

class ApiRequests {
  constructor(context) {
    this.context = context;
  }

  authorization(credentials, callback) {
    return request({
      url: `${baseUrl}oauth/token`,
      headers: {
        client: `node-js_ver-${version}`
      },
      method: 'POST',
      json: true,
      body: credentials
    }).then((accessToken) => {
      this.context.token = accessToken.access_token;
      if (typeof accessToken.expires_in === 'number' && this.context.autoTokenUpdate) {
        setTimeout(() => {
          this.authorization({
            grant_type: 'refresh_token',
            client_id: credentials.client_id,
            client_secret: credentials.client_secret,
            refresh_token: accessToken.refresh_token,
          });
        }, (accessToken.expires_in - 600) * 1000);
      }

      if (callback) {
        callback(null, accessToken);
      }

      return accessToken;
    }, (err) => {
      if (callback) {
        callback(err, null);
      }
      throw err;
    });
  }

  makeRequest(options, callback) {
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
    }).then((data) => {
      if (callback) {
        callback(null, data);
      }
      return data;
    }, (err) => {
      if (callback) {
        callback(err, null);
      }
      throw err;
    });
  }
}

module.exports = ApiRequests;

