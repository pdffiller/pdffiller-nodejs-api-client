'use strict';

const Base = require('../extends/base');
const endpoints = require('../constants').endpoints;
const methods = require('../constants').methods;

/**
 * @classdesc Callbacks endpoint
 * @class
 */
class Callbacks extends Base {
  constructor() {
    super(arguments);
  }

  /**
   * Returns a list of callback events.
   * @param {object} [search_params] Object with query string filters
   * @param {number} [search_params.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [search_params.page] Filter by page
   * @param {string} [search_params.order_by] Filter for sort by selected field
   * @param {string} [search_params.order] Sort Method
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  all(search_params, callback) {
    return this.request({
      endPoint: endpoints.CALLBACKS_ENDPOINT,
      qs: search_params
    }, callback);
  }

  /**
   * Returns information about a specific callback by callback id.
   * @param {number} callback_id Id of callback
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(callback_id, callback) {
    return this.request({
      endPoint: endpoints.CALLBACKS_BY_ID_ENDPOINT,
      ids: { callback_id }
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
      endPoint: endpoints.CALLBACKS_ENDPOINT,
      method: methods.POST,
      data: params
    }, callback);
  }

  /**
   * Updates a callback.
   * @param {number} callback_id Id of callback
   * @param {object} params for creating callback
   * @param {string} params.callback_url Callback destination url
   * @param {string} [params.event_id] id ID of an event which triggers a callback. Supported event ids: fill_request.done, signature_request.done, constructor.done
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  update(callback_id, params, callback) {
    return this.request({
      endPoint: endpoints.CALLBACKS_BY_ID_ENDPOINT,
      method: methods.PUT,
      ids: { callback_id },
      data: params
    }, callback);
  }

  /**
   * Delete a callback.
   * @param {number} callback_id Id of callback
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  remove(callback_id, callback) {
    return this.request({
      endPoint: endpoints.CALLBACKS_BY_ID_ENDPOINT,
      method: methods.DELETE,
      ids: { callback_id }
    }, callback);
  }
}

module.exports = Callbacks;
