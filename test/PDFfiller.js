const should = require('should'); // eslint-disable-line
const sinon = require('sinon');
require('should-sinon');
const nock = require('nock');

const PDFfiller = require('../index.js')();
const config = require('../config.json');
const constants = require('../lib/constants');

const mockToken = 'mocksecuretoken';
nock(constants.BASE_URL)
  .post(constants.AUTH_ENDPOINT)
  .times(5)
  .reply(200, {
    access_token: mockToken,
    refresh_token: mockToken,
    expires_in: 86400,
    token_type: 'token'
  });

describe('PDFfiller', () => {
  describe('get and set token', () => {
    it('should set token', () => {
      PDFfiller.setAccessToken(mockToken);
      PDFfiller.token.should.be.equal(mockToken);
    });
    it('should get token', () => {
      PDFfiller.getAccessToken().should.be.equal(mockToken);
    });
  });

  describe('authorization', () => {
    const autoUpdateTokenStub = sinon.stub(PDFfiller.api, 'autoUpdateToken');

    it('shouldn`t call autoUpdateToken, when autoUpdate false', (done) => {
      PDFfiller.autoTokenUpdate = false;

      PDFfiller.authorization({
        grant_type: config.grant_type,
        client_id: config.client_id,
        client_secret: config.client_secret,
        username: config.username,
        password: config.password
      }).then(() => {
        autoUpdateTokenStub.should.not.be.called();
        done();
      });
    });

    it('should call autoUpdateToken, when autoUpdate true', (done) => {
      PDFfiller.autoTokenUpdate = true;
      PDFfiller.authorization({
        grant_type: config.grant_type,
        client_id: config.client_id,
        client_secret: config.client_secret,
        username: config.username,
        password: config.password
      }).then((data) => {
        autoUpdateTokenStub.should.be.calledWith(data);
        done();
      });
    });

    it('should return a Promise', () => {
      PDFfiller.authorization({
        grant_type: config.grant_type,
        client_id: config.client_id,
        client_secret: config.client_secret,
        username: config.username,
        password: config.password
      }).should.be.a.Promise();
    });

    it('should have token data in promise', (done) => {
      PDFfiller.authorization({
        grant_type: config.grant_type,
        client_id: config.client_id,
        client_secret: config.client_secret,
        username: config.username,
        password: config.password
      }).then((data) => {
        data.should.have.properties(['token_type', 'expires_in', 'access_token', 'refresh_token']);
        done();
      });
    });

    it('should set token after success authorization', (done) => {
      const setAccessTokenSpy = sinon.spy(PDFfiller, 'setAccessToken');

      PDFfiller.authorization({
        grant_type: config.grant_type,
        client_id: config.client_id,
        client_secret: config.client_secret,
        username: config.username,
        password: config.password
      }).then((data) => {
        setAccessTokenSpy.should.be.calledWith(data.access_token);
        done();
      });
    });
  });
});
