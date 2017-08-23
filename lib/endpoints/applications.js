const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * @classdesc Applications endpoint
 * @class
 */
class Applications extends Base {
  /**
   * Returns a list of all applications.
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
      endPoint: constants.APPLICATIONS_ENDPOINT,
      qs: searchParams
    }, callback);
  }

  /**
   * Lists information about the created application.
   * @param {number} applicationId Id of application
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  get(applicationId, callback) {
    return this.request({
      endPoint: constants.APPLICATIONS_BY_ID_ENDPOINT,
      ids: { application_id: applicationId }
    }, callback);
  }

  /**
   * Creates a new application. Parameters for all-domains can be 0/1 or true/false.
   * @param {object} applicationInfo Information for creating new application
   * @param {string} applicationInfo.name Application Name
   * @param {string} applicationInfo.description Application Description
   * @param {string} applicationInfo.domain Application Domain for authorization by grant type authorization_code
   * @param {string} applicationInfo.logo PNG, JPG file. The input can be type of: base64 string, file or url. Only square images.
   * @param {string} applicationInfo.embedded-domain Domain, where Client will be placed
   * @param {boolean|number} applicationInfo.all-domains Allow all domains flag. All domain parameters will be: 0/1 (true/false)
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  create(applicationInfo, callback) {
    return this.request({
      endPoint: constants.APPLICATIONS_ENDPOINT,
      method: 'POST',
      formData: applicationInfo.logo && typeof applicationInfo.logo !== 'string',
      data: applicationInfo
    }, callback);
  }

  /**
   * Updates application. Parameters for all-domains can be 0/1 or true/false.
   * @param {number} applicationId Id of application
   * @param {object} applicationInfo Information for updating application
   * @param {string} applicationInfo.name Application Name
   * @param {string} applicationInfo.description Application Description
   * @param {string} applicationInfo.domain Application Domain for authorization by grant type authorization_code
   * @param {string} applicationInfo.logo PNG, JPG file. The input can be type of: base64 string, file or url. Only square images.
   * @param {string} applicationInfo.embedded-domain Domain, where Client will be placed
   * @param {boolean|number} applicationInfo.all-domains Allow all domains flag. All domain parameters will be: 0/1 (true/false)
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  update(applicationId, applicationInfo, callback) {
    return this.request({
      endPoint: constants.APPLICATIONS_BY_ID_ENDPOINT,
      method: 'PUT',
      formData: applicationInfo.logo && typeof applicationInfo.logo !== 'string',
      ids: { application_id: applicationId },
      data: applicationInfo
    }, callback);
  }

  /**
   * Deletes application item.
   * @param {number} applicationId Id of application
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  remove(applicationId, callback) {
    return this.request({
      endPoint: constants.APPLICATIONS_BY_ID_ENDPOINT,
      method: 'DELETE',
      ids: { application_id: applicationId }
    }, callback);
  }

  /**
   * Retrieves a list of users who authorized with the requested application
   * @param {number} applicationId Id of application
   * @param {object} [searchParams] Object with query string filters
   * @param {number} [searchParams.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [searchParams.page] Filter by page
   * @param {string} [searchParams.order_by] Filter for sort by selected field
   * @param {string} [searchParams.order] Sort Method
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  getUsers(applicationId, searchParams, callback) {
    return this.request({
      endPoint: constants.APPLICATIONS_USERS_BY_ID_ENDPOINT,
      ids: { application_id: applicationId },
      qs: searchParams,
    }, callback);
  }
}

module.exports = Applications;
