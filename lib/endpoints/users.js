'use strict';

const Base = require('../extends/base');
const endpoints = require('../constants/endpoints');

/**
 * @classdesc Users endpoint
 * @class
 */
class Users extends Base {
  constructor() {
    super(arguments);
  }

  /**
   * Returns user information.
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(callback) {
    return this.request({
      endPoint: endpoints.USERS_ENDPOINT
    }, callback);
  }
}

module.exports = Users;
