const should = require('should'); // eslint-disable-line
const sinon = require('sinon'); // eslint-disable-line
require('should-sinon');
const nock = require('nock');

const PDFfiller = require('../index.js');
const config = require('../config.json');
const constants = require('../lib/constants/index');

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
  describe('authorization', () => {
    it('should return a Promise', () => {
      PDFfiller.authorization({
        grant_type: config.grant_type,
        client_id: config.client_id,
        client_secret: config.client_secret,
        username: config.username,
        password: config.password
      }).should.be.a.Promise();
    });
  });
});
