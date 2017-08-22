const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * User endpoint class
 * @class User
 */
class User extends Base {
  /**
   * Return user information.
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  get(callback) {
    return this.request({
      endPoint: constants.USERS_ENDPOINT
    }, callback);
  }
}

module.exports = User;
