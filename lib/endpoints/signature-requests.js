const Base = require('../extends/base');
const constants = require('../constants/');

class SignatureRequests extends Base {
  /**
   * Returns a list of all signature requests.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] signature requests on 1 page
   * @param {string} [searchParams.date_from] Filter by date from
   * @param {string} [searchParams.date_to] Filter by date to
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @returns {Promise}
   */
  all(searchParams) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_ENDPOINT,
      qs: searchParams,
    });
  }

  /**
   * Returns an signature request by id.
   * @param {number} signatureRequestId of application
   * @returns {Promise}
   */
  get(signatureRequestId) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_BY_ID_ENDPOINT,
      id: { signature_request_id: signatureRequestId }
    });
  }

  /**
   * Create new signature request with given data.
   * @param {object} signatureRequestInfo info for creating new signature request
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
   * @param {object} [signatureRequestInfo.fillable_fields] fillable fields
   * @param {string | object} [signatureRequestInfo.file] file url or file
   * @param {number} [signatureRequestInfo.folder_id] folder id
   * @param {string} [signatureRequestInfo.name name] signature request
   * @returns {Promise}
   */
  create(signatureRequestInfo) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_ENDPOINT,
      method: 'POST',
      json: typeof signatureRequestInfo.file === 'string' || !signatureRequestInfo.file,
      formData: signatureRequestInfo.file && typeof signatureRequestInfo.file !== 'string',
      data: signatureRequestInfo
    });
  }

  /**
   * Cancels a signature request for the specified SendToSign ID.
   * @param {number} signatureRequestId of signature request
   * @returns {Promise}
   */
  remove(signatureRequestId) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_BY_ID_ENDPOINT,
      method: 'DELETE',
      id: { signature_request_id: signatureRequestId }
    });
  }

  /**
   * Returns a signature request certificate by signature request id.
   * @param {number} signatureRequestId of signature request
   * @returns {Promise}
   */
  certificate(signatureRequestId) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_CERTIFICATE_ENDPOINT,
      id: { signature_request_id: signatureRequestId }
    });
  }

  /**
   * Returns a signed document by Signature request id.
   * @param {number} signatureRequestId of signature request
   * @returns {Promise}
   */
  signedDocument(signatureRequestId) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_SIGNED_ENDPOINT,
      id: { signature_request_id: signatureRequestId }
    });
  }

  /**
   * Returns a list of all signature requests in inbox folder.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] signature requests on 1 page
   * @param {string} [searchParams.status] signature requests on 1 page
   * @param {string} [searchParams.date_from] Filter by date from
   * @param {string} [searchParams.date_to] Filter by date to
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @returns {Promise}
   */
  allInbox(searchParams) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_INBOX_ENDPOINT,
      qs: searchParams,
    });
  }

  /**
   * Downloads all documents which a sender has requested your signature for in a .zip archive.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] signature requests on 1 page
   * @param {string} [searchParams.status] signature requests on 1 page
   * @param {string} [searchParams.date_from] Filter by date from
   * @param {string} [searchParams.date_to] Filter by date to
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @returns {Promise}
   */
  downloadInbox(searchParams) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_INBOX_DOWNLOAD_ENDPOINT,
      qs: searchParams,
    });
  }

  /**
   * Returns information about sendtosign recipients and signature status.
   * @param {number} signatureRequestId of signature request
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] signature requests on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @returns {Promise}
   */
  allRecipients(signatureRequestId, searchParams) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_ENDPOINT,
      qs: searchParams,
      id: { signature_request_id: signatureRequestId }
    });
  }

  /**
   * Adds an additional recipient to a sendtosign request.
   * @param {number} signatureRequestId of signature request
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
   * @returns {Promise}
   */
  addRecipients(signatureRequestId, recipients) {
    return this.request({
      method: 'POST',
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_ENDPOINT,
      id: { signature_request_id: signatureRequestId },
      data: { recipients }
    });
  }

  /**
   * Returns information about sendtosign recipients and signature status.
   * @param {number} signatureRequestId of signature request
   * @param {number} recipientId of signature request
   * @returns {Promise}
   */
  getRecipient(signatureRequestId, recipientId) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_BY_ID_ENDPOINT,
      id: { signature_request_id: signatureRequestId, recipient_id: recipientId },
    });
  }

  /**
   * Reminds a sendtosign recipient about the sendtosign request.
   * @param {number} signatureRequestId of signature request
   * @param {number} recipientId of signature request
   * @returns {Promise}
   */
  remindRecipient(signatureRequestId, recipientId) {
    return this.request({
      method: 'PUT',
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_REMIND_ENDPOINT,
      id: { signature_request_id: signatureRequestId, recipient_id: recipientId },
    });
  }

  /**
   * Returns information about sendtosign recipient`s attached additional documents.
   * @param {number} signatureRequestId of signature request
   * @param {number} recipientId of signature request
   * @returns {Promise}
   */
  recipientAllAdditional(signatureRequestId, recipientId) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_ENDPOINT,
      id: { signature_request_id: signatureRequestId, recipient_id: recipientId },
    });
  }

  /**
   * Returns information about sendtosign recipient`s attached additional documents.
   * @param {number} signatureRequestId of signature request
   * @param {number} recipientId of signature request
   * @param {number} additionalDocumentId of signature request
   * @returns {Promise}
   */
  recipientAdditional(signatureRequestId, recipientId, additionalDocumentId) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_BY_ID_ENDPOINT,
      id: { signature_request_id: signatureRequestId, recipient_id: recipientId, additional_document_id: additionalDocumentId },
    });
  }

  /**
   * Downloads a file of a sendtosign recipient`s additional document.
   * @param {number} signatureRequestId of signature request
   * @param {number} recipientId of signature request
   * @param {number} additionalDocumentId of signature request
   * @returns {Promise}
   */
  recipientAdditionalDownload(signatureRequestId, recipientId, additionalDocumentId) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_BY_ID_DOWNLOAD_ENDPOINT,
      id: { signature_request_id: signatureRequestId, recipient_id: recipientId, additional_document_id: additionalDocumentId },
    });
  }

  /**
   * Downloads a zip-file of all additional documents for a sendtosign recipient.
   * @param {number} signatureRequestId of signature request
   * @param {number} recipientId of signature request
   * @returns {Promise}
   */
  recipientAllAdditionalDownload(signatureRequestId, recipientId) {
    return this.request({
      endPoint: constants.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_DOWNLOAD_ENDPOINT,
      id: { signature_request_id: signatureRequestId, recipient_id: recipientId },
    });
  }
}

module.exports = SignatureRequests;
