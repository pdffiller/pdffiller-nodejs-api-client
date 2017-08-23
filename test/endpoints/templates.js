const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');
const mocks = require('../mocks/mocksData').templates;

describe('PDFfiller templates', () => {
  it('should get templates list', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_ENDPOINT)
      .query({
        folder_id: 0
      })
      .reply(200, { items: mocks.templates });

    return PDFfiller.templates.all({
      folder_id: 0
    })
      .then((response) => {
        response.items.should.deepEqual(mocks.templates);
      });
  });

  it('should get template by id', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_BY_ID_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, mocks.templates[0]);

    return PDFfiller.templates.get(1)
      .then((response) => {
        response.should.deepEqual(mocks.templates[0]);
      });
  });

  it('should create template', () => {
    nock(constants.BASE_URL)
      .post(constants.TEMPLATES_ENDPOINT)
      .reply(200, mocks.templates[0]);

    return PDFfiller.templates.create('fileurl/filename.pdf')
      .then((response) => {
        response.should.deepEqual(mocks.templates[0]);
      });
  });

  it('should update template', () => {
    nock(constants.BASE_URL)
      .put(constants.TEMPLATES_BY_ID_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, mocks.templates[0]);

    return PDFfiller.templates.update('1', {
      name: 'newname.pdf',
      folder_id: 11
    })
      .then((response) => {
        response.should.deepEqual(mocks.templates[0]);
      });
  });

  it('should download template', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_DOWNLOAD_ENDPOINT.replace('{template_id}', '1'))
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.templates.download('1')
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should download original template', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_DOWNLOAD_ORIGINAL_ENDPOINT.replace('{template_id}', '1'))
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.templates.downloadOriginal('1')
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should get template roles', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_ROLES_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, { items: mocks.roles });

    return PDFfiller.templates.getRoles(1)
      .then((response) => {
        response.items.should.deepEqual(mocks.roles);
      });
  });

  it('should delete template', () => {
    nock(constants.BASE_URL)
      .delete(constants.TEMPLATES_BY_ID_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.templates.remove(1)
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });

  it('should return template fields for form', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_FIELDS_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, mocks.fields);

    return PDFfiller.templates.getFields(1)
      .then((response) => {
        response.should.deepEqual(mocks.fields);
      });
  });

  it('should return child documents', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_FILLED_DOCS_ENDPOINT.replace('{template_id}', '1'))
      .query({
        per_page: 15
      })
      .reply(200, { total: 1 });

    return PDFfiller.templates.getChilds(1, {
      per_page: 15
    })
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });

  it('should download signatures', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_DOWNLOAD_SIGNATURES_ENDPOINT.replace('{template_id}', '1'))
      .replyWithFile(200, `${__dirname}/../mocks/test.txt`);

    return PDFfiller.templates.downloadSignatures('1')
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should populates a fillable form template', () => {
    nock(constants.BASE_URL)
      .post(constants.TEMPLATES_BY_ID_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, mocks.templates[0]);

    return PDFfiller.templates.fillTemplate(1, {
      fillable_fields: {
        field_1: 'sometext'
      },
      name: 'name_of_new_document',
      folder_id: 1
    })
      .then((response) => {
        response.should.deepEqual(mocks.templates[0]);
      });
  });

  it('should create a new share link to a document', () => {
    nock(constants.BASE_URL)
      .post(constants.TEMPLATES_CONSTRUCTOR_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, mocks.constructor);

    return PDFfiller.templates.createShareLink(1, {
      expire: 6,
      callback_url: 'some-url'
    })
      .then((response) => {
        response.should.deepEqual(mocks.constructor);
      });
  });

  it('should retrieves a list of hash', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_CONSTRUCTOR_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, mocks.constructorList);

    return PDFfiller.templates.getShareLink(1)
      .then((response) => {
        response.should.deepEqual(mocks.constructorList);
      });
  });

  it('should delete one share link to a document by hash', () => {
    nock(constants.BASE_URL)
      .delete(`${constants.TEMPLATES_CONSTRUCTOR_ENDPOINT.replace('{template_id}', '1')}/hash_string`)
      .reply(200, mocks.remove);

    return PDFfiller.templates.removeShareLinkByHash(1, 'hash_string')
      .then((response) => {
        response.should.deepEqual(mocks.remove);
      });
  });

  it('should all share links to a document by id', () => {
    nock(constants.BASE_URL)
      .delete(constants.TEMPLATES_CONSTRUCTOR_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, mocks.remove);

    return PDFfiller.templates.removeAllShareLink(1)
      .then((response) => {
        response.should.deepEqual(mocks.remove);
      });
  });
});
