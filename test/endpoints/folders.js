const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');
const mocks = require('../mocks/mocksData').folders;

describe('PDFfiller folders', () => {
  it('should get folders list', () => {
    nock(constants.BASE_URL)
      .get(constants.FOLDERS_ENDPOINT)
      .reply(200, { items: mocks });

    return PDFfiller.folders.all()
      .then((response) => {
        response.items.should.deepEqual(mocks);
      });
  });

  it('should get folder by id', () => {
    nock(constants.BASE_URL)
      .get(constants.FOLDERS_BY_ID_ENDPOINT.replace('{folder_id}', '1'))
      .reply(200, mocks[0]);

    return PDFfiller.folders.get('1')
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should create folder', () => {
    nock(constants.BASE_URL)
      .post(constants.FOLDERS_ENDPOINT)
      .reply(200, mocks[0]);

    return PDFfiller.folders.create({
      name: 'folder_name'
    })
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should update folder', () => {
    nock(constants.BASE_URL)
      .put(constants.FOLDERS_BY_ID_ENDPOINT.replace('{folder_id}', '1'))
      .reply(200, mocks[0]);

    return PDFfiller.folders.update(1, {
      name: 'new_folder_name'
    })
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should delete folder', () => {
    nock(constants.BASE_URL)
      .delete(constants.FOLDERS_BY_ID_ENDPOINT.replace('{folder_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.folders.remove(1)
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });
});
