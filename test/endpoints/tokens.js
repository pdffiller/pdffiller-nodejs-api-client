const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const endpoints = require('../../lib/constants/endpoints');
const mocks = require('../mocks/mocksData').tokens;

describe('PDFfiller tokens', () => {
  it('should get tokens list', () => {
    nock(endpoints.BASE_URL)
      .get(endpoints.TOKENS_ENDPOINT)
      .query({
        per_page: 15
      })
      .reply(200, { items: mocks });

    return PDFfiller.tokens.all({
      per_page: 15
    })
      .then((response) => {
        response.items.should.deepEqual(mocks);
      });
  });

  it('should get token by id', () => {
    nock(endpoints.BASE_URL)
      .get(endpoints.TOKENS_BY_ID_ENDPOINT.replace('{token_id}', '1'))
      .reply(200, mocks[0]);

    return PDFfiller.tokens.get(1)
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should create token', () => {
    nock(endpoints.BASE_URL)
      .post(endpoints.TOKENS_ENDPOINT)
      .reply(200, mocks[0]);

    return PDFfiller.tokens.create(mocks[0].data)
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should update token', () => {
    nock(endpoints.BASE_URL)
      .put(endpoints.TOKENS_BY_ID_ENDPOINT.replace('{token_id}', '1'))
      .reply(200, mocks[0]);

    return PDFfiller.tokens.update(1, mocks[0].data)
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should delete token', () => {
    nock(endpoints.BASE_URL)
      .delete(endpoints.TOKENS_BY_ID_ENDPOINT.replace('{token_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.tokens.remove(1)
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });
});
