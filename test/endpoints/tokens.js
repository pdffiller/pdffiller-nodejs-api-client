const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');
const mocks = require('../mocks/mocksData');

describe('PDFfiller tokens', () => {
  it('should get tokens list', () => {
    nock(constants.BASE_URL)
      .get(constants.TOKENS_ENDPOINT)
      .reply(200, { items: mocks.tokens });

    return PDFfiller.tokens.all()
      .then((response) => {
        response.items[0].id.should.be.equal(mocks.tokens[0].id);
      });
  });

  it('should get token by id', () => {
    nock(constants.BASE_URL)
      .get(constants.TOKENS_BY_ID_ENDPOINT.replace('{token_id}', '1'))
      .reply(200, mocks.tokens[0]);

    return PDFfiller.tokens.get(1)
      .then((response) => {
        response.id.should.be.equal(mocks.tokens[0].id);
      });
  });

  it('should create token', () => {
    nock(constants.BASE_URL)
      .post(constants.TOKENS_ENDPOINT)
      .reply(200, mocks.tokens[0]);

    return PDFfiller.tokens.create(mocks.tokens[0].data)
      .then((response) => {
        response.id.should.be.equal(mocks.tokens[0].id);
      });
  });

  it('should update token', () => {
    nock(constants.BASE_URL)
      .put(constants.TOKENS_BY_ID_ENDPOINT.replace('{token_id}', '1'))
      .reply(200, mocks.tokens[0]);

    return PDFfiller.tokens.update(1, mocks.tokens[0].data)
      .then((response) => {
        response.id.should.be.equal(mocks.tokens[0].id);
      });
  });

  it('should delete token', () => {
    nock(constants.BASE_URL)
      .delete(constants.TOKENS_BY_ID_ENDPOINT.replace('{token_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.tokens.remove(1)
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });
});
