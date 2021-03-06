const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const endpoints = require('../../lib/constants/endpoints');
const mocks = require('../mocks/mocksData').folders;

describe('PDFfiller folders', () => {
  it('should get folders list', () => {
    nock(endpoints.BASE_URL)
      .get(endpoints.FOLDERS_ENDPOINT)
      .query({
        per_page: 15
      })
      .reply(200, { items: mocks });

    return PDFfiller.folders.all({
      per_page: 15
    })
      .then((response) => {
        response.items.should.deepEqual(mocks);
      });
  });

  it('should get folder by id', () => {
    nock(endpoints.BASE_URL)
      .get(endpoints.FOLDERS_BY_ID_ENDPOINT.replace('{folder_id}', '1'))
      .reply(200, mocks[0]);

    return PDFfiller.folders.get('1')
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should create folder', () => {
    nock(endpoints.BASE_URL)
      .post(endpoints.FOLDERS_ENDPOINT)
      .reply(200, mocks[0]);

    return PDFfiller.folders.create({
      name: 'folder_name'
    })
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should update folder', () => {
    nock(endpoints.BASE_URL)
      .put(endpoints.FOLDERS_BY_ID_ENDPOINT.replace('{folder_id}', '1'))
      .reply(200, mocks[0]);

    return PDFfiller.folders.update(1, {
      name: 'new_folder_name'
    })
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should delete folder', () => {
    nock(endpoints.BASE_URL)
      .delete(endpoints.FOLDERS_BY_ID_ENDPOINT.replace('{folder_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.folders.remove(1)
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });
});
