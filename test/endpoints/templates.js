const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');

const templatesMock = [
  {
    id: 12345678,
    name: 'File_name.extension',
    type: 'docx',
    created: 1457222400,
    updated: 1457222400,
    fillable: false,
    folder: {
      folder_id: 12345678,
      name: 'My_folder'
    }
  }
];

const templateRolesMock = [{
  id: 777,
  document_id: 111,
  role_name: 'Developer',
  order: 0
}];

const fieldsMock = {
  type: 'text',
  name: 'YourCustomFieldName',
  initial: 'default value',
  required: true,
  label: 'Text for user\'s',
  fillable: true,
  maxLines: 2,
  maxChars: 200,
  list: [
    'First Choice',
    'Second Choice'
  ],
  allowCustomText: true,
  radioGroup: 'GroupName',
  format: 'yyyy-M-d',
  value: 'some_value'
};

describe('PDFfiller templates', () => {
  it('should get templates list', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_ENDPOINT)
      .reply(200, { items: templatesMock });

    return PDFfiller.templates.all()
      .then((response) => {
        response.items[0].id.should.be.equal(templatesMock[0].id);
      });
  });

  it('should get template by id', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_BY_ID_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, templatesMock[0]);

    return PDFfiller.templates.get(1)
      .then((response) => {
        response.id.should.be.equal(templatesMock[0].id);
      });
  });

  it('should create template', () => {
    nock(constants.BASE_URL)
      .post(constants.TEMPLATES_ENDPOINT)
      .reply(200, templatesMock[0]);

    return PDFfiller.templates.create('fileurl/filename.pdf')
      .then((response) => {
        response.id.should.be.equal(templatesMock[0].id);
      });
  });

  it('should update template', () => {
    nock(constants.BASE_URL)
      .post(constants.TEMPLATES_BY_ID_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, templatesMock[0]);

    return PDFfiller.templates.update('1', {
      name: 'newname.pdf',
      folder_id: 11
    })
      .then((response) => {
        response.id.should.be.equal(templatesMock[0].id);
      });
  });

  it('should download template', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_DOWNLOAD_ENDPOINT.replace('{template_id}', '1'))
      .replyWithFile(200, `${__dirname}/../test-files/test.txt`);

    return PDFfiller.templates.download('1')
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should download original template', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_DOWNLOAD_ORIGINAL_ENDPOINT.replace('{template_id}', '1'))
      .replyWithFile(200, `${__dirname}/../test-files/test.txt`);

    return PDFfiller.templates.downloadOriginal('1')
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should get template roles', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_ROLES_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, { items: templateRolesMock });

    return PDFfiller.templates.roles('1')
      .then((response) => {
        response.items[0].id.should.be.equal(templateRolesMock[0].id);
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
      .reply(200, fieldsMock);

    return PDFfiller.templates.fields(1)
      .then((response) => {
        response.type.should.be.equal(fieldsMock.type);
      });
  });

  it('should return child documents', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_FILLED_DOCS_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.templates.filled(1)
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });

  it('should download signatures', () => {
    nock(constants.BASE_URL)
      .get(constants.TEMPLATES_DOWNLOAD_SIGNATURES_ENDPOINT.replace('{template_id}', '1'))
      .replyWithFile(200, `${__dirname}/../test-files/test.txt`);

    return PDFfiller.templates.downloadSignatures('1')
      .then((response) => {
        response.should.be.Object();
      });
  });

  it('should populates a fillable form template', () => {
    nock(constants.BASE_URL)
      .post(constants.TEMPLATES_BY_ID_ENDPOINT.replace('{template_id}', '1'))
      .reply(200, templatesMock[0]);

    return PDFfiller.templates.fill(1, {
      fillable_fields: {
        field_1: 'sometext'
      },
      name: 'name_of_new_document',
      folder_id: 1
    })
      .then((response) => {
        response.id.should.be.equal(templatesMock[0].id);
      });
  });
});
