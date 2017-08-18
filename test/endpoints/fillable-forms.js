const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');
const mocks = require('../mocks/mocksData').fillableForms;

describe('PDFfiller fillable form', () => {
  it('should get fill requests list', () => {
    nock(constants.BASE_URL)
      .get(constants.FILLABLE_FORMS_ENDPOINT)
      .query({
        per_page: 15
      })
      .reply(200, { items: mocks.fillable });

    return PDFfiller.fillableForms.all({
      per_page: 15
    })
      .then((response) => {
        response.items.should.deepEqual(mocks.fillable);
      });
  });

  it('should get fill requests by id', () => {
    nock(constants.BASE_URL)
      .get(constants.FILLABLE_FORMS_BY_ID_ENDPOINT.replace('{link_to_fill_id}', 1))
      .reply(200, mocks.fillable[0]);

    return PDFfiller.fillableForms.get(1)
      .then((response) => {
        response.should.deepEqual(mocks.fillable[0]);
      });
  });

  it('should create fillable document', () => {
    nock(constants.BASE_URL)
      .post(constants.FILLABLE_FORMS_ENDPOINT)
      .reply(200, mocks.fillable[0]);

    return PDFfiller.fillableForms.create({
      access: 'full',
      status: 'public',
      email_required: true,
      allow_downloads: false,
      name_required: true,
      custom_message: '``',
      notification_emails: [{ name: 'Username', email: 'some-email@domain.com' }],
      notifications: 'disabled',
      enforce_required_fields: true,
      custom_logo_id: 0,
      welcome_screen: false,
      reusable: true,
      additional_documents: ['docs1', 'docs2']
    })
      .then((response) => {
        response.should.deepEqual(mocks.fillable[0]);
      });
  });

  it('should update  fill request', () => {
    nock(constants.BASE_URL)
      .put(constants.FILLABLE_FORMS_BY_ID_ENDPOINT.replace('{link_to_fill_id}', 1))
      .reply(200, mocks.fillable[0]);

    return PDFfiller.fillableForms.update(1, {
      access: 'full',
      status: 'public',
      email_required: true,
      allow_downloads: false,
      name_required: true,
      enforce_required_fields: true,
      welcome_screen: false,
      reusable: true
    })
      .then((response) => {
        response.should.deepEqual(mocks.fillable[0]);
      });
  });

  it('should delete  fill request', () => {
    nock(constants.BASE_URL)
      .delete(constants.FILLABLE_FORMS_BY_ID_ENDPOINT.replace('{link_to_fill_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.fillableForms.remove(1)
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });

  it('should download all filled forms', () => {
    nock(constants.BASE_URL)
      .get(constants.FILLABLE_FORMS_DOWNLOAD_ENDPOINT.replace('{link_to_fill_id}', '1'))
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.fillableForms.download(1)
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should get filled forms list', () => {
    nock(constants.BASE_URL)
      .get(constants.FILLABLE_FORMS_FILLED_ENDPOINT.replace('{link_to_fill_id}', '1'))
      .query({
        per_page: 15
      })
      .reply(200, { items: mocks.filled });

    return PDFfiller.fillableForms.allFilled(1, {
      per_page: 15
    })
      .then((response) => {
        response.items.should.deepEqual(mocks.filled);
      });
  });

  it('should get filled forms by id', () => {
    nock(constants.BASE_URL)
      .get(constants.FILLABLE_FORMS_FILLED_BY_ID_ENDPOINT.replace('{link_to_fill_id}', 1).replace('{filled_form_id}', 1))
      .reply(200, mocks.filled[0]);

    return PDFfiller.fillableForms.getFilled(1, 1)
      .then((response) => {
        response.should.deepEqual(mocks.filled[0]);
      });
  });

  it('should remove filled forms by id', () => {
    nock(constants.BASE_URL)
      .delete(constants.FILLABLE_FORMS_FILLED_BY_ID_ENDPOINT.replace('{link_to_fill_id}', 1).replace('{filled_form_id}', 1))
      .reply(200, { total: 1 });

    return PDFfiller.fillableForms.removeFilled(1, 1)
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });

  it('should exports filled form data', () => {
    nock(constants.BASE_URL)
      .get(constants.FILLABLE_FORMS_FILLED_EXPORT_ENDPOINT.replace('{link_to_fill_id}', 1).replace('{filled_form_id}', 1))
      .reply(200, mocks.export);

    return PDFfiller.fillableForms.filledExport(1, 1)
      .then((response) => {
        response.should.deepEqual(mocks.export);
      });
  });

  it('should exports filled form data', () => {
    nock(constants.BASE_URL)
      .get(constants.FILLABLE_FORMS_FILLED_DOWNLOAD_ENDPOINT.replace('{link_to_fill_id}', 1).replace('{filled_form_id}', 1))
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.fillableForms.filledDownload(1, 1)
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should return a list of a LinkToFill recipient`s attached additional documents', () => {
    nock(constants.BASE_URL)
      .get(constants.FILLABLE_FORMS_FILLED_ADDITIONAL_ENDPOINT.replace('{link_to_fill_id}', 1).replace('{filled_form_id}', 1))
      .reply(200, { items: mocks.additional });

    return PDFfiller.fillableForms.filledAllAdditional(1, 1)
      .then((response) => {
        response.items.should.deepEqual(mocks.additional);
      });
  });

  it('should return information about one LinkToFill recipient`s attached additional documents', () => {
    nock(constants.BASE_URL)
      .get(constants.FILLABLE_FORMS_FILLED_ADDITIONAL_BY_ID_ENDPOINT.replace('{link_to_fill_id}', 1).replace('{filled_form_id}', 1).replace('{additional_document_id}', 1))
      .reply(200, mocks.additional[0]);

    return PDFfiller.fillableForms.filledAdditional(1, 1, 1)
      .then((response) => {
        response.should.deepEqual(mocks.additional[0]);
      });
  });

  it('should download a file of a LinkToFill filled form`s additional document', () => {
    nock(constants.BASE_URL)
      .get(constants.FILLABLE_FORMS_FILLED_ADDITIONAL_BY_ID_DOWNLOAD_ENDPOINT.replace('{link_to_fill_id}', 1).replace('{filled_form_id}', 1).replace('{additional_document_id}', 1))
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.fillableForms.filledAdditionalDownload(1, 1, 1)
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should downloads a zip-file of all LinkToFill filled form`s additional documents.', () => {
    nock(constants.BASE_URL)
      .get(constants.FILLABLE_FORMS_FILLED_ADDITIONAL_DOWNLOAD_ENDPOINT.replace('{link_to_fill_id}', 1).replace('{filled_form_id}', 1))
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.fillableForms.filledAllAdditionalDownload(1, 1)
      .then((response) => {
        response.should.be.Object();
      });
  });
});
