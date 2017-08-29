const should = require('should'); // eslint-disable-line
const sinon = require('sinon'); // eslint-disable-line
require('should-sinon');
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const config = require('../../config.example.json');
const endpoints = require('../../lib/constants/endpoints');
const mocks = require('../mocks/mocksData');

describe('PDFfiller authorization', () => {
  it('should set and get a token', () => {
    PDFfiller.auth.setAccessToken(mocks.auth.access_token);
    PDFfiller.auth.getAccessToken().should.be.equal(mocks.auth.access_token);
  });

  it('should authorize and set a token', () => {
    nock(endpoints.BASE_URL)
      .post(endpoints.AUTH_ENDPOINT)
      .reply(200, mocks.auth);

    return PDFfiller.auth.authorize({
      grant_type: config.grant_type,
      client_id: config.client_id,
      client_secret: config.client_secret,
      username: config.username,
      password: config.password
    }).then((data) => {
      data.access_token.should.be.equal(mocks.auth.access_token);
      PDFfiller.auth.getAccessToken().should.be.equal(mocks.auth.access_token);
    });
  });

  it('should authorize and call auto update token, when autoUpdate true', () => {
    nock(endpoints.BASE_URL)
      .post(endpoints.AUTH_ENDPOINT)
      .reply(200, mocks.auth);
    const autoUpdateStub = sinon.stub(PDFfiller.auth, 'autoUpdateToken');

    return PDFfiller.auth.authorize({
      grant_type: config.grant_type,
      client_id: config.client_id,
      client_secret: config.client_secret,
      username: config.username,
      password: config.password
    }, true).then((data) => {
      autoUpdateStub.should.be.calledWith(data);
    });
  });

  it('should catch authorize error', () => {
    nock(endpoints.BASE_URL)
      .post(endpoints.AUTH_ENDPOINT)
      .reply(400, { error: 'error' });

    return PDFfiller.auth.authorize({
      grant_type: config.grant_type,
      client_id: config.client_id,
      client_secret: config.client_secret,
      username: config.username,
      password: config.password
    }, true).then(() => {})
      .catch((error) => {
        error.error.should.be.deepEqual({ error: 'error' });
      });
  });
});
