const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const endpoints = require('../../lib/constants/endpoints');
const mocks = require('../mocks/mocksData').customLogos;

describe('PDFfiller custom logos', () => {
  it('should get custom logos list', () => {
    nock(endpoints.BASE_URL)
      .get(endpoints.CUSTOM_LOGOS_ENDPOINT)
      .query({
        per_page: 15
      })
      .reply(200, { items: mocks });

    return PDFfiller.customLogos.all({
      per_page: 15
    })
      .then((response) => {
        response.items.should.deepEqual(mocks);
      });
  });

  it('should get custom logo by id', () => {
    nock(endpoints.BASE_URL)
      .get(endpoints.CUSTOM_LOGOS_BY_ID_ENDPOINT.replace('{custom_logo_id}', '1'))
      .reply(200, mocks[0]);

    return PDFfiller.customLogos.get('1')
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should create custom logo', () => {
    nock(endpoints.BASE_URL)
      .post(endpoints.CUSTOM_LOGOS_ENDPOINT)
      .reply(200, mocks[0]);

    return PDFfiller.customLogos.create('fileurl/filename.jpg')
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should delete custom logo', () => {
    nock(endpoints.BASE_URL)
      .delete(endpoints.CUSTOM_LOGOS_BY_ID_ENDPOINT.replace('{custom_logo_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.customLogos.remove('1')
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });
});
