const Base = require('../extends/base');
const constants = require('../constants/');

class Applications extends Base {
  /**
   * Returns a list of all applications.
   * @param {object} [searchParams] object with params for pagination application
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.name] order
   * @returns {Promise}
   */
  get(searchParams) {
    return this.request({
      endPoint: constants.APPLICATIONS_ENDPOINT,
      qs: searchParams
    });
  }

  getById(id) {
    return this.request({
      endPoint: constants.APPLICATIONS_BY_ID_ENDPOINT,
      id
    });
  }
}

module.exports = Applications;
