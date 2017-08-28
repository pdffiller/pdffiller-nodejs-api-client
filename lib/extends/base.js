'use strict';

const makeRequest = require('../api').makeRequest;

/**
 * BaseExtend class for endpoints
 * @class BaseExtend
 */
class BaseExtend {
  constructor(params) {
    this.auth = {};
    if (params) {
      this.auth = params[0];
    }
  }
  /**
   * request function
   * @param {object} options
   * @param {function} callback
   * @return {Promise}
   */
  request(options, callback) {
    if (this.auth.getAccessToken) {
      options.access_token = this.auth.getAccessToken(); // eslint-disable-line
    }
    return makeRequest(options, callback);
  }
}

module.exports = BaseExtend;
