const makeRequest = require('../api').makeRequest;

/**
 * BaseExtend class for endpoints
 * @class BaseExtend
 */
class BaseExtend {
  /**
   * request function
   * @param {object} options
   * @param {function} callback
   * @return {Promise|undefined}
   */
  request(options, callback) {
    options.access_token = this.pdffiller.auth.getAccessToken(); // eslint-disable-line
    return makeRequest(options, callback);
  }
}

module.exports = BaseExtend;
