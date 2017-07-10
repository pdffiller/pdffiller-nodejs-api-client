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
   * @returns {Promise}
   */
  all(searchParams) {
    return this.request({
      endPoint: constants.APPLICATIONS_ENDPOINT,
      qs: searchParams,
    });
  }

  /**
   * Returns an application by id.
   * @param {string} id of application
   * @returns {Promise}
   */
  get(id) {
    return this.request({
      endPoint: constants.APPLICATIONS_BY_ID_ENDPOINT,
      id: { application_id: id }
    });
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
   * @returns {Promise} with created application information
   */
  create(applicationInfo) {
    return this.request({
      endPoint: constants.APPLICATIONS_ENDPOINT,
      method: 'POST',
      json: typeof applicationInfo.logo === 'string' || !applicationInfo.logo,
      formData: applicationInfo.logo && typeof applicationInfo.logo !== 'string',
      data: applicationInfo
    });
  }

  /**
   * update application by id with given data.
   * @param {string} id of application
   * @param {object} applicationInfo for creating new application
   * @param {string} applicationInfo.name name of new application
   * @param {string} applicationInfo.description description of new application
   * @param {string} applicationInfo.domain application domain
   * for authorization by grant type authorization_code
   * @param {string} [applicationInfo.logo] PNG, JPG file. The input can be type of:
   * base64 string, file or url. Only square images.
   * @param {string} [applicationInfo.embedded-domain] Domain, where client will be placed
   * @param {boolean|number} [applicationInfo.all-domains] Allow all domains flag.
   * @returns {Promise} with updated application information
   */
  update(id, applicationInfo) {
    return this.request({
      endPoint: constants.APPLICATIONS_BY_ID_ENDPOINT,
      method: 'PUT',
      json: typeof applicationInfo.logo === 'string' || !applicationInfo.logo,
      formData: applicationInfo.logo && typeof applicationInfo.logo !== 'string',
      id: { application_id: id },
      data: applicationInfo
    });
  }

  /**
   * delete application by id
   * @param {string} id of application
   * @returns {Promise} with updated application information
   */
  delete(id) {
    return this.request({
      endPoint: constants.APPLICATIONS_BY_ID_ENDPOINT,
      method: 'DELETE',
      id: { application_id: id }
    });
  }

  /**
   * get users of application by id
   * @param {string} id of application
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @returns {Promise} with updated application information
   */
  users(id, searchParams) {
    return this.request({
      endPoint: constants.APPLICATIONS_USERS_BY_ID_ENDPOINT,
      id: { application_id: id },
      qs: searchParams
    });
  }
}

module.exports = Applications;
