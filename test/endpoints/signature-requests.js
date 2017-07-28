const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');
const mocks = require('../mocks/mocksData').signatureRequests;

describe('PDFfiller signature requests', () => {
  it('should get signature requests list', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_ENDPOINT)
      .reply(200, { items: mocks.signatureRequest });

    return PDFfiller.signatureRequests.all()
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
      document_id: 1023456789,
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

    return PDFfiller.signatureRequests.certificate(1)
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should returns a signed document by Signature request id', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_SIGNED_ENDPOINT.replace('{signature_request_id}', '1'))
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.signatureRequests.signedDocument(1)
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should get signature requests list in the inbox folder', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_INBOX_ENDPOINT)
      .reply(200, { items: mocks.signatureRequest });

    return PDFfiller.signatureRequests.allInbox()
      .then((response) => {
        response.items.should.deepEqual(mocks.signatureRequest);
      });
  });

  it('should download all documents which a sender has requested your signature for in a .zip archive.', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_INBOX_DOWNLOAD_ENDPOINT)
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.signatureRequests.downloadInbox()
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should get information about sendtosign recipients and signature status', () => {
    nock(constants.BASE_URL)
      .get(constants.SIGNATURE_REQUESTS_RECIPIENTS_ENDPOINT.replace('{signature_request_id}', '1'))
      .reply(200, { items: mocks.recipients });

    return PDFfiller.signatureRequests.allRecipients(1)
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
});
