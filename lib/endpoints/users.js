const Base = require('../extends/base');
const constants = require('../constants/');

class User extends Base {
  /**
   * Return user information.
   * @returns {Promise}
   */
  get() {
    return this.request({
      endPoint: constants.USERS_ENDPOINT
    });
  }
}

module.exports = User;
