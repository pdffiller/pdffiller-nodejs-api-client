'use strict';

const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * @classdesc CallbacksGlobal endpoint
 * @class
 */
class CallbacksGlobal extends Base {
  /**
   * Returns a information about callback event.
   * @param {function} [callback] callback function
   * @returns {Promise|void}
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
   * @returns {Promise|void}
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
   * @returns {Promise|void}
   */
  remove(callback) {
    return this.request({
      endPoint: constants.CALLBACKS_GLOBAL_ENDPOINT,
      method: 'DELETE',
    }, callback);
  }
}

module.exports = CallbacksGlobal;
