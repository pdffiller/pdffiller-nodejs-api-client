'use strict';

const Base = require('../extends/base');
const constants = require('../constants/');

/**
 * @classdesc SignatureRequests endpoint
 * @class
 */
class SignatureRequests extends Base {
  /**
   * Retrieves a list of all document signature requests in the inbox folder.
   * @param {object} [searchParams] Object with query string filters
   * @param {number} [searchParams.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [searchParams.page] Filter by page
   * @param {string} [searchParams.order_by] Filter for sort by selected field
   * @param {string} [searchParams.order] Sort Method
   * @param {string} [searchParams.status] Filter by signature requests status
   * @param {string} [searchParams.date_from] Filter by date from
   * @param {string} [searchParams.date_to] Filter by date to
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  allInbox(searchParams, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_INBOX_ENDPOINT,
      qs: searchParams,
    }, callback);
  }

  /**
   * Downloads all documents which a sender has requested your signature for in a .zip archive.
   * @param {object} [searchParams] Object with query string filters
   * @param {number} [searchParams.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [searchParams.page] Filter by page
   * @param {string} [searchParams.order] Sort Method
   * @param {string} [searchParams.status] Filter by signature requests status
   * @param {string} [searchParams.date_from] Filter by date from
   * @param {string} [searchParams.date_to] Filter by date to
   * @returns {Promise|void}
   */
  downloadInbox(searchParams, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_INBOX_DOWNLOAD_ENDPOINT,
      qs: searchParams,
    }, callback);
  }

  /**
   * Retrieves a list of all document signature requests.
   * @param {object} [searchParams] Object with query string filters
   * @param {number} [searchParams.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [searchParams.page] Filter by page
   * @param {string} [searchParams.order_by] Filter for sort by selected field
   * @param {string} [searchParams.order] Sort Method
   * @param {string} [searchParams.date_from] Filter by date from
   * @param {string} [searchParams.date_to] Filter by date to
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  all(searchParams, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_ENDPOINT,
      qs: searchParams,
    }, callback);
  }

  /**
   * Retrieves signature request information based on the signature request ID.
   * @param {number} signatureRequestId Id of signature request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  get(signatureRequestId, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_BY_ID_ENDPOINT,
      ids: { signature_request_id: signatureRequestId }
    }, callback);
  }

  /**
   * Creates a new Signature request. Two Signature methods supported: SendToEach and SendToGroup. The SendToGroup method requires envelope_name, sign_in_order and role parameters.
   * @param {object} signatureRequestInfo Information for creating new signature request
   * @param {string} signatureRequestInfo.document_id is required if file is omitted.
   * @param {string} signatureRequestInfo.method SendToEach or SendToGroup
   * @param {string} signatureRequestInfo.envelope_name is required for sengtogroup method
   * @param {string} signatureRequestInfo.security_pin Password Protected(standard, enhanced)
   * @param {string} signatureRequestInfo.pin is required when security pin is enhanced
   * @param {boolean} signatureRequestInfo.sign_in_order sign in order
   * @param {object[]} signatureRequestInfo.recipients array of recipients
   * @param {number} signatureRequestInfo.recipients[].role role id parameter, available only for 'sendtogroup' method
   * @param {string} signatureRequestInfo.recipients[].email Recipient's email address
   * @param {string} signatureRequestInfo.recipients[].name Recipient's name
   * @param {boolean} signatureRequestInfo.recipients[].require_photo Sets the option for requirement photo
   * @param {string} signatureRequestInfo.recipients[].message_subject Message subject
   * @param {string} signatureRequestInfo.recipients[].message_text Message subject
   * @param {string} signatureRequestInfo.recipients[].access full or signature
   * @param {string} signatureRequestInfo.recipients[].phone_authenticate Option for phone notification setting
   * @param {array} signatureRequestInfo.recipients[].additional_documents Sets the list of additional documents needed to apply after filling the template. Should not exceed the allowable 5 attachments limit.
   * @param {object} signatureRequestInfo.fillable_fields fillable fields
   * @param {string | object} signatureRequestInfo.file file url or file
   * @param {number} signatureRequestInfo.folder_id folder id
   * @param {string} signatureRequestInfo.name name signature request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  create(signatureRequestInfo, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_ENDPOINT,
      method: 'POST',
      formData: signatureRequestInfo.file && typeof signatureRequestInfo.file !== 'string',
      data: signatureRequestInfo
    }, callback);
  }

  /**
   * Cancels a signature request for the specified SendToSign ID.
   * @param {number} signatureRequestId Id of signature request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  remove(signatureRequestId, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_BY_ID_ENDPOINT,
      method: 'DELETE',
      ids: { signature_request_id: signatureRequestId }
    }, callback);
  }

  /**
   * Returns a signature request certificate by signature request id.
   * @param {number} signatureRequestId Id of signature request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getCertificate(signatureRequestId, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_CERTIFICATE_ENDPOINT,
      ids: { signature_request_id: signatureRequestId }
    }, callback);
  }

  /**
   * Returns a signed document by Signature request id.
   * @param {number} signatureRequestId Id of signature request
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  downloadSignedDocument(signatureRequestId, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_SIGNED_ENDPOINT,
      ids: { signature_request_id: signatureRequestId }
    }, callback);
  }

  /**
   * Returns information about sendtosign recipients and signature status.
   * @param {number} signatureRequestId Id of signature request
   * @param {object} [searchParams] Object with query string filters
   * @param {number} [searchParams.per_page] Filter by quantity of applications on the page on 1 page
   * @param {number} [searchParams.page] Filter by page
   * @param {string} [searchParams.order_by] Filter for sort by selected field
   * @param {string} [searchParams.order] Sort Method
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  allRecipients(signatureRequestId, searchParams, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_ENDPOINT,
      qs: searchParams,
      ids: { signature_request_id: signatureRequestId }
    }, callback);
  }

  /**
   * Adds an additional recipient to a sendtosign request.
   * @param {number} signatureRequestId Id of signature request
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
  addRecipients(signatureRequestId, recipients, callback) {
    return this.request({
      method: 'POST',
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_ENDPOINT,
      ids: { signature_request_id: signatureRequestId },
      data: { recipients }
    }, callback);
  }

  /**
   * Returns information about a sendtosign recipient and signature status.
   * @param {number} signatureRequestId Id of signature request
   * @param {number} recipientId Id of recipient
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getRecipient(signatureRequestId, recipientId, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_BY_ID_ENDPOINT,
      ids: { signature_request_id: signatureRequestId, recipient_id: recipientId },
    }, callback);
  }

  /**
   * Reminds a sendtosign recipient about the sendtosign request.
   * @param {number} signatureRequestId Id of signature request
   * @param {number} recipientId Id of recipient
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  remindRecipient(signatureRequestId, recipientId, callback) {
    return this.request({
      method: 'PUT',
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_REMIND_ENDPOINT,
      ids: { signature_request_id: signatureRequestId, recipient_id: recipientId },
    }, callback);
  }

  /**
   * Returns information about sendtosign recipient`s attached additional documents.
   * @param {number} signatureRequestId Id of signature request
   * @param {number} recipientId Id of recipient
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getRecipientAllAdditional(signatureRequestId, recipientId, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_ENDPOINT,
      ids: { signature_request_id: signatureRequestId, recipient_id: recipientId },
    }, callback);
  }

  /**
   * Returns information about sendtosign recipient`s attached additional document.
   * @param {number} signatureRequestId Id of signature request
   * @param {number} recipientId Id of recipient
   * @param {number} additionalDocumentId Id of additional document
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  getRecipientAdditional(signatureRequestId, recipientId, additionalDocumentId, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_BY_ID_ENDPOINT,
      ids: { signature_request_id: signatureRequestId, recipient_id: recipientId, additional_document_id: additionalDocumentId },
    }, callback);
  }

  /**
   * Downloads a file of a sendtosign recipient`s additional document.
   * @param {number} signatureRequestId of signature request
   * @param {number} recipientId Id of recipient
   * @param {number} additionalDocumentId Id of additional document
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  downloadRecipientAdditional(signatureRequestId, recipientId, additionalDocumentId, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_BY_ID_DOWNLOAD_ENDPOINT,
      ids: { signature_request_id: signatureRequestId, recipient_id: recipientId, additional_document_id: additionalDocumentId },
    }, callback);
  }

  /**
   * Downloads a zip-file of all additional documents for a sendtosign recipient. This method can give three statuses: Creating a Job with Job ID, Waiting (if zip is still in progress) or Zip content (if files ready to export).
   * @param {number} signatureRequestId Id of signature request
   * @param {number} recipientId Id of recipient
   * @param {function} [callback] callback function
   * @returns {Promise|void}
   */
  downloadRecipientAllAdditional(signatureRequestId, recipientId, callback) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_DOWNLOAD_ENDPOINT,
      ids: { signature_request_id: signatureRequestId, recipient_id: recipientId },
    }, callback);
  }
}

module.exports = SignatureRequests;
