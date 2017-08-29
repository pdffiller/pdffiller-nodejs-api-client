'use strict';

const Base = require('../extends/base');
const endpoints = require('../constants').endpoints;
const methods = require('../constants').methods;


/**
 * @classdesc CustomLogos endpoint
 * @class
 */
class CustomLogos extends Base {
  constructor() {
    super(arguments);
  }

  /**
   * Retrieves a list of added user logos.
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
      endPoint: endpoints.CUSTOM_LOGOS_ENDPOINT,
      qs: search_params,
    }, callback);
  }

  /**
   * Retrieves information about an added custom logo.
   * @param {number} custom_logo_id Id of custom logo
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(custom_logo_id, callback) {
    return this.request({
      endPoint: endpoints.CUSTOM_LOGOS_BY_ID_ENDPOINT,
      ids: { custom_logo_id }
    }, callback);
  }

  /**
   * Adds a new custom logo from a url or multipart.
   * @param {string | object} custom_logo PNG, JPG file. The input can be type of:
   * file or url.
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  create(custom_logo, callback) {
    return this.request({
      endPoint: endpoints.CUSTOM_LOGOS_ENDPOINT,
      method: methods.POST,
      formData: typeof customLogo !== 'string',
      data: { file: custom_logo }
    }, callback);
  }

  /**
   * Deletes user custom logo item.
   * @param {number} custom_logo_id Id of custom logos
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  remove(custom_logo_id, callback) {
    return this.request({
      endPoint: endpoints.CUSTOM_LOGOS_BY_ID_ENDPOINT,
      method: methods.DELETE,
      ids: { custom_logo_id }
    }, callback);
  }
}

module.exports = CustomLogos;
