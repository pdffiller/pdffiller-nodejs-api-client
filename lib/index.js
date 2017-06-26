/**
 * @callback requestCallback
 * @param {object} error
 * @param {object} response data
 */

const Api = require('./api.js');

let INSTANCE; // discus about it

class PDFfillerApi {
  constructor(config) {
    config = config || {};
    INSTANCE = this;
    this.api = new Api(this);
    this.autoTokenUpdate = config.autoTokenUpdate || true;
  }

  /**
   * Exchange the client access token
   * @param {object} credentials The authentication credentials for getting access token
   * @param {requestCallback} [callback] Called with the result object / optional
   * @returns {Promise}
   */
  authorization(credentials, callback) {
    return this.api.authorization(credentials, callback);
  }

  /**
   * Exchange the client access token
   * @param {object} [searchParams] object with params for pagination application
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.name] order
   * @param {requestCallback} [callback] Called with the result object / optional
   * @returns {Promise}
   */
  getApplication(searchParams, callback) {
    const options = {};
    options.endPoint = 'applications';
    options.method = 'GET';
    options.qs = searchParams || null;
    return this.api.makeRequest(options, callback);
  }
}

/**
 * Create object instance
 * @param   {object} [config]
 * @param   {boolean} [config.autoTokenUpdate=true] auto update token using refresh_token
 * @returns {instance}
 */

function createApiClientInstance(config) {
  if (INSTANCE) return INSTANCE;
  return new PDFfillerApi(config);
}

module.exports = createApiClientInstance;
