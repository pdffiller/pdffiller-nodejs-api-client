const Base = require('../extends/base');
const constants = require('../constants/');

class Folders extends Base {
  /**
   * Returns a list of all folders.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] folders on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  all(searchParams, callback) {
    return this.request({
      endPoint: constants.FOLDERS_ENDPOINT,
      qs: searchParams
    }, callback);
  }

  /**
   * Returns a folder by id.
   * @param {number} folderId of folder
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  get(folderId, callback) {
    return this.request({
      endPoint: constants.FOLDERS_BY_ID_ENDPOINT,
      ids: { folder_id: folderId }
    }, callback);
  }

  /**
   * Create a new folder with given data.
   * @param {object} params for creating folder
   * @param {string} params.name name of folder
   * @param {number} params.parent_id id of parent folder
   * @param {function} [callback] callback function
   * @returns {Promise} with created folder information
   */
  create(params, callback) {
    return this.request({
      endPoint: constants.FOLDERS_ENDPOINT,
      method: 'POST',
      data: params
    }, callback);
  }

  /**
   * Update a folder with given data.
   * @param {number} folderId of folder
   * @param {object} params for creating folder
   * @param {string} params.name new folder name
   * @param {function} [callback] callback function
   * @returns {Promise} with created folder information
   */
  update(folderId, params, callback) {
    return this.request({
      endPoint: constants.FOLDERS_BY_ID_ENDPOINT,
      method: 'PUT',
      ids: { folder_id: folderId },
      data: params
    }, callback);
  }

  /**
   * Delete a folder by id.
   * @param {number} folderId of folder
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  remove(folderId, callback) {
    return this.request({
      endPoint: constants.FOLDERS_BY_ID_ENDPOINT,
      method: 'DELETE',
      ids: { folder_id: folderId }
    }, callback);
  }
}

module.exports = Folders;
