const Base = require('../extends/base');
const constants = require('../constants/');

class CallbacksGlobal extends Base {
  /**
   * Returns a information about callback event.
   * @returns {Promise}
   */
  get() {
    return this.request({
      endPoint: constants.CALLBACKS_GLOBAL_BY_ID_ENDPOINT,
    });
  }

  /**
   * Update a callback.
   * @param {object} params for creating callback
   * @param {string} params.callback_url Callback destination url
   * @returns {Promise}
   */
  update(params) {
    return this.request({
      endPoint: constants.CALLBACKS_GLOBAL_BY_ID_ENDPOINT,
      method: 'PUT',
      data: params
    });
  }

  /**
   * Delete a callback.
   * @param {string} id of callback
   * @returns {Promise} with updated application information
   */
  remove() {
    return this.request({
      endPoint: constants.CALLBACKS_GLOBAL_BY_ID_ENDPOINT,
      method: 'DELETE',
    });
  }
}

module.exports = CallbacksGlobal;
