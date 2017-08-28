'use strict';

const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * @classdesc Tokens endpoint
 * @class
 */
class Tokens extends Base {
  /**
   * Returns a list of all tokens.
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
      endPoint: constants.TOKENS_ENDPOINT,
      qs: searchParams
    }, callback);
  }

  /**
   * Information about a created token.
   * @param {number} tokenId Id of token
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(tokenId, callback) {
    return this.request({
      endPoint: constants.TOKENS_BY_ID_ENDPOINT,
      ids: { token_id: tokenId }
    }, callback);
  }

  /**
   * Creates a new token.
   * @param {object} tokenInfo Information for creating new token
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  create(tokenInfo, callback) {
    return this.request({
      endPoint: constants.TOKENS_ENDPOINT,
      method: 'POST',
      data: {
        data: tokenInfo
      }
    }, callback);
  }

  /**
   * Updates a token.
   * @param {number} tokenId Id of token
   * @param {object} tokenInfo Information for creating new token
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  update(tokenId, tokenInfo, callback) {
    return this.request({
      endPoint: constants.TOKENS_BY_ID_ENDPOINT,
      method: 'PUT',
      ids: { token_id: tokenId },
      data: {
        data: tokenInfo
      }
    }, callback);
  }

  /**
   * Deletes a token item.
   * @param {number} tokenId Id of token
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  remove(tokenId, callback) {
    return this.request({
      endPoint: constants.TOKENS_BY_ID_ENDPOINT,
      method: 'DELETE',
      ids: { token_id: tokenId }
    }, callback);
  }
}

module.exports = Tokens;
