const Base = require('../extends/base');
const constants = require('../constants/');

class Callbacks extends Base {
  /**
   * Returns a list of all callbacks.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] callbacks on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  all(searchParams, callback) {
    return this.request({
      endPoint: constants.CALLBACKS_ENDPOINT,
      qs: searchParams
    }, callback);
  }

  /**
   * Returns a callback by id.
   * @param {number} callbackId of callback
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  get(callbackId, callback) {
    return this.request({
      endPoint: constants.CALLBACKS_BY_ID_ENDPOINT,
      ids: { callback_id: callbackId }
    }, callback);
  }

  /**
   * Create a new callback with given data.
   * @param {object} params for creating callback
   * @param {string} params.callback_url Callback destination url
   * @param {number} params.document_id Document id to associate callback information with
   * @param {string} [params.event_id] id ID of an event which triggers a callback
   * Supported event ids: fill_request.done | signature_request.done | constructor.done
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  create(params, callback) {
    return this.request({
      endPoint: constants.CALLBACKS_ENDPOINT,
      method: 'POST',
      data: params
    }, callback);
  }

  /**
   * Update a new callback with given data.
   * @param {number} callbackId of callback
   * @param {object} params for creating callback
   * @param {string} params.callback_url Callback destination url
   * @param {string} [params.event_id] id ID of an event which triggers a callback
   * Supported event ids: fill_request.done | signature_request.done | constructor.done
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  update(callbackId, params, callback) {
    return this.request({
      endPoint: constants.CALLBACKS_BY_ID_ENDPOINT,
      method: 'PUT',
      ids: { callback_id: callbackId },
      data: params
    }, callback);
  }

  /**
   * Delete a callback by id.
   * @param {number} callbackId of callback
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  remove(callbackId, callback) {
    return this.request({
      endPoint: constants.CALLBACKS_BY_ID_ENDPOINT,
      method: 'DELETE',
      ids: { callback_id: callbackId }
    }, callback);
  }
}

module.exports = Callbacks;
