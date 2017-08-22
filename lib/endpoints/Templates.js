const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * Templates endpoint class
 * @class Templates
 */
class Templates extends Base {
  /**
   * Retrieves a list of uploaded documents.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.folder_id] folder id
   * @param {number} [searchParams.date_from] Filter by date from. Example: 2016-12-31.
   * @param {number} [searchParams.date_to] Filter by date to. Example: 2017-12-31.
   * @param {number} [searchParams.per_page] items on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  all(searchParams, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_ENDPOINT,
      qs: searchParams,
    }, callback);
  }

  /**
   * Returns a template by id.
   * @param {number} templateId of template
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  get(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_BY_ID_ENDPOINT,
      ids: { template_id: templateId }
    }, callback);
  }

  /**
   * Create new template with given data.
   * @param {object} templateInfo for creating new template
   * @param {string | object} templateInfo.file url to file, or file
   * @param {string} templateInfo.name some_name_for_new_template
   * @param {number} templateInfo.folder_id folder id
   * @param {function} [callback] callback function
   * @returns {Promise|undefined} with created template information
   */
  create(templateInfo, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_ENDPOINT,
      method: 'POST',
      formData: templateInfo.file !== 'string',
      data: templateInfo
    }, callback);
  }

  /**
   * Update template with given data.
   * @param {number} templateId id of template
   * @param {object} templateInfo for creating new template
   * @param {string} templateInfo.name some_name_for_new_template
   * @param {number} templateInfo.folder_id folder id
   * @param {function} [callback] callback function
   * @returns {Promise|undefined} with created template information
   */
  update(templateId, templateInfo, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_BY_ID_ENDPOINT,
      method: 'PUT',
      data: templateInfo,
      ids: { template_id: templateId }
    }, callback);
  }

  /**
   * Download template by id.
   * @param {number} templateId id of template
   * @param {function} [callback] callback function
   * @returns {Promise|undefined} with buffer
   */
  download(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_DOWNLOAD_ENDPOINT,
      ids: { template_id: templateId },
    }, callback);
  }

  /**
   * Retrieves a list of roles for a document template.
   * @param {number} templateId id of template
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  roles(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_ROLES_ENDPOINT,
      ids: { template_id: templateId }
    }, callback);
  }

  /**
   * Download original template by id.
   * @param {number} templateId id of template
   * @param {function} [callback] callback function
   * @returns {Promise|undefined} with buffer
   */
  downloadOriginal(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_DOWNLOAD_ORIGINAL_ENDPOINT,
      ids: { template_id: templateId }
    }, callback);
  }

  /**
   * Deletes a document template item.
   * @param {number} templateId id of template
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  remove(templateId, callback) {
    return this.request({
      method: 'DELETE',
      endPoint: constants.TEMPLATES_BY_ID_ENDPOINT,
      ids: { template_id: templateId },
    }, callback);
  }

  /**
   * Get values for a fillable form.
   * @param {number} templateId id of template
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  fields(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_FIELDS_ENDPOINT,
      ids: { template_id: templateId }
    }, callback);
  }

  /**
   * Retrieves child documents for a selected document template.
   * @param {number} templateId id of template
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] templates on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order] order
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  childs(templateId, searchParams, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_FILLED_DOCS_ENDPOINT,
      ids: { template_id: templateId },
      qs: searchParams
    }, callback);
  }

  /**
   * Downloads a zip archive of document signatures.
   * @param {number} templateId id of template
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  downloadSignatures(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_DOWNLOAD_SIGNATURES_ENDPOINT,
      ids: { template_id: templateId },
    }, callback);
  }

  /**
   * Populates a fillable form template which was created with the PDFfiller editor.
   * @param {number} templateId id of template
   * @param {object} fillableInfo object with fillable params
   * @param {object} fillableInfo.fillable_fields fields data what will be filled to template
   * @param {number} fillableInfo.folder_id folder id
   * @param {string} fillableInfo.name Name created for a newly filled document
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  fill(templateId, fillableInfo, callback) {
    return this.request({
      method: 'POST',
      endPoint: constants.TEMPLATES_BY_ID_ENDPOINT,
      ids: { template_id: templateId },
      data: fillableInfo
    }, callback);
  }

  /**
   * Creates a new share link to a document.
   * @param {number} templateId id of template
   * @param {object} [constructorInfo] object with fillable params
   * @param {number} [constructorInfo.expire Number of days left until link expires. Max value - 1000
   * @param {string} [constructorInfo.callback_url Callback destination url
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  createShareLink(templateId, constructorInfo, callback) {
    return this.request({
      method: 'POST',
      endPoint: constants.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      ids: { template_id: templateId },
      data: constructorInfo
    }, callback);
  }

  /**
   * Retrieves a list of hash.
   * @param {number} templateId id of template
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  getShareLink(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      ids: { template_id: templateId },
    }, callback);
  }

  /**
   * Retrieves a list of hash.
   * @param {number} templateId id of template
   * @param {string} hash Hash for shared link
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  removeShareLinkByHash(templateId, hash, callback) {
    return this.request({
      method: 'DELETE',
      endPoint: constants.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      ids: { template_id: templateId },
      hash
    }, callback);
  }

  /**
   * Deletes all share links to a document by id.
   * @param {number} templateId id of template
   * @param {function} [callback] callback function
   * @returns {Promise|undefined}
   */
  removeAllShareLink(templateId, callback) {
    return this.request({
      method: 'DELETE',
      endPoint: constants.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      ids: { template_id: templateId },
    }, callback);
  }
}

module.exports = Templates;
