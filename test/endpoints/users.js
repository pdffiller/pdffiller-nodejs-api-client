const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');
const mocks = require('../mocks/mocksData').user;

describe('PDFfiller user', () => {
  it('should get user info', () => {
    nock(constants.BASE_URL)
      .get(constants.USERS_ENDPOINT)
      .reply(200, mocks);

    return PDFfiller.user.get()
      .then((response) => {
        response.should.deepEqual(mocks);
      });
  });
});
