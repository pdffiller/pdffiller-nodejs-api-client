const api = require('./api');
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
    this.authorization = api.authorization;
    this.getAccessToken = api.getAccessToken;
    this.setAccessToken = api.setAccessToken;

    this.applications = new Applications();
    this.user = new User();
    this.tokens = new Tokens();
  }
}

module.exports = {
  PDFfiller: new PDFfillerApi(),
  PDFfillerConstructor: () => new PDFfillerApi()
};
