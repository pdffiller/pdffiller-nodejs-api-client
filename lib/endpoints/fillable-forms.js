const Base = require('../extends/base');
const constants = require('../constants/');

class FillableForms extends Base {
  /**
   * Returns a list of all document fill requests.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @returns {Promise}
   */
  all(searchParams) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_ENDPOINT,
      qs: searchParams,
    });
  }

  /**
   * Information about a created fill request item.
   * @param {number} id of fill request
   * @returns {Promise}
   */
  get(id) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_BY_ID_ENDPOINT,
      id: { link_to_fill_id: id }
    });
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
   * @returns {Promise}
   */
  create(fillableInfo) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_ENDPOINT,
      method: 'POST',
      json: typeof fillableInfo.file === 'string' || !fillableInfo.file,
      formData: fillableInfo.file && typeof fillableInfo.file !== 'string',
      data: fillableInfo
    });
  }

  /**
   * Creates a new document and shares it via short url.
   * @param {number} id of fill request
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
   * @param {object} fillableInfo.fillable_fields Id of the document template
   * @param {string} fillableInfo.name new document name
   * @param {number} fillableInfo.folder_id folder id
   * @param {array} fillableInfo.additional_documents Additional documents required after filling the document
   * @returns {Promise}
   */
  update(id, fillableInfo) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_BY_ID_ENDPOINT,
      method: 'PUT',
      json: true,
      id: { link_to_fill_id: id },
      data: fillableInfo
    });
  }

  /**
   * Deletes a fill request item.
   * @param {number} id id of fill request
   * @returns {Promise}
   */
  remove(id) {
    return this.request({
      method: 'DELETE',
      endPoint: constants.FILLABLE_FORMS_BY_ID_ENDPOINT,
      id: { link_to_fill_id: id }
    });
  }

  /**
   * Deletes a fill request item.
   * @param {number} id id of fill request
   * @returns {Promise} with buffer
   */
  download(id) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_DOWNLOAD_ENDPOINT,
      id: { link_to_fill_id: id }
    });
  }

  /**
   * Lists all filled forms for the given fill request.
   * @param {number} id id of fill request
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order] order
   * @returns {Promise}
   */
  allFilled(id, searchParams) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_ENDPOINT,
      qs: searchParams,
      id: { link_to_fill_id: id }
    });
  }

  /**
   * Information about a specific filled form.
   * @param {number} idFill Fill Request ID
   * @param {number} idFilled Filled Form ID
   * @returns {Promise}
   */
  getFilled(idFill, idFilled) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_BY_ID_ENDPOINT,
      id: { link_to_fill_id: idFill, filled_form_id: idFilled }
    });
  }

  /**
   * Deletes a filled form.
   * @param {number} idFill Fill Request ID
   * @param {number} idFilled Filled Form ID
   * @returns {Promise}
   */
  removeFilled(idFill, idFilled) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_BY_ID_ENDPOINT,
      method: 'DELETE',
      id: { link_to_fill_id: idFill, filled_form_id: idFilled }
    });
  }

  /**
   * Exports filled form data in one of the available formats: json, xls, xlsx, csv, html.
   * @param {number} idFill Fill Request ID
   * @param {number} idFilled Filled Form ID
   * @returns {Promise}
   */
  filledExport(idFill, idFilled) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_EXPORT_ENDPOINT,
      id: { link_to_fill_id: idFill, filled_form_id: idFilled }
    });
  }

  /**
   * Downloads a filled PDF form.
   * @param {number} idFill Fill Request ID
   * @param {number} idFilled Filled Form ID
   * @returns {Promise}
   */
  filledDownload(idFill, idFilled) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_DOWNLOAD_ENDPOINT,
      id: { link_to_fill_id: idFill, filled_form_id: idFilled }
    });
  }

  /**
   * Returns a list of a LinkToFill recipient`s attached additional documents.
   * @param {number} idFill Fill Request ID
   * @param {number} idFilled Filled Form ID
   * @returns {Promise}
   */
  filledAllAdditional(idFill, idFilled) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_ADDITIONAL_ENDPOINT,
      id: { link_to_fill_id: idFill, filled_form_id: idFilled }
    });
  }

  /**
   * Returns information about one LinkToFill recipient`s attached additional document.
   * @param {number} idFill Fill Request ID
   * @param {number} idFilled Filled Form ID
   * @param {number} idAdditional Attached additional document ID
   * @returns {Promise}
   */
  filledAdditional(idFill, idFilled, idAdditional) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_ADDITIONAL_BY_ID_ENDPOINT,
      id: { link_to_fill_id: idFill, filled_form_id: idFilled, additional_document_id: idAdditional }
    });
  }

  /**
   * Downloads a file of a LinkToFill filled form`s additional document.
   * @param {number} idFill Fill Request ID
   * @param {number} idFilled Filled Form ID
   * @param {number} idAdditional Attached additional document ID
   * @returns {Promise}
   */
  filledAdditionalDownload(idFill, idFilled, idAdditional) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_ADDITIONAL_BY_ID_DOWNLOAD_ENDPOINT,
      id: { link_to_fill_id: idFill, filled_form_id: idFilled, additional_document_id: idAdditional }
    });
  }

  /**
   * Downloads a zip-file of all LinkToFill filled form`s additional documents.
   * @param {number} idFill Fill Request ID
   * @param {number} idFilled Filled Form ID
   * @returns {Promise}
   */
  filledAllAdditionalDownload(idFill, idFilled) {
    return this.request({
      endPoint: constants.FILLABLE_FORMS_FILLED_ADDITIONAL_DOWNLOAD_ENDPOINT,
      id: { link_to_fill_id: idFill, filled_form_id: idFilled }
    });
  }
}

module.exports = FillableForms;
