const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');
const mocks = require('../mocks/mocksData').callbacksGlobal;

describe('PDFfiller callbacks global', () => {
  it('should get callback', () => {
    nock(constants.BASE_URL)
      .get(constants.CALLBACKS_GLOBAL_ENDPOINT)
      .reply(200, mocks);

    return PDFfiller.callbacksGlobal.get()
      .then((response) => {
        response.should.deepEqual(mocks);
      });
  });

  it('should update callback', () => {
    nock(constants.BASE_URL)
      .put(constants.CALLBACKS_GLOBAL_ENDPOINT)
      .reply(200, mocks);

    return PDFfiller.callbacksGlobal.update({
      callback_url: 'http://api.newpdffiller.com'
    })
      .then((response) => {
        response.should.deepEqual(mocks);
      });
  });

  it('should delete callback', () => {
    nock(constants.BASE_URL)
      .delete(constants.CALLBACKS_GLOBAL_ENDPOINT)
      .reply(200, { total: 1 });

    return PDFfiller.callbacksGlobal.remove()
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });
});
