const Base = require('../extends/base');
const constants = require('../constants/');

class CustomLogos extends Base {
  /**
   * Returns a list of all custom logoss.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] custom logos on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @returns {Promise}
   */
  all(searchParams) {
    return this.request({
      endPoint: constants.CUSTOM_LOGOS_ENDPOINT,
      qs: searchParams,
    });
  }

  /**
   * Returns a custom logo by id.
   * @param {number} id of custom logo
   * @returns {Promise}
   */
  get(id) {
    return this.request({
      endPoint: constants.CUSTOM_LOGOS_BY_ID_ENDPOINT,
      id: { custom_logo_id: id }
    });
  }

  /**
   * Create new custom logo with given data.
   * @param {string | object} customLogo PNG, JPG file. The input can be type of:
   * file or url.
   * @returns {Promise} with created custom logo information
   */
  create(customLogo) {
    return this.request({
      endPoint: constants.CUSTOM_LOGOS_ENDPOINT,
      method: 'POST',
      json: typeof customLogo === 'string',
      formData: typeof customLogo !== 'string',
      data: { file: customLogo }
    });
  }

  /**
   * delete custom logo by id
   * @param {number} id of custom logos
   * @returns {Promise}
   */
  remove(id) {
    return this.request({
      endPoint: constants.CUSTOM_LOGOS_BY_ID_ENDPOINT,
      method: 'DELETE',
      id: { custom_logo_id: id }
    });
  }
}

module.exports = CustomLogos;
