const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * CallbacksGlobal endpoint class
 * @class CallbacksGlobal
 */
class CallbacksGlobal extends Base {
  /**
   * Returns a information about callback event.
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  get(callback) {
    return this.request({
      endPoint: constants.CALLBACKS_GLOBAL_ENDPOINT,
    }, callback);
  }

  /**
   * Update a callback.
   * @param {object} params for creating callback
   * @param {string} params.callback_url Callback destination url
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  update(params, callback) {
    return this.request({
      endPoint: constants.CALLBACKS_GLOBAL_ENDPOINT,
      method: 'PUT',
      data: params
    }, callback);
  }

  /**
   * Delete a callback.
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  remove(callback) {
    return this.request({
      endPoint: constants.CALLBACKS_GLOBAL_ENDPOINT,
      method: 'DELETE',
    }, callback);
  }
}

module.exports = CallbacksGlobal;
