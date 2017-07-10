const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');

const userMock = {
  id: 123456789,
  email: 'some-email@domain.com',
  avatar: 'urlToAvatarIfExists'
};

describe('PDFfiller user', () => {
  it('should get user info', () => {
    nock(constants.BASE_URL)
      .get(constants.USERS_ENDPOINT)
      .reply(200, userMock);

    return PDFfiller.user.get()
      .then((response) => {
        response.id.should.be.equal(userMock.id);
      });
  });
});
