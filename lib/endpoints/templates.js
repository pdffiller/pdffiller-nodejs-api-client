'use strict';

const Base = require('../extends/base');
const endpoints = require('../constants').endpoints;
const methods = require('../constants').methods;

/**
 * @classdesc Templates endpoint
 * @class
 */
class Templates extends Base {
  constructor() {
    super(arguments);
  }

  /**
   * Retrieves a list of uploaded documents.
   * @param {object} [search_params] Object with query string filters
   * @param {number} [search_params.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [search_params.page] Filter by page
   * @param {string} [search_params.order_by] Filter for sort by selected field
   * @param {string} [search_params.order] Sort Method
   * @param {number} [search_params.date_from] Filter by date from. Example: 2016-12-31.
   * @param {number} [search_params.date_to] Filter by date to. Example: 2017-12-31.
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  all(search_params, callback) {
    return this.request({
      endPoint: endpoints.TEMPLATES_ENDPOINT,
      qs: search_params,
    }, callback);
  }

  /**
   * Retrieves information about a created document template.
   * @param {number} template_id Id of template
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(template_id, callback) {
    return this.request({
      endPoint: endpoints.TEMPLATES_BY_ID_ENDPOINT,
      ids: { template_id }
    }, callback);
  }

  /**
   * Creates a new document template. The filename must contain numbers, English letters or special characters: ( ) _ . Also, the filename extension should be .ppt; .pptx; .doc; .docx; or .pdf. You can download document from multipart
   * @param {object} template_info Information for creating new template
   * @param {string | object} template_info.file url to file, or file
   * @param {string} template_info.name Template name
   * @param {number} template_info.folder_id folder id
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  create(template_info, callback) {
    return this.request({
      endPoint: endpoints.TEMPLATES_ENDPOINT,
      method: methods.POST,
      formData: template_info.file !== 'string',
      data: template_info
    }, callback);
  }

  /**
   * Updates the information for a document template.
   * @param {number} template_id Id of template
   * @param {object} template_info Information for updating template
   * @param {string} template_info.name Template name
   * @param {number} template_info.folder_id folder id
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  update(template_id, template_info, callback) {
    return this.request({
      endPoint: endpoints.TEMPLATES_BY_ID_ENDPOINT,
      method: methods.PUT,
      data: template_info,
      ids: { template_id }
    }, callback);
  }

  /**
   * Downloads a document template.
   * @param {number} template_id Id of template
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  download(template_id, callback) {
    return this.request({
      endPoint: endpoints.TEMPLATES_DOWNLOAD_ENDPOINT,
      ids: { template_id },
    }, callback);
  }

  /**
   * Retrieves a list of roles for a document template.
   * @param {number} template_id Id of template
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getRoles(template_id, callback) {
    return this.request({
      endPoint: endpoints.TEMPLATES_ROLES_ENDPOINT,
      ids: { template_id }
    }, callback);
  }

  /**
   * Download original template by id.
   * @param {number} template_id Id of template
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  downloadOriginal(template_id, callback) {
    return this.request({
      endPoint: endpoints.TEMPLATES_DOWNLOAD_ORIGINAL_ENDPOINT,
      ids: { template_id }
    }, callback);
  }

  /**
   * Deletes a document template item.
   * @param {number} template_id Id of template
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  remove(template_id, callback) {
    return this.request({
      method: methods.DELETE,
      endPoint: endpoints.TEMPLATES_BY_ID_ENDPOINT,
      ids: { template_id },
    }, callback);
  }

  /**
   * Get values for a fillable form.
   * @param {number} template_id Id of template
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getFields(template_id, callback) {
    return this.request({
      endPoint: endpoints.TEMPLATES_FIELDS_ENDPOINT,
      ids: { template_id }
    }, callback);
  }

  /**
   * Retrieves child documents for a selected document template.
   * @param {number} template_id Id of template
   * @param {object} [search_params] Object with query string filters
   * @param {number} [search_params.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [search_params.page] Filter by page
   * @param {string} [search_params.order] Sort Method
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getChilds(template_id, search_params, callback) {
    return this.request({
      endPoint: endpoints.TEMPLATES_FILLED_DOCS_ENDPOINT,
      ids: { template_id },
      qs: search_params
    }, callback);
  }

  /**
   * Downloads a zip archive of document signatures.
   * @param {number} template_id Id of template
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  downloadSignatures(template_id, callback) {
    return this.request({
      endPoint: endpoints.TEMPLATES_DOWNLOAD_SIGNATURES_ENDPOINT,
      ids: { template_id },
    }, callback);
  }

  /**
   * Populates a fillable form template which was created with the PDFfiller editor.
   * @param {number} template_id Id of template
   * @param {object} fillable_info object with fillable params
   * @param {object} fillable_info.fillable_fields fields data what will be filled to template
   * @param {number} fillable_info.folder_id folder id
   * @param {string} fillable_info.name Name created for a newly filled document
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  fillTemplate(template_id, fillable_info, callback) {
    return this.request({
      method: methods.POST,
      endPoint: endpoints.TEMPLATES_BY_ID_ENDPOINT,
      ids: { template_id },
      data: fillable_info
    }, callback);
  }

  /**
   * Creates a new share link to a document.
   * @param {number} template_id Id of template
   * @param {object} share_link_info Share link params
   * @param {number} share_link_info.expire Number of days left until link expires. Max value - 1000
   * @param {string} share_link_info.callback_url Callback destination url
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  createShareLink(template_id, share_link_info, callback) {
    return this.request({
      method: methods.POST,
      endPoint: endpoints.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      ids: { template_id },
      data: share_link_info
    }, callback);
  }

  /**
   * Retrieves a list of hash.
   * @param {number} template_id Id of template
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getShareLink(template_id, callback) {
    return this.request({
      endPoint: endpoints.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      ids: { template_id },
    }, callback);
  }

  /**
   * Deletes one share link to a document by hash.
   * @param {number} template_id Id of template
   * @param {string} hash Hash for shared link
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  removeShareLinkByHash(template_id, hash, callback) {
    return this.request({
      method: methods.DELETE,
      endPoint: endpoints.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      ids: { template_id },
      hash
    }, callback);
  }

  /**
   * Deletes all share links to a document by id.
   * @param {number} template_id Id of template
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  removeAllShareLink(template_id, callback) {
    return this.request({
      method: methods.DELETE,
      endPoint: endpoints.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      ids: { template_id },
    }, callback);
  }
}

module.exports = Templates;
