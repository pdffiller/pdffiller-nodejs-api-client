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
   * @returns {Promise}
   */
  all(searchParams) {
    return this.request({
      endPoint: constants.FOLDERS_ENDPOINT,
      qs: searchParams
    });
  }

  /**
   * Returns a folder by id.
   * @param {number} folderId of folder
   * @returns {Promise}
   */
  get(folderId) {
    return this.request({
      endPoint: constants.FOLDERS_BY_ID_ENDPOINT,
      id: { folder_id: folderId }
    });
  }

  /**
   * Create a new folder with given data.
   * @param {object} params for creating folder
   * @param {string} params.name name of folder
   * @param {number} params.parent_id id of parent folder
   * @returns {Promise} with created folder information
   */
  create(params) {
    return this.request({
      endPoint: constants.FOLDERS_ENDPOINT,
      method: 'POST',
      data: params
    });
  }

  /**
   * Update a folder with given data.
   * @param {number} folderId of folder
   * @param {object} params for creating folder
   * @param {string} params.name new folder name
   * @returns {Promise} with created folder information
   */
  update(folderId, params) {
    return this.request({
      endPoint: constants.FOLDERS_BY_ID_ENDPOINT,
      method: 'PUT',
      id: { folder_id: folderId },
      data: params
    });
  }

  /**
   * Delete a folder by id.
   * @param {number} folderId of folder
   * @returns {Promise}
   */
  remove(folderId) {
    return this.request({
      endPoint: constants.FOLDERS_BY_ID_ENDPOINT,
      method: 'DELETE',
      id: { folder_id: folderId }
    });
  }
}

module.exports = Folders;