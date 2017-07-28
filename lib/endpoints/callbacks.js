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
   * @returns {Promise}
   */
  all(searchParams) {
    return this.request({
      endPoint: constants.CALLBACKS_ENDPOINT,
      qs: searchParams
    });
  }

  /**
   * Returns a callback by id.
   * @param {number} callbackId of callback
   * @returns {Promise}
   */
  get(callbackId) {
    return this.request({
      endPoint: constants.CALLBACKS_BY_ID_ENDPOINT,
      id: { callback_id: callbackId }
    });
  }

  /**
   * Create a new callback with given data.
   * @param {object} params for creating callback
   * @param {string} params.callback_url Callback destination url
   * @param {number} params.document_id Document id to associate callback information with
   * @param {string} [params.event_id] id ID of an event which triggers a callback
   * Supported event ids: fill_request.done | signature_request.done | constructor.done
   * @returns {Promise}
   */
  create(params) {
    return this.request({
      endPoint: constants.CALLBACKS_ENDPOINT,
      method: 'POST',
      data: params
    });
  }

  /**
   * Update a new callback with given data.
   * @param {number} callbackId of callback
   * @param {object} params for creating callback
   * @param {string} params.callback_url Callback destination url
   * @param {string} [params.event_id] id ID of an event which triggers a callback
   * Supported event ids: fill_request.done | signature_request.done | constructor.done
   * @returns {Promise}
   */
  update(callbackId, params) {
    return this.request({
      endPoint: constants.CALLBACKS_BY_ID_ENDPOINT,
      method: 'PUT',
      id: { callback_id: callbackId },
      data: params
    });
  }

  /**
   * Delete a callback by id.
   * @param {number} callbackId of callback
   * @returns {Promise}
   */
  remove(callbackId) {
    return this.request({
      endPoint: constants.CALLBACKS_BY_ID_ENDPOINT,
      method: 'DELETE',
      id: { callback_id: callbackId }
    });
  }
}

module.exports = Callbacks;
