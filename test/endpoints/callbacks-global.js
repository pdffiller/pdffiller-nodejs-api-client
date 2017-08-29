const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const endpoints = require('../../lib/constants/endpoints');
const mocks = require('../mocks/mocksData').callbacksGlobal;

describe('PDFfiller callbacks global', () => {
  it('should get callback', () => {
    nock(endpoints.BASE_URL)
      .get(endpoints.CALLBACKS_GLOBAL_ENDPOINT)
      .reply(200, mocks);

    return PDFfiller.callbacksGlobal.get()
      .then((response) => {
        response.should.deepEqual(mocks);
      });
  });

  it('should update callback', () => {
    nock(endpoints.BASE_URL)
      .put(endpoints.CALLBACKS_GLOBAL_ENDPOINT)
      .reply(200, mocks);

    return PDFfiller.callbacksGlobal.update({
      callback_url: 'http://api.newpdffiller.com'
    })
      .then((response) => {
        response.should.deepEqual(mocks);
      });
  });

  it('should delete callback', () => {
    nock(endpoints.BASE_URL)
      .delete(endpoints.CALLBACKS_GLOBAL_ENDPOINT)
      .reply(200, { total: 1 });

    return PDFfiller.callbacksGlobal.remove()
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });
});
