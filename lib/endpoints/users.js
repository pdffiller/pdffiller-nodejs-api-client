const Base = require('../extends/base');
const constants = require('../constants/');

class User extends Base {
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

module.exports = User;
