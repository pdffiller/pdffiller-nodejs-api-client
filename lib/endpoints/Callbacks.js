'use strict';

const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * @classdesc Callbacks endpoint
 * @class
 */
class Callbacks extends Base {
  /**
   * Returns a list of callback events.
   * @param {object} [searchParams] Object with query string filters
   * @param {number} [searchParams.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [searchParams.page] Filter by page
   * @param {string} [searchParams.order_by] Filter for sort by selected field
   * @param {string} [searchParams.order] Sort Method
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  all(searchParams, callback) {
    return this.request({
      endPoint: constants.CALLBACKS_ENDPOINT,
      qs: searchParams
    }, callback);
  }

  /**
   * Returns information about a specific callback by callback id.
   * @param {number} callbackId Id of callback
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(callbackId, callback) {
    return this.request({
      endPoint: constants.CALLBACKS_BY_ID_ENDPOINT,
      ids: { callback_id: callbackId }
    }, callback);
  }

  /**
   * Creates a new callback associated with a specific document event.
   * @param {object} params Params for creating callback
   * @param {string} params.callback_url Callback destination url
   * @param {number} params.document_id Document id to associate callback information with
   * @param {string} params.event_id ID of an event which triggers a callback. Supported event ids: fill_request.done, signature_request.done, constructor.done
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  create(params, callback) {
    return this.request({
      endPoint: constants.CALLBACKS_ENDPOINT,
      method: 'POST',
      data: params
    }, callback);
  }

  /**
   * Updates a callback.
   * @param {number} callbackId Id of callback
   * @param {object} params for creating callback
   * @param {string} params.callback_url Callback destination url
   * @param {string} [params.event_id] id ID of an event which triggers a callback. Supported event ids: fill_request.done, signature_request.done, constructor.done
   * @param {function} [callback] callback function
   * @returns {Promise|void}
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
   * Delete a callback.
   * @param {number} callbackId Id of callback
   * @param {function} [callback] callback function
   * @returns {Promise|void}
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
