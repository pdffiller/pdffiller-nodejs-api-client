const Base = require('../extends/base');
const constants = require('../constants/');

class Tokens extends Base {
  /**
   * Returns a list of all tokens.js.
   * @param {object} [searchParams] object with params for pagination application
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.name] order
   * @returns {Promise}
   */
  get(searchParams) {
    return this.request({
      endPoint: constants.TOKENS_ENDPOINT,
      qs: searchParams
    });
  }
}

module.exports = Tokens;
