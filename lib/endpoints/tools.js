'use strict';

const Base = require('../extends/base');
const endpoints = require('../constants').endpoints;
const methods = require('../constants').methods;

/**
 * @classdesc Tools endpoint
 * @class
 */
class Tools extends Base {
  constructor() {
    super(arguments);
  }

  /**
   * Merge up to five docs into a single document.
   * @param {object} merge_info params for merge documents
   * @param {array} merge_info.documents array with documents id for merge
   * @param {string} merge_info.name name of new merged document
   * @param {number} merge_info.folder_id id of folder in what will save merged document
   * @param {boolean} [clear_cache] Clear cache to begin a new merge with same params
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  merge(merge_info, clear_cache, callback) {
    const requersObject = {
      method: methods.POST,
      endPoint: endpoints.TOOLS_MERGE_ENDPOINT,
      data: merge_info
    };

    if (clear_cache) {
      requersObject.qs = {
        clear_cache
      };
    }

    return this.request(requersObject, callback);
  }
}

module.exports = Tools;
