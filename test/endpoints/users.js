const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const endpoints = require('../../lib/constants/endpoints');
const mocks = require('../mocks/mocksData').user;

describe('PDFfiller user', () => {
  it('should get user info', () => {
    nock(endpoints.BASE_URL)
      .get(endpoints.USERS_ENDPOINT)
      .reply(200, mocks);

    return PDFfiller.users.get()
      .then((response) => {
        response.should.deepEqual(mocks);
      });
  });
});
