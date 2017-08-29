'use strict';

const Base = require('../extends/base');
const endpoints = require('../constants').endpoints;
const methods = require('../constants').methods;

/**
 * @classdesc CallbacksGlobal endpoint
 * @class
 */
class CallbacksGlobal extends Base {
  constructor() {
    super(arguments);
  }

  /**
   * Returns a information about callback event.
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(callback) {
    return this.request({
      endPoint: endpoints.CALLBACKS_GLOBAL_ENDPOINT,
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
      endPoint: endpoints.CALLBACKS_GLOBAL_ENDPOINT,
      method: methods.PUT,
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
      endPoint: endpoints.CALLBACKS_GLOBAL_ENDPOINT,
      method: methods.DELETE,
    }, callback);
  }
}

module.exports = CallbacksGlobal;
