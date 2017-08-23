const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');
const mocks = require('../mocks/mocksData').signatureRequests;

describe('PDFfiller signature requests', () => {
  it('should get signature requests list', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_ENDPOINT)
      .query({
        per_page: 15
      })
      .reply(200, { items: mocks.signatureRequest });

    return PDFfiller.signatureRequests.all({
      per_page: 15
    })
      .then((response) => {
        response.items.should.deepEqual(mocks.signatureRequest);
      });
  });

  it('should get signature request by id', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_BY_ID_ENDPOINT.replace('{signature_request_id}', '1'))
      .reply(200, mocks.signatureRequest[0]);

    return PDFfiller.signatureRequests.get(1)
      .then((response) => {
        response.should.deepEqual(mocks.signatureRequest[0]);
      });
  });

  it('should create signature request', () => {
    nock(constants.BASE_URL)
      .post(constants.SIGNATURE_REQUESTS_ENDPOINT)
      .reply(200, mocks.signatureRequest[0]);

    return PDFfiller.signatureRequests.create({
      file: 'http://link-to-file.pdf',
      method: 'sendtogroup',
      envelope_name: 'Envelope API',
      security_pin: 'standard',
      pin: '123abc',
      sign_in_order: false,
      recipients: [{
        role: 777,
        email: 'some-email@domain.com',
        name: 'John Doe',
        require_photo: false,
        message_subject: 'Digital signature request from API Testing Letter',
        message_text: 'Please sign and return the linked document with PDFfiller',
        access: 'signature',
        phone_authenticate: '',
        additional_documents: ['docs1', 'docs2']
      }]
    })
      .then((response) => {
        response.should.deepEqual(mocks.signatureRequest[0]);
      });
  });

  it('should delete signature request', () => {
    nock(constants.BASE_URL)
      .delete(constants.SIGNATURE_REQUESTS_BY_ID_ENDPOINT.replace('{signature_request_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.signatureRequests.remove(1)
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });

  it('should return a signature request certificate by signature request id', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_CERTIFICATE_ENDPOINT.replace('{signature_request_id}', '1'))
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.signatureRequests.getCertificate(1)
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should returns a signed document by Signature request id', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_SIGNED_ENDPOINT.replace('{signature_request_id}', '1'))
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.signatureRequests.downloadSignedDocument(1)
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should get signature requests list in the inbox folder', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_INBOX_ENDPOINT)
      .query({
        per_page: 15
      })
      .reply(200, { items: mocks.signatureRequest });

    return PDFfiller.signatureRequests.allInbox({
      per_page: 15
    })
      .then((response) => {
        response.items.should.deepEqual(mocks.signatureRequest);
      });
  });

  it('should download all documents which a sender has requested your signature for in a .zip archive.', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_INBOX_DOWNLOAD_ENDPOINT)
      .query({
        per_page: 15
      })
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.signatureRequests.downloadInbox({
      per_page: 15
    })
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should get information about sendtosign recipients and signature status', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_RECIPIENTS_ENDPOINT.replace('{signature_request_id}', '1'))
      .query({
        per_page: 15
      })
      .reply(200, { items: mocks.recipients });

    return PDFfiller.signatureRequests.allRecipients(1, {
      per_page: 15
    })
      .then((response) => {
        response.items.should.deepEqual(mocks.recipients);
      });
  });

  it('should add an additional recipient to a sendtosign request.', () => {
    nock(constants.BASE_URL)
      .post(constants.SIGNATURE_REQUESTS_RECIPIENTS_ENDPOINT.replace('{signature_request_id}', '1'))
      .reply(200, { items: mocks.recipients });

    return PDFfiller.signatureRequests.addRecipients(1, mocks.recipients)
      .then((response) => {
        response.items.should.deepEqual(mocks.recipients);
      });
  });

  it('should get an recipient of sendtosign request by id', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_RECIPIENTS_BY_ID_ENDPOINT.replace('{signature_request_id}', '1').replace('{recipient_id}', '1'))
      .reply(200, mocks.recipients[0]);

    return PDFfiller.signatureRequests.getRecipient(1, 1)
      .then((response) => {
        response.should.deepEqual(mocks.recipients[0]);
      });
  });

  it('should remind for recipient of sendtosign request by id', () => {
    nock(constants.BASE_URL)
      .put(constants.SIGNATURE_REQUESTS_RECIPIENTS_REMIND_ENDPOINT.replace('{signature_request_id}', '1').replace('{recipient_id}', '1'))
      .reply(200, { message: 'remind' });

    return PDFfiller.signatureRequests.remindRecipient(1, 1)
      .then((response) => {
        response.message.should.be.equal('remind');
      });
  });

  it('should return additional documents list', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_ENDPOINT.replace('{signature_request_id}', '1').replace('{recipient_id}', '1'))
      .reply(200, { items: mocks.additional_documents });

    return PDFfiller.signatureRequests.getRecipientAllAdditional(1, 1)
      .then((response) => {
        response.items.should.deepEqual(mocks.additional_documents);
      });
  });

  it('should return additional document', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_BY_ID_ENDPOINT.replace('{signature_request_id}', '1').replace('{recipient_id}', '1').replace('{additional_document_id}', '1'))
      .reply(200, mocks.additional_documents[0]);

    return PDFfiller.signatureRequests.getRecipientAdditional(1, 1, 1)
      .then((response) => {
        response.should.deepEqual(mocks.additional_documents[0]);
      });
  });

  it('should download additional document', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_BY_ID_DOWNLOAD_ENDPOINT.replace('{signature_request_id}', '1').replace('{recipient_id}', '1').replace('{additional_document_id}', '1'))
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.signatureRequests.downloadRecipientAdditional(1, 1, 1)
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should download all additional document', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_DOWNLOAD_ENDPOINT.replace('{signature_request_id}', '1').replace('{recipient_id}', '1'))
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.signatureRequests.downloadRecipientAllAdditional(1, 1)
      .then((response) => {
        response.should.be.Object();
      });
  });
});
