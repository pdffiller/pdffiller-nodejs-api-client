const Base = require('../extends/base');
const constants = require('../constants/');

class CustomLogos extends Base {
  /**
   * Returns a list of all custom logos.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] custom logos on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  all(searchParams, callback) {
    return this.request({
      endPoint: constants.CUSTOM_LOGOS_ENDPOINT,
      qs: searchParams,
    }, callback);
  }

  /**
   * Returns a custom logo by id.
   * @param {number} customLogoId of custom logo
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  get(customLogoId, callback) {
    return this.request({
      endPoint: constants.CUSTOM_LOGOS_BY_ID_ENDPOINT,
      ids: { custom_logo_id: customLogoId }
    }, callback);
  }

  /**
   * Create new custom logo with given data.
   * @param {string | object} customLogo PNG, JPG file. The input can be type of:
   * file or url.
   * @param {function} [callback] callback function
   * @returns {Promise} with created custom logo information
   */
  create(customLogo, callback) {
    return this.request({
      endPoint: constants.CUSTOM_LOGOS_ENDPOINT,
      method: 'POST',
      formData: typeof customLogo !== 'string',
      data: { file: customLogo }
    }, callback);
  }

  /**
   * delete custom logo by id
   * @param {number} customLogoId of custom logos
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  remove(customLogoId, callback) {
    return this.request({
      endPoint: constants.CUSTOM_LOGOS_BY_ID_ENDPOINT,
      method: 'DELETE',
      ids: { custom_logo_id: customLogoId }
    }, callback);
  }
}

module.exports = CustomLogos;
