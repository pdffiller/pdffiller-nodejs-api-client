'use strict';

const Base = require('../extends/base');
const endpoints = require('../constants').endpoints;
const methods = require('../constants').methods;

/**
 * @classdesc Folders endpoint
 * @class
 */
class Folders extends Base {
  constructor() {
    super(arguments);
  }
  /**
   * Retrieves a list of folders.
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
      endPoint: endpoints.FOLDERS_ENDPOINT,
      qs: search_params
    }, callback);
  }

  /**
   * Retrieves information about a created folder.
   * @param {number} folder_id Id of folder
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(folder_id, callback) {
    return this.request({
      endPoint: endpoints.FOLDERS_BY_ID_ENDPOINT,
      ids: { folder_id }
    }, callback);
  }

  /**
   * Creates a new folder. The folder name must contain numbers, English letters or special characters: ( ) _ .
   * @param {object} params Params for new folder
   * @param {string} params.name name of folder
   * @param {number} params.parent_id id of parent folder
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  create(params, callback) {
    return this.request({
      endPoint: endpoints.FOLDERS_ENDPOINT,
      method: methods.POST,
      data: params
    }, callback);
  }

  /**
   * Updates a folder's name.
   * @param {number} folder_id Id of folder
   * @param {object} params for creating folder
   * @param {string} params.name new folder name
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  update(folder_id, params, callback) {
    return this.request({
      endPoint: endpoints.FOLDERS_BY_ID_ENDPOINT,
      method: methods.PUT,
      ids: { folder_id },
      data: params
    }, callback);
  }

  /**
   * Deletes a folder item.
   * @param {number} folder_id Id of folder
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  remove(folder_id, callback) {
    return this.request({
      endPoint: endpoints.FOLDERS_BY_ID_ENDPOINT,
      method: methods.DELETE,
      ids: { folder_id }
    }, callback);
  }
}

module.exports = Folders;
