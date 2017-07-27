const should = require('should'); // eslint-disable-line
const sinon = require('sinon'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../index.js').PDFfiller;
const config = require('../config.json');
const constants = require('../lib/constants/index');
const mocks = require('./mocks/mocksData');

describe('PDFfiller authorization', () => {
  it('should set and get a token', () => {
    PDFfiller.setAccessToken(mocks.auth.access_token);
    PDFfiller.getAccessToken().should.be.equal(mocks.auth.access_token);
  });

  it('should authorize and set a token', () => {
    nock(constants.BASE_URL)
      .post(constants.AUTH_ENDPOINT)
      .reply(200, mocks.auth);

    return PDFfiller.authorization({
      grant_type: config.grant_type,
      client_id: config.client_id,
      client_secret: config.client_secret,
      username: config.username,
      password: config.password
    }).then((data) => {
      data.access_token.should.be.equal(mocks.auth.access_token);
      PDFfiller.getAccessToken().should.be.equal(mocks.auth.access_token);
    });
  });
});
