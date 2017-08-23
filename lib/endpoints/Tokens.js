const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * @classdesc Tokens endpoint
 * @class
 */
class Tokens extends Base {
  /**
   * Returns a list of all tokens.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] tokens on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  all(searchParams, callback) {
    return this.request({
      endPoint: constants.TOKENS_ENDPOINT,
      qs: searchParams
    }, callback);
  }

  /**
   * Returns a token by id.
   * @param {number} tokenId of token
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  get(tokenId, callback) {
    return this.request({
      endPoint: constants.TOKENS_BY_ID_ENDPOINT,
      ids: { token_id: tokenId }
    }, callback);
  }

  /**
   * Create new token with given data.
   * @param {object} data will be added to a token
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  create(data, callback) {
    return this.request({
      endPoint: constants.TOKENS_ENDPOINT,
      method: 'POST',
      data
    }, callback);
  }

  /**
   * Update token by id with given data.
   * @param {number} id of token
   * @param {object} data for creating new token
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  update(tokenId, data, callback) {
    return this.request({
      endPoint: constants.TOKENS_BY_ID_ENDPOINT,
      method: 'PUT',
      ids: { token_id: tokenId },
      data
    }, callback);
  }

  /**
   * delete token by id
   * @param {number} tokenId id of token
   * @param {function} [callback] callback function
   * @returns {Promise}
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
