'use strict';

const Base = require('../extends/base');
const endpoints = require('../constants').endpoints;
const methods = require('../constants').methods;


/**
 * @classdesc SignatureRequests endpoint
 * @class
 */
class SignatureRequests extends Base {
  constructor() {
    super(arguments);
  }

  /**
   * Retrieves a list of all document signature requests in the inbox folder.
   * @param {object} [search_params] Object with query string filters
   * @param {number} [search_params.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [search_params.page] Filter by page
   * @param {string} [search_params.order_by] Filter for sort by selected field
   * @param {string} [search_params.order] Sort Method
   * @param {string} [search_params.status] Filter by signature requests status
   * @param {string} [search_params.date_from] Filter by date from
   * @param {string} [search_params.date_to] Filter by date to
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  allInbox(search_params, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_INBOX_ENDPOINT,
      qs: search_params,
    }, callback);
  }

  /**
   * Downloads all documents which a sender has requested your signature for in a .zip archive.
   * @param {object} [search_params] Object with query string filters
   * @param {number} [search_params.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [search_params.page] Filter by page
   * @param {string} [search_params.order] Sort Method
   * @param {string} [search_params.status] Filter by signature requests status
   * @param {string} [search_params.date_from] Filter by date from
   * @param {string} [search_params.date_to] Filter by date to
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  downloadInbox(search_params, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_INBOX_DOWNLOAD_ENDPOINT,
      qs: search_params,
    }, callback);
  }

  /**
   * Retrieves a list of all document signature requests.
   * @param {object} [search_params] Object with query string filters
   * @param {number} [search_params.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [search_params.page] Filter by page
   * @param {string} [search_params.order_by] Filter for sort by selected field
   * @param {string} [search_params.order] Sort Method
   * @param {string} [search_params.date_from] Filter by date from
   * @param {string} [search_params.date_to] Filter by date to
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  all(search_params, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_ENDPOINT,
      qs: search_params,
    }, callback);
  }

  /**
   * Retrieves signature request information based on the signature request ID.
   * @param {number} signature_request_id Id of signature request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(signature_request_id, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_BY_ID_ENDPOINT,
      ids: { signature_request_id }
    }, callback);
  }

  /**
   * Creates a new Signature request. Two Signature methods supported: SendToEach and SendToGroup. The SendToGroup method requires envelope_name, sign_in_order and role parameters.
   * @param {object} signature_request_info Information for creating new signature request
   * @param {string} signature_request_info.document_id is required if file is omitted.
   * @param {string} signature_request_info.method SendToEach or SendToGroup
   * @param {string} signature_request_info.envelope_name is required for sengtogroup method
   * @param {string} signature_request_info.security_pin Password Protected(standard, enhanced)
   * @param {string} signature_request_info.pin is required when security pin is enhanced
   * @param {boolean} signature_request_info.sign_in_order sign in order
   * @param {object[]} signature_request_info.recipients array of recipients
   * @param {number} signature_request_info.recipients[].role role id parameter, available only for 'sendtogroup' method
   * @param {string} signature_request_info.recipients[].email Recipient's email address
   * @param {string} signature_request_info.recipients[].name Recipient's name
   * @param {boolean} signature_request_info.recipients[].require_photo Sets the option for requirement photo
   * @param {string} signature_request_info.recipients[].message_subject Message subject
   * @param {string} signature_request_info.recipients[].message_text Message subject
   * @param {string} signature_request_info.recipients[].access full or signature
   * @param {string} signature_request_info.recipients[].phone_authenticate Option for phone notification setting
   * @param {array} signature_request_info.recipients[].additional_documents Sets the list of additional documents needed to apply after filling the template. Should not exceed the allowable 5 attachments limit.
   * @param {object} signature_request_info.fillable_fields fillable fields
   * @param {string | object} signature_request_info.file file url or file
   * @param {number} signature_request_info.folder_id folder id
   * @param {string} signature_request_info.name name signature request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  create(signature_request_info, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_ENDPOINT,
      method: methods.POST,
      formData: signature_request_info.file && typeof signature_request_info.file !== 'string',
      data: signature_request_info
    }, callback);
  }

  /**
   * Cancels a signature request for the specified SendToSign ID.
   * @param {number} signature_request_id Id of signature request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  remove(signature_request_id, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_BY_ID_ENDPOINT,
      method: methods.DELETE,
      ids: { signature_request_id }
    }, callback);
  }

  /**
   * Returns a signature request certificate by signature request id.
   * @param {number} signature_request_id Id of signature request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getCertificate(signature_request_id, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_CERTIFICATE_ENDPOINT,
      ids: { signature_request_id }
    }, callback);
  }

  /**
   * Returns a signed document by Signature request id.
   * @param {number} signature_request_id Id of signature request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  downloadSignedDocument(signature_request_id, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_SIGNED_ENDPOINT,
      ids: { signature_request_id }
    }, callback);
  }

  /**
   * Returns information about sendtosign recipients and signature status.
   * @param {number} signature_request_id Id of signature request
   * @param {object} [search_params] Object with query string filters
   * @param {number} [search_params.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [search_params.page] Filter by page
   * @param {string} [search_params.order_by] Filter for sort by selected field
   * @param {string} [search_params.order] Sort Method
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  allRecipients(signature_request_id, search_params, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_RECIPIENTS_ENDPOINT,
      qs: search_params,
      ids: { signature_request_id }
    }, callback);
  }

  /**
   * Adds an additional recipient to a sendtosign request.
   * @param {number} signature_request_id Id of signature request
   * @param {object[]} recipients array of recipients
   * @param {number} recipients[].role role id parameter, available only for 'sendtogroup' method
   * @param {string} recipients[].email Recipient's email address
   * @param {string} recipients[].name Recipient's name
   * @param {boolean} recipients[].require_photo Sets the option for requirement photo
   * @param {string} recipients[].message_subject Message subject
   * @param {string} recipients[].message_text Message subject
   * @param {string} recipients[].access full or signature
   * @param {string} recipients[].phone_authenticate Option for phone notification setting
   * @param {array} recipients[].additional_documents Sets the list of additional documents needed to apply after filling the template. Should not exceed the allowable 5 attachments limit.
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  addRecipients(signature_request_id, recipients, callback) {
    return this.request({
      method: methods.POST,
      endPoint: endpoints.SIGNATURE_REQUESTS_RECIPIENTS_ENDPOINT,
      ids: { signature_request_id },
      data: { recipients }
    }, callback);
  }

  /**
   * Returns information about a sendtosign recipient and signature status.
   * @param {number} signature_request_id Id of signature request
   * @param {number} recipient_id Id of recipient
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getRecipient(signature_request_id, recipient_id, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_RECIPIENTS_BY_ID_ENDPOINT,
      ids: { signature_request_id, recipient_id },
    }, callback);
  }

  /**
   * Reminds a sendtosign recipient about the sendtosign request.
   * @param {number} signature_request_id Id of signature request
   * @param {number} recipient_id Id of recipient
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  remindRecipient(signature_request_id, recipient_id, callback) {
    return this.request({
      method: methods.PUT,
      endPoint: endpoints.SIGNATURE_REQUESTS_RECIPIENTS_REMIND_ENDPOINT,
      ids: { signature_request_id, recipient_id },
    }, callback);
  }

  /**
   * Returns information about sendtosign recipient`s attached additional documents.
   * @param {number} signature_request_id Id of signature request
   * @param {number} recipient_id Id of recipient
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getRecipientAllAdditional(signature_request_id, recipient_id, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_ENDPOINT,
      ids: { signature_request_id, recipient_id },
    }, callback);
  }

  /**
   * Returns information about sendtosign recipient`s attached additional document.
   * @param {number} signature_request_id Id of signature request
   * @param {number} recipient_id Id of recipient
   * @param {number} additional_document_id Id of additional document
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getRecipientAdditional(signature_request_id, recipient_id, additional_document_id, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_BY_ID_ENDPOINT,
      ids: { signature_request_id, recipient_id, additional_document_id },
    }, callback);
  }

  /**
   * Downloads a file of a sendtosign recipient`s additional document.
   * @param {number} signature_request_id of signature request
   * @param {number} recipient_id Id of recipient
   * @param {number} additional_document_id Id of additional document
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  downloadRecipientAdditional(signature_request_id, recipient_id, additional_document_id, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_BY_ID_DOWNLOAD_ENDPOINT,
      ids: { signature_request_id, recipient_id, additional_document_id },
    }, callback);
  }

  /**
   * Downloads a zip-file of all additional documents for a sendtosign recipient. This method can give three statuses: Creating a Job with Job ID, Waiting (if zip is still in progress) or Zip content (if files ready to export).
   * @param {number} signature_request_id Id of signature request
   * @param {number} recipient_id Id of recipient
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  downloadRecipientAllAdditional(signature_request_id, recipient_id, callback) {
    return this.request({
      endPoint: endpoints.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_DOWNLOAD_ENDPOINT,
      ids: { signature_request_id, recipient_id },
    }, callback);
  }
}

module.exports = SignatureRequests;
