const Base = require('../extends/base');
const constants = require('../constants/');

class Applications extends Base {
  /**
   * Returns a list of all applications.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
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
   * Returns an application by id.
   * @param {number} applicationId of application
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
   * Create new application with given data.
   * @param {object} applicationInfo for creating new application
   * @param {string} applicationInfo.name name of new application
   * @param {string} applicationInfo.description description of new application
   * @param {string} applicationInfo.domain application domain
   * for authorization by grant type authorization_code
   * @param {string} [applicationInfo.logo] PNG, JPG file. The input can be type of:
   * base64 string, file or url. Only square images.
   * @param {string} [applicationInfo.embedded-domain] Domain, where client will be placed
   * @param {boolean|number} [applicationInfo.all-domains] Allow all domains flag.
   * @param {function} [callback] callback function
   * @returns {Promise} with created application information
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
   * update application by id with given data.
   * @param {number} applicationId of application
   * @param {object} applicationInfo for creating new application
   * @param {string} applicationInfo.name name of new application
   * @param {string} applicationInfo.description description of new application
   * @param {string} applicationInfo.domain application domain
   * for authorization by grant type authorization_code
   * @param {string} [applicationInfo.logo] PNG, JPG file. The input can be type of:
   * base64 string, file or url. Only square images.
   * @param {string} [applicationInfo.embedded-domain] Domain, where client will be placed
   * @param {boolean|number} [applicationInfo.all-domains] Allow all domains flag.
   * @param {function} [callback] callback function
   * @returns {Promise} with updated application information
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
   * delete application by id
   * @param {number} applicationId of application
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
   * @param {number} applicationId id of application
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
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
