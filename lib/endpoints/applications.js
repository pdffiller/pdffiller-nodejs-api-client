'use strict';

const Base = require('../extends/base');
const endpoints = require('../constants/endpoints');
const methods = require('../constants/methods');

/**
 * @classdesc Applications endpoint
 * @class
 */
class Applications extends Base {
  constructor() {
    super(arguments);
  }

  /**
   * Returns a list of all applications.
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
      endPoint: endpoints.APPLICATIONS_ENDPOINT,
      qs: search_params
    }, callback);
  }

  /**
   * Lists information about the created application.
   * @param {number} application_id Id of application
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(application_id, callback) {
    return this.request({
      endPoint: endpoints.APPLICATIONS_BY_ID_ENDPOINT,
      ids: { application_id }
    }, callback);
  }

  /**
   * Creates a new application. Parameters for all-domains can be 0/1 or true/false.
   * @param {object} application_info Information for creating new application
   * @param {string} application_info.name Application Name
   * @param {string} application_info.description Application Description
   * @param {string} application_info.domain Application Domain for authorization by grant type authorization_code
   * @param {string} application_info.logo PNG, JPG file. The input can be type of: base64 string, file or url. Only square images.
   * @param {string} application_info.embedded-domain Domain, where Client will be placed
   * @param {boolean|number} application_info.all-domains Allow all domains flag. All domain parameters will be: 0/1 (true/false)
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  create(application_info, callback) {
    return this.request({
      endPoint: endpoints.APPLICATIONS_ENDPOINT,
      method: methods.POST,
      formData: application_info.logo && typeof application_info.logo !== 'string',
      data: application_info
    }, callback);
  }

  /**
   * Updates application. Parameters for all-domains can be 0/1 or true/false.
   * @param {number} application_id Id of application
   * @param {object} application_info Information for updating application
   * @param {string} application_info.name Application Name
   * @param {string} application_info.description Application Description
   * @param {string} application_info.domain Application Domain for authorization by grant type authorization_code
   * @param {string} application_info.logo PNG, JPG file. The input can be type of: base64 string, file or url. Only square images.
   * @param {string} application_info.embedded-domain Domain, where Client will be placed
   * @param {boolean|number} application_info.all-domains Allow all domains flag. All domain parameters will be: 0/1 (true/false)
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  update(application_id, application_info, callback) {
    return this.request({
      endPoint: endpoints.APPLICATIONS_BY_ID_ENDPOINT,
      method: methods.PUT,
      formData: application_info.logo && typeof application_info.logo !== 'string',
      ids: { application_id },
      data: application_info
    }, callback);
  }

  /**
   * Deletes application item.
   * @param {number} application_id Id of application
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  remove(application_id, callback) {
    return this.request({
      endPoint: endpoints.APPLICATIONS_BY_ID_ENDPOINT,
      method: methods.DELETE,
      ids: { application_id }
    }, callback);
  }

  /**
   * Retrieves a list of users who authorized with the requested application
   * @param {number} application_id Id of application
   * @param {object} [search_params] Object with query string filters
   * @param {number} [search_params.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [search_params.page] Filter by page
   * @param {string} [search_params.order_by] Filter for sort by selected field
   * @param {string} [search_params.order] Sort Method
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getUsers(application_id, search_params, callback) {
    return this.request({
      endPoint: endpoints.APPLICATIONS_USERS_BY_ID_ENDPOINT,
      ids: { application_id },
      qs: search_params,
    }, callback);
  }
}

module.exports = Applications;
