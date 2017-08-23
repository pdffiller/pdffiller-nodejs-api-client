const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * @classdesc CustomLogos endpoint
 * @class
 */
class CustomLogos extends Base {
  /**
   * Retrieves a list of added user logos.
   * @param {object} [searchParams] Object with query string filters
   * @param {number} [searchParams.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [searchParams.page] Filter by page
   * @param {string} [searchParams.order_by] Filter for sort by selected field
   * @param {string} [searchParams.order] Sort Method
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
   * Retrieves information about an added custom logo.
   * @param {number} customLogoId Id of custom logo
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
   * Adds a new custom logo from a url or multipart.
   * @param {string | object} customLogo PNG, JPG file. The input can be type of:
   * file or url.
   * @param {function} [callback] callback function
   * @returns {Promise}
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
   * Deletes user custom logo item.
   * @param {number} customLogoId Id of custom logos
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
