'use strict';

const Base = require('../extends/base');
const endpoints = require('../constants/endpoints');
const methods = require('../constants/methods');

/**
 * @classdesc Tokens endpoint
 * @class
 */
class Tokens extends Base {
  constructor() {
    super(arguments);
  }

  /**
   * Returns a list of all tokens.
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
      endPoint: endpoints.TOKENS_ENDPOINT,
      qs: search_params
    }, callback);
  }

  /**
   * Information about a created token.
   * @param {number} token_id Id of token
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(token_id, callback) {
    return this.request({
      endPoint: endpoints.TOKENS_BY_ID_ENDPOINT,
      ids: { token_id }
    }, callback);
  }

  /**
   * Creates a new token.
   * @param {object} token_info Information for creating new token
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  create(token_info, callback) {
    return this.request({
      endPoint: endpoints.TOKENS_ENDPOINT,
      method: methods.POST,
      data: {
        data: token_info
      }
    }, callback);
  }

  /**
   * Updates a token.
   * @param {number} token_id Id of token
   * @param {object} token_info Information for creating new token
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  update(token_id, token_info, callback) {
    return this.request({
      endPoint: endpoints.TOKENS_BY_ID_ENDPOINT,
      method: methods.PUT,
      ids: { token_id },
      data: {
        data: token_info
      }
    }, callback);
  }

  /**
   * Deletes a token item.
   * @param {number} token_id Id of token
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  remove(token_id, callback) {
    return this.request({
      endPoint: endpoints.TOKENS_BY_ID_ENDPOINT,
      method: methods.DELETE,
      ids: { token_id }
    }, callback);
  }
}

module.exports = Tokens;
