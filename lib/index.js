const authorization = require('./api').authorization;
const Applications = require('./endpoints/applications');
const User = require('./endpoints/user');
const Tokens = require('./endpoints/tokens');

/**
 * The JavaScript API to PDFFiller services
 * @class PDFfillerApi
 */

class PDFfillerApi {
  /**
   * @constructor
   * @function
   */
  constructor() {
    this.applications = new Applications();
    this.user = new User();
    this.tokens = new Tokens();
  }

  /**
   * Exchange the client access token
   * @param {object|string} credentials credentials for getting access token or access token string
   * @param {boolean} [autoUpdate] autoUpdate user token after one will expire
   * @returns {Promise|undefined}
   */
  authorization(credentials, autoUpdate) { // eslint-disable-line
    return authorization(credentials, autoUpdate);
  }
}

module.exports = new PDFfillerApi();
