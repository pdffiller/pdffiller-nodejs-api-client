const makeRequest = require('../api').makeRequest;

class BaseExtend {
  request(options, callback) {
    options.access_token = this.pdffiller.auth.getAccessToken(); // eslint-disable-line
    return makeRequest(options, callback);
  }
}

module.exports = BaseExtend;
