const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * @classdesc Users endpoint
 * @class
 */
class Users extends Base {
  /**
   * Return user information.
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  get(callback) {
    return this.request({
      endPoint: constants.USERS_ENDPOINT
    }, callback);
  }
}

module.exports = Users;
