const Api = require('./Api.js');

let INSTANCE; // discus about it

class PDFfillerApi {
  constructor(config) {
    config = config || {};
    INSTANCE = this;
    this.api = new Api(this);
    this.autoTokenUpdate = config.autoTokenUpdate || true;
    this.token = null;
  }

  /**
   * Exchange the client access token
   * @param {object} credentials The authentication credentials for getting access token
   * @returns {Promise}
   */

  authorization(credentials) {
    return this.api.authorization(credentials);
  }

  /**
   * get the client access token
   * @returns {string} access token string
   */

  getAccessToken() {
    return this.token || '';
  }

  /**
   * Setting the client access token for requests
   * @param {string} accessToken token
   */

  setAccessToken(accessToken) {
    this.token = accessToken;
  }

  /**
   * Exchange the client access token
   * @param {object} [searchParams] object with params for pagination application
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.name] order
   * @returns {Promise}
   */

  getApplication(searchParams) {
    const options = {};
    options.endPoint = 'applications';
    options.qs = searchParams || null;
    return this.api.makeRequest(options);
  }

  getTokens(searchParams) {
    const options = {};
    options.endPoint = 'tokens';
    options.qs = searchParams || null;
    return this.api.makeRequest(options);
  }
}

/**
 * Get a object instance
 * @param {object} [config]
 * @param {boolean} [config.autoTokenUpdate=true] set up auto update token using refresh_token
 * @returns {instance}
 */

function getApiClientInstance(config) {
  if (INSTANCE) return INSTANCE;
  return new PDFfillerApi(config);
}

module.exports = getApiClientInstance;
