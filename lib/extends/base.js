const makeRequest = require('../api').makeRequest;

class BaseExtend {
  constructor() {
    this.request = makeRequest;
  }
}

module.exports = BaseExtend;
