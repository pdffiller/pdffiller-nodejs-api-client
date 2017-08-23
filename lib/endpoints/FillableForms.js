const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * @classdesc FillableForms endpoint
 * @class
 */
class FillableForms extends Base {
  /**
   * Returns a list of all document fill requests.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] items on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  all(searchParams, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_ENDPOINT,
      qs: searchParams,
    }, callback);
  }

  /**
   * Information about a created fill request item.
   * @param {number} linkToFillId of fill request
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  get(linkToFillId, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_BY_ID_ENDPOINT,
      ids: { link_to_fill_id: linkToFillId }
    }, callback);
  }

  /**
   * Creates a new document and shares it via short url.
   * @param {object} fillableInfo for creating fill request
   * @param {string} [fillableInfo.access] Access level for the fill request document
   * @param {string} [fillableInfo.status] Document access permission.
   * @param {boolean} [fillableInfo.email_required Email required
   * @param {boolean} [fillableInfo.allow_downloads Allow to download
   * @param {string} fillableInfo.redirect_url Redirect uri
   * @param {boolean} [fillableInfo.name_required] Name required
   * @param {string} [fillableInfo.custom_message] LinkToFill custom message
   * @param {array} fillableInfo.notification_emails LinkToFill notification emails
   * @param {string} fillableInfo.notifications The notifications mode
   * @param {boolean} fillableInfo.enforce_required_fields Prevent closing document before filling all fields
   * @param {boolean} fillableInfo.custom_logo_id Document custom logo id
   * @param {boolean} [fillableInfo.welcome_screen] Shows welcome agreement each time when user will open LinkToFill
   * @param {boolean} fillableInfo.reusable After filling the form it will be copied to the owner as the fillable form
   * @param {string} fillableInfo.callback_url Callback url
   * @param {string} [fillableInfo.signature_stamp] Signature stamp
   * @param {number} fillableInfo.document_id Id of the document template
   * @param {string} fillableInfo.file File to be uploaded
   * @param {object} fillableInfo.fillable_fields Id of the document template
   * @param {string} fillableInfo.name new document name
   * @param {number} fillableInfo.folder_id folder id
   * @param {array} fillableInfo.additional_documents Additional documents required after filling the document
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  create(fillableInfo, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_ENDPOINT,
      method: 'POST',
      formData: fillableInfo.file && typeof fillableInfo.file !== 'string',
      data: fillableInfo
    }, callback);
  }

  /**
   * Updates a fill request item.
   * @param {number} linkToFillId of fill request
   * @param {object} fillableInfo for updating fill request
   * @param {string} [fillableInfo.access] Access level for the fill request document
   * @param {string} [fillableInfo.status] Document access permission.
   * @param {boolean} [fillableInfo.email_required Email required
   * @param {boolean} [fillableInfo.allow_downloads Allow to download
   * @param {string} fillableInfo.redirect_url Redirect uri
   * @param {boolean} [fillableInfo.name_required] Name required
   * @param {string} [fillableInfo.custom_message] LinkToFill custom message
   * @param {array} fillableInfo.notification_emails LinkToFill notification emails
   * @param {string} fillableInfo.notifications The notifications mode
   * @param {boolean} fillableInfo.enforce_required_fields Prevent closing document before filling all fields
   * @param {boolean} fillableInfo.custom_logo_id Document custom logo id
   * @param {boolean} [fillableInfo.welcome_screen] Shows welcome agreement each time when user will open LinkToFill
   * @param {boolean} fillableInfo.reusable After filling the form it will be copied to the owner as the fillable form
   * @param {string} fillableInfo.callback_url Callback url
   * @param {string} [fillableInfo.signature_stamp] Signature stamp
   * @param {object} fillableInfo.fillable_fields Id of the document template
   * @param {string} fillableInfo.name new document name
   * @param {number} fillableInfo.folder_id folder id
   * @param {array} fillableInfo.additional_documents Additional documents required after filling the document
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  update(linkToFillId, fillableInfo, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_BY_ID_ENDPOINT,
      method: 'PUT',
      ids: { link_to_fill_id: linkToFillId },
      data: fillableInfo
    }, callback);
  }

  /**
   * Deletes a fill request item.
   * @param {number} linkToFillId id of fill request
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  remove(linkToFillId, callback) {
    return this.request({
      method: 'DELETE',
      endPoint: constants.FILLABLE_FORMS_BY_ID_ENDPOINT,
      ids: { link_to_fill_id: linkToFillId }
    }, callback);
  }

  /**
   * You can easily export all the completed documents created via LinkToFill as a zip file.
   * This method can give three statuses:
   * Creating a Job with Job ID, Waiting (if zip is still in progress) or Zip content (if files ready to export).
   * @param {number} linkToFillId id of fill request
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  download(linkToFillId, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_DOWNLOAD_ENDPOINT,
      ids: { link_to_fill_id: linkToFillId }
    }, callback);
  }

  /**
   * Lists all filled forms for the given fill request.
   * @param {number} linkToFillId id of fill request
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] filled forms on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order] order
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  allFilled(linkToFillId, searchParams, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_ENDPOINT,
      qs: searchParams,
      ids: { link_to_fill_id: linkToFillId }
    }, callback);
  }

  /**
   * Information about a specific filled form.
   * @param {number} linkToFillId Fill Request ID
   * @param {number} filledFormId Filled Form ID
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  getFilled(linkToFillId, filledFormId, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_BY_ID_ENDPOINT,
      ids: { link_to_fill_id: linkToFillId, filled_form_id: filledFormId }
    }, callback);
  }

  /**
   * Deletes a filled form.
   * @param {number} linkToFillId Fill Request ID
   * @param {number} filledFormId Filled Form ID
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  removeFilled(linkToFillId, filledFormId, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_BY_ID_ENDPOINT,
      method: 'DELETE',
      ids: { link_to_fill_id: linkToFillId, filled_form_id: filledFormId }
    }, callback);
  }

  /**
   * Exports filled form data in one of the available formats: json, xls, xlsx, csv, html.
   * @param {number} linkToFillId Fill Request ID
   * @param {number} filledFormId Filled Form ID
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  exportFilled(linkToFillId, filledFormId, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_EXPORT_ENDPOINT,
      ids: { link_to_fill_id: linkToFillId, filled_form_id: filledFormId }
    }, callback);
  }

  /**
   * Downloads a filled PDF form.
   * @param {number} linkToFillId Fill Request ID
   * @param {number} filledFormId Filled Form ID
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  downloadFilled(linkToFillId, filledFormId, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_DOWNLOAD_ENDPOINT,
      ids: { link_to_fill_id: linkToFillId, filled_form_id: filledFormId }
    }, callback);
  }

  /**
   * Returns a list of a LinkToFill recipient`s attached additional documents.
   * @param {number} linkToFillId Fill Request ID
   * @param {number} filledFormId Filled Form ID
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  getFilledAllAdditional(linkToFillId, filledFormId, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_ADDITIONAL_ENDPOINT,
      ids: { link_to_fill_id: linkToFillId, filled_form_id: filledFormId }
    }, callback);
  }

  /**
   * Returns information about one LinkToFill recipient`s attached additional document.
   * @param {number} linkToFillId Fill Request ID
   * @param {number} filledFormId Filled Form ID
   * @param {number} additionalDocumentId Attached additional document ID
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  getFilledAdditional(linkToFillId, filledFormId, additionalDocumentId, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_ADDITIONAL_BY_ID_ENDPOINT,
      ids: { link_to_fill_id: linkToFillId, filled_form_id: filledFormId, additional_document_id: additionalDocumentId }
    }, callback);
  }

  /**
   * Downloads a file of a LinkToFill filled form`s additional document.
   * @param {number} linkToFillId Fill Request ID
   * @param {number} filledFormId Filled Form ID
   * @param {number} additionalDocumentId Attached additional document ID
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  downloadFilledAdditional(linkToFillId, filledFormId, additionalDocumentId, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_ADDITIONAL_BY_ID_DOWNLOAD_ENDPOINT,
      ids: { link_to_fill_id: linkToFillId, filled_form_id: filledFormId, additional_document_id: additionalDocumentId }
    }, callback);
  }

  /**
   * Downloads a zip-file of all LinkToFill filled form`s additional documents.
   * This method can give three statuses:
   * Creating a Job with Job ID, Waiting (if zip is still in progress) or Zip content (if files ready to export).
   * @param {number} linkToFillId Fill Request ID
   * @param {number} filledFormId Filled Form ID
   * @param {function} [callback] callback function
   * @returns {Promise}
   */
  downloadFilledAllAdditional(linkToFillId, filledFormId, callback) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_ADDITIONAL_DOWNLOAD_ENDPOINT,
      ids: { link_to_fill_id: linkToFillId, filled_form_id: filledFormId }
    }, callback);
  }
}

module.exports = FillableForms;
