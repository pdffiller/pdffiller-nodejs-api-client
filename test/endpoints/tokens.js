const should = require('should'); // eslint-disable-line
const sinon = require('sinon'); // eslint-disable-line
require('should-sinon');
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');

const tokensMock = [
  {
    id: 123,
    hash: 'some_hash_string',
    data: {
      key_1: 'Foo',
      key_2: 'Bar',
      key_3: '12345'
    }
  }
];

describe('PDFfiller tokens', () => {
  it('should get tokens list', () => {
    nock(constants.BASE_URL)
      .get(constants.TOKENS_ENDPOINT)
      .reply(200, { items: tokensMock });

    PDFfiller.tokens.all()
      .then((response) => {
        response.items[0].id.should.be.equal(tokensMock[0].id);
      });
  });

  it('should get token by id', () => {
    nock(constants.BASE_URL)
      .get(constants.TOKENS_BY_ID_ENDPOINT.replace('{token_id}', '1'))
      .reply(200, tokensMock[0]);

    PDFfiller.tokens.get(1)
      .then((response) => {
        response.id.should.be.equal(tokensMock[0].id);
      });
  });

  it('should create token', () => {
    nock(constants.BASE_URL)
      .post(constants.TOKENS_ENDPOINT)
      .reply(200, tokensMock[0]);

    PDFfiller.tokens.create(tokensMock[0])
      .then((response) => {
        response.id.should.be.equal(tokensMock[0].id);
      });
  });

  it('should update token', () => {
    nock(constants.BASE_URL)
      .put(constants.TOKENS_BY_ID_ENDPOINT.replace('{token_id}', '1'))
      .reply(200, tokensMock[0]);

    PDFfiller.tokens.update(1, tokensMock[0])
      .then((response) => {
        response.id.should.be.equal(tokensMock[0].id);
      });
  });

  it('should delete token', () => {
    const scope = nock(constants.BASE_URL)
      .delete(constants.TOKENS_BY_ID_ENDPOINT.replace('{token_id}', '1'))
      .reply(200, { total: 1 });

    PDFfiller.tokens.delete(1)
      .then((response) => {
        response.total.should.be.equal(1);
        scope.done();
      });
  });
});
