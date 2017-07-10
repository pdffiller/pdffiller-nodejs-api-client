const api = require('./api');
const Applications = require('./endpoints/applications');
const Callbacks = require('./endpoints/callbacks');
const Tokens = require('./endpoints/tokens');
const Folders = require('./endpoints/folders');
const User = require('./endpoints/users');

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
    this.callbacks = new Callbacks();
    this.folders = new Folders();
    this.tokens = new Tokens();
    this.user = new User();
  }
}

module.exports = {
  PDFfiller: new PDFfillerApi(),
  PDFfillerConstructor: () => new PDFfillerApi()
};
