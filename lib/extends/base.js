const makeRequest = require('../api').makeRequest;

class BaseExtend {
  constructor() {
    this.access_token = null;
  }

  request(options, callback) {
    console.log(this.access_token);
    console.log(this);
    options.access_token = this.getAccessToken(); // eslint-disable-line
    return makeRequest(options, callback);
  }

  getAccessToken() {
    return this.access_token;
  }

  setAccessToken(token) {
    console.log(token);
    console.log(this);
    this.access_token = token;
    console.log(this.access_token);
  }
}

module.exports = BaseExtend;
