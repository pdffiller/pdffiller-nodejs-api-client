const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * @classdesc Templates endpoint
 * @class
 */
class Templates extends Base {
  /**
   * Retrieves a list of uploaded documents.
   * @param {object} [searchParams] Object with query string filters
   * @param {number} [searchParams.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [searchParams.page] Filter by page
   * @param {string} [searchParams.order_by] Filter for sort by selected field
   * @param {string} [searchParams.order] Sort Method
   * @param {number} [searchParams.date_from] Filter by date from. Example: 2016-12-31.
   * @param {number} [searchParams.date_to] Filter by date to. Example: 2017-12-31.
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  all(searchParams, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_ENDPOINT,
      qs: searchParams,
    }, callback);
  }

  /**
   * Retrieves information about a created document template.
   * @param {number} templateId Id of template
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  get(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_BY_ID_ENDPOINT,
      ids: { template_id: templateId }
    }, callback);
  }

  /**
   * Creates a new document template. The filename must contain numbers, English letters or special characters: ( ) _ . Also, the filename extension should be .ppt; .pptx; .doc; .docx; or .pdf. You can download document from multipart
   * @param {object} templateInfo Information for creating new template
   * @param {string | object} templateInfo.file url to file, or file
   * @param {string} templateInfo.name Template name
   * @param {number} templateInfo.folder_id folder id
   * @param {function} [callback] callback function
   * @returns {Promise}
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
   * Updates the information for a document template.
   * @param {number} templateId Id of template
   * @param {object} templateInfo Information for updating template
   * @param {string} templateInfo.name Template name
   * @param {number} templateInfo.folder_id folder id
   * @param {function} [callback] callback function
   * @returns {Promise}
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
   * Downloads a document template.
   * @param {number} templateId Id of template
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  download(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_DOWNLOAD_ENDPOINT,
      ids: { template_id: templateId },
    }, callback);
  }

  /**
   * Retrieves a list of roles for a document template.
   * @param {number} templateId Id of template
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  getRoles(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_ROLES_ENDPOINT,
      ids: { template_id: templateId }
    }, callback);
  }

  /**
   * Download original template by id.
   * @param {number} templateId Id of template
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  downloadOriginal(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_DOWNLOAD_ORIGINAL_ENDPOINT,
      ids: { template_id: templateId }
    }, callback);
  }

  /**
   * Deletes a document template item.
   * @param {number} templateId Id of template
   * @param {function} [callback] callback function
   * @returns {Promise}
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
   * @param {number} templateId Id of template
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  getFields(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_FIELDS_ENDPOINT,
      ids: { template_id: templateId }
    }, callback);
  }

  /**
   * Retrieves child documents for a selected document template.
   * @param {number} templateId Id of template
   * @param {object} [searchParams] Object with query string filters
   * @param {number} [searchParams.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [searchParams.page] Filter by page
   * @param {string} [searchParams.order] Sort Method
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  getChilds(templateId, searchParams, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_FILLED_DOCS_ENDPOINT,
      ids: { template_id: templateId },
      qs: searchParams
    }, callback);
  }

  /**
   * Downloads a zip archive of document signatures.
   * @param {number} templateId Id of template
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  downloadSignatures(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_DOWNLOAD_SIGNATURES_ENDPOINT,
      ids: { template_id: templateId },
    }, callback);
  }

  /**
   * Populates a fillable form template which was created with the PDFfiller editor.
   * @param {number} templateId Id of template
   * @param {object} fillableInfo object with fillable params
   * @param {object} fillableInfo.fillable_fields fields data what will be filled to template
   * @param {number} fillableInfo.folder_id folder id
   * @param {string} fillableInfo.name Name created for a newly filled document
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  fillTemplate(templateId, fillableInfo, callback) {
    return this.request({
      method: 'POST',
      endPoint: constants.TEMPLATES_BY_ID_ENDPOINT,
      ids: { template_id: templateId },
      data: fillableInfo
    }, callback);
  }

  /**
   * Creates a new share link to a document.
   * @param {number} templateId Id of template
   * @param {object} shareLinkInfo Share link params
   * @param {number} shareLinkInfo.expire Number of days left until link expires. Max value - 1000
   * @param {string} shareLinkInfo.callback_url Callback destination url
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  createShareLink(templateId, shareLinkInfo, callback) {
    return this.request({
      method: 'POST',
      endPoint: constants.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      ids: { template_id: templateId },
      data: shareLinkInfo
    }, callback);
  }

  /**
   * Retrieves a list of hash.
   * @param {number} templateId Id of template
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  getShareLink(templateId, callback) {
    return this.request({
      endPoint: constants.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      ids: { template_id: templateId },
    }, callback);
  }

  /**
   * Deletes one share link to a document by hash.
   * @param {number} templateId Id of template
   * @param {string} hash Hash for shared link
   * @param {function} [callback] callback function
   * @returns {Promise}
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
   * @param {number} templateId Id of template
   * @param {function} [callback] callback function
   * @returns {Promise}
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
