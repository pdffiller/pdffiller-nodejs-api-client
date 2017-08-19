const Base = require('../extends/base');
const constants = require('../constants/');

class Tokens extends Base {
  /**
   * Returns a list of all tokens.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] tokens on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @returns {Promise}
   */
  all(searchParams) {
    return this.request({
      endPoint: constants.TOKENS_ENDPOINT,
      qs: searchParams
    });
  }

  /**
   * Returns a token by id.
   * @param {number} tokenId of token
   * @returns {Promise}
   */
  get(tokenId) {
    return this.request({
      endPoint: constants.TOKENS_BY_ID_ENDPOINT,
      id: { token_id: tokenId }
    });
  }

  /**
   * Create new token with given data.
   * @param {object} data will be added to a token
   * @returns {Promise} with created token information
   */
  create(data) {
    return this.request({
      endPoint: constants.TOKENS_ENDPOINT,
      method: 'POST',
      data
    });
  }

  /**
   * Update token by id with given data.
   * @param {number} id of token
   * @param {object} data for creating new token
   * @returns {Promise} with updated token information
   */
  update(tokenId, data) {
    return this.request({
      endPoint: constants.TOKENS_BY_ID_ENDPOINT,
      method: 'PUT',
      id: { token_id: tokenId },
      data
    });
  }

  /**
   * delete token by id
   * @param {number} tokenId id of token
   * @returns {Promise}
   */
  remove(tokenId) {
    return this.request({
      endPoint: constants.TOKENS_BY_ID_ENDPOINT,
      method: 'DELETE',
      id: { token_id: tokenId }
    });
  }
}

module.exports = Tokens;
