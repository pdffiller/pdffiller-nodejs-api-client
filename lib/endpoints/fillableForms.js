'use strict';

const Base = require('../extends/base');
const endpoints = require('../constants').endpoints;
const methods = require('../constants').methods;

/**
 * @classdesc FillableForms endpoint
 * @class
 */
class FillableForms extends Base {
  constructor() {
    super(arguments);
  }

  /**
   * Returns a list of all document fill requests.
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
      endPoint: endpoints.FILLABLE_FORMS_ENDPOINT,
      qs: search_params,
    }, callback);
  }

  /**
   * Information about a created fill request item.
   * @param {number} link_to_fill_id Id of fill request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(link_to_fill_id, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_BY_ID_ENDPOINT,
      ids: { link_to_fill_id }
    }, callback);
  }

  /**
   * Creates a new document and shares it via short url.
   * @param {object} fillable_info Information for creating fillable document
   * @param {string} fillable_info.access Access level for the fill request document
   * @param {string} fillable_info.status Document access permission.
   * @param {boolean} fillable_info.email_required Email required
   * @param {boolean} fillable_info.allow_downloads Allow to download
   * @param {string} fillable_info.redirect_url Redirect uri
   * @param {boolean} fillable_info.name_required Name required
   * @param {string} fillable_info.custom_message LinkToFill custom message
   * @param {array} fillable_info.notification_emails LinkToFill notification emails
   * @param {string} fillable_info.notifications The notifications mode
   * @param {boolean} fillable_info.enforce_required_fields Prevent closing document before filling all fields
   * @param {boolean} fillable_info.custom_logo_id Document custom logo id
   * @param {boolean} fillable_info.welcome_screen Shows welcome agreement each time when user will open LinkToFill
   * @param {boolean} fillable_info.reusable After filling the form it will be copied to the owner as the fillable form
   * @param {string} fillable_info.callback_url Callback url
   * @param {string} fillable_info.signature_stamp Signature stamp
   * @param {number} fillable_info.document_id Id of the document template
   * @param {string} fillable_info.file File to be uploaded
   * @param {object} fillable_info.fillable_fields Id of the document template
   * @param {string} fillable_info.name new document name
   * @param {number} fillable_info.folder_id folder id
   * @param {array} fillable_info.additional_documents Additional documents required after filling the document
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  create(fillable_info, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_ENDPOINT,
      method: methods.POST,
      formData: fillable_info.file && typeof fillable_info.file !== 'string',
      data: fillable_info
    }, callback);
  }

  /**
   * Updates a fill request item.
   * @param {number} link_to_fill_id Id of fill request
   * @param {object} fillable_info Information for updating fillable document
   * @param {string} fillable_info.access Access level for the fill request document
   * @param {string} fillable_info.status Document access permission.
   * @param {boolean} fillable_info.email_required Email required
   * @param {boolean} fillable_info.allow_downloads Allow to download
   * @param {string} fillable_info.redirect_url Redirect uri
   * @param {boolean} fillable_info.name_required Name required
   * @param {string} fillable_info.custom_message LinkToFill custom message
   * @param {array} fillable_info.notification_emails LinkToFill notification emails
   * @param {string} fillable_info.notifications The notifications mode
   * @param {boolean} fillable_info.enforce_required_fields Prevent closing document before filling all fields
   * @param {boolean} fillable_info.custom_logo_id Document custom logo id
   * @param {boolean} fillable_info.welcome_screen Shows welcome agreement each time when user will open LinkToFill
   * @param {boolean} fillable_info.reusable After filling the form it will be copied to the owner as the fillable form
   * @param {string} fillable_info.callback_url Callback url
   * @param {string} fillable_info.signature_stamp]Signature stamp
   * @param {object} fillable_info.fillable_fields Id of the document template
   * @param {string} fillable_info.name new document name
   * @param {number} fillable_info.folder_id folder id
   * @param {array} fillable_info.additional_documents Additional documents required after filling the document
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  update(link_to_fill_id, fillable_info, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_BY_ID_ENDPOINT,
      method: methods.PUT,
      ids: { link_to_fill_id },
      data: fillable_info
    }, callback);
  }

  /**
   * Deletes a fill request item.
   * @param {number} link_to_fill_id Id of fill request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  remove(link_to_fill_id, callback) {
    return this.request({
      method: methods.DELETE,
      endPoint: endpoints.FILLABLE_FORMS_BY_ID_ENDPOINT,
      ids: { link_to_fill_id }
    }, callback);
  }

  /**
   * You can easily export all the completed documents created via LinkToFill as a zip file.
   * This method can give three statuses:
   * Creating a Job with Job ID, Waiting (if zip is still in progress) or Zip content (if files ready to export).
   * @param {number} link_to_fill_id Id of fill request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  download(link_to_fill_id, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_DOWNLOAD_ENDPOINT,
      ids: { link_to_fill_id }
    }, callback);
  }

  /**
   * Lists all filled forms for the given fill request.
   * @param {number} link_to_fill_id Id of fill request
   * @param {object} [search_params] Object with query string filters
   * @param {number} [search_params.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [search_params.page] Filter by page
   * @param {string} [search_params.order] Sort Method
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  allFilled(link_to_fill_id, search_params, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_FILLED_ENDPOINT,
      qs: search_params,
      ids: { link_to_fill_id }
    }, callback);
  }

  /**
   * Information about a specific filled form.
   * @param {number} link_to_fill_id Id of fill request
   * @param {number} filled_form_id Id of filler form
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getFilled(link_to_fill_id, filled_form_id, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_FILLED_BY_ID_ENDPOINT,
      ids: { link_to_fill_id, filled_form_id }
    }, callback);
  }

  /**
   * Deletes a filled form.
   * @param {number} link_to_fill_id Id of fill request
   * @param {number} filled_form_id Id of filler form
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  removeFilled(link_to_fill_id, filled_form_id, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_FILLED_BY_ID_ENDPOINT,
      method: methods.DELETE,
      ids: { link_to_fill_id, filled_form_id }
    }, callback);
  }

  /**
   * Exports filled form data in one of the available formats: json, xls, xlsx, csv, html.
   * @param {number} link_to_fill_id Id of fill request
   * @param {number} filled_form_id Id of filler form
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  exportFilled(link_to_fill_id, filled_form_id, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_FILLED_EXPORT_ENDPOINT,
      ids: { link_to_fill_id, filled_form_id }
    }, callback);
  }

  /**
   * Downloads a filled PDF form.
   * @param {number} link_to_fill_id Id of fill request
   * @param {number} filled_form_id Id of filler form
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  downloadFilled(link_to_fill_id, filled_form_id, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_FILLED_DOWNLOAD_ENDPOINT,
      ids: { link_to_fill_id, filled_form_id }
    }, callback);
  }

  /**
   * Returns a list of a LinkToFill recipient`s attached additional documents.
   * @param {number} link_to_fill_id Id of fill request
   * @param {number} filled_form_id Id of filler form
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getFilledAllAdditional(link_to_fill_id, filled_form_id, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_FILLED_ADDITIONAL_ENDPOINT,
      ids: { link_to_fill_id, filled_form_id }
    }, callback);
  }

  /**
   * Returns information about one LinkToFill recipient`s attached additional document.
   * @param {number} link_to_fill_id Id of fill request
   * @param {number} filled_form_id Id of filler form
   * @param {number} additional_document_id Id of attached additional document
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getFilledAdditional(link_to_fill_id, filled_form_id, additional_document_id, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_FILLED_ADDITIONAL_BY_ID_ENDPOINT,
      ids: { link_to_fill_id, filled_form_id, additional_document_id }
    }, callback);
  }

  /**
   * Downloads a file of a LinkToFill filled form`s additional document.
   * @param {number} link_to_fill_id Id of fill request
   * @param {number} filled_form_id Id of filler form
   * @param {number} additional_document_id Id of attached additional document
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  downloadFilledAdditional(link_to_fill_id, filled_form_id, additional_document_id, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_FILLED_ADDITIONAL_BY_ID_DOWNLOAD_ENDPOINT,
      ids: { link_to_fill_id, filled_form_id, additional_document_id }
    }, callback);
  }

  /**
   * Downloads a zip-file of all LinkToFill filled form`s additional documents.
   * This method can give three statuses:
   * Creating a Job with Job ID, Waiting (if zip is still in progress) or Zip content (if files ready to export).
   * @param {number} link_to_fill_id Id of fill request
   * @param {number} filled_form_id Id of filler form
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  downloadFilledAllAdditional(link_to_fill_id, filled_form_id, callback) {
    return this.request({
      endPoint: endpoints.FILLABLE_FORMS_FILLED_ADDITIONAL_DOWNLOAD_ENDPOINT,
      ids: { link_to_fill_id, filled_form_id }
    }, callback);
  }
}

module.exports = FillableForms;
