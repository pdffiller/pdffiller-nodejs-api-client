const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const endpoints = require('../../lib/constants/endpoints');
const mocks = require('../mocks/mocksData').tools;

describe('PDFfiller tools', () => {
  it('should merge documents', () => {
    nock(endpoints.BASE_URL)
      .post(endpoints.TOOLS_MERGE_ENDPOINT)
      .reply(200, mocks.merge);

    return PDFfiller.tools.merge({
      documents: [11111, 11112, 11113],
      name: 'name',
      folder_id: 0
    })
      .then((response) => {
        response.should.deepEqual(mocks.merge);
      });
  });
  it('should merge documents with clean cache option', () => {
    nock(endpoints.BASE_URL)
      .post(endpoints.TOOLS_MERGE_ENDPOINT)
      .query({
        clear_cache: true
      })
      .reply(200, mocks.merge);

    return PDFfiller.tools.merge({
      documents: [11111, 11112, 11113],
      name: 'name',
      folder_id: 0
    }, true)
      .then((response) => {
        response.should.deepEqual(mocks.merge);
      });
  });
});
