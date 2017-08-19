const Base = require('../extends/base');
const constants = require('../constants/');

class Tools extends Base {
  /**
   * Merge documents to 1.
   * @param {object} mergeInfo params for merge documents
   * @param {array} mergeInfo.documents array with documents id for merge
   * @param {string} mergeInfo.name name of new merged document
   * @param {number} mergeInfo.folder_id id of folder in what will save merged document
   * @param {boolean} [clearCache] Clear cache to begin a new merge with same params
   * @returns {Promise}
   */
  merge(mergeInfo, clearCache) {
    const requersObject = {
      method: 'POST',
      endPoint: constants.TOOLS_MERGE_ENDPOINT,
      data: mergeInfo
    };

    if (clearCache) {
      requersObject.qs = {
        clean_cache: clearCache
      };
    }

    return this.request(requersObject);
  }
}

module.exports = Tools;
