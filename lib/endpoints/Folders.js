const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * @classdesc Folders endpoint
 * @class
 */
class Folders extends Base {
  /**
   * Retrieves a list of folders.
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
      endPoint: constants.FOLDERS_ENDPOINT,
      qs: searchParams
    }, callback);
  }

  /**
   * Retrieves information about a created folder.
   * @param {number} folderId Id of folder
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
   * Creates a new folder. The folder name must contain numbers, English letters or special characters: ( ) _ .
   * @param {object} params Params for new folder
   * @param {string} params.name name of folder
   * @param {number} params.parent_id id of parent folder
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  create(params, callback) {
    return this.request({
      endPoint: constants.FOLDERS_ENDPOINT,
      method: 'POST',
      data: params
    }, callback);
  }

  /**
   * Updates a folder's name.
   * @param {number} folderId Id of folder
   * @param {object} params for creating folder
   * @param {string} params.name new folder name
   * @param {function} [callback] callback function
   * @returns {Promise}
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
   * Deletes a folder item.
   * @param {number} folderId Id of folder
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
