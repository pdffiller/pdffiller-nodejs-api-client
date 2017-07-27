const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');
const mocks = require('../mocks/mocksData');

describe('PDFfiller callbacks global', () => {
  it('should get callback', () => {
    nock(constants.BASE_URL)
      .get(constants.CALLBACKS_GLOBAL_BY_ID_ENDPOINT)
      .reply(200, mocks.callbacksGlobal);

    return PDFfiller.callbacksGlobal.get()
      .then((response) => {
        response.callback_url.should.be.equal(mocks.callbacksGlobal.callback_url);
      });
  });

  it('should update callback', () => {
    nock(constants.BASE_URL)
      .put(constants.CALLBACKS_GLOBAL_BY_ID_ENDPOINT)
      .reply(200, mocks.callbacksGlobal);

    return PDFfiller.callbacksGlobal.update(1, {
      callback_url: 'http://api.newpdffiller.com'
    })
      .then((response) => {
        response.callback_url.should.be.equal(mocks.callbacksGlobal.callback_url);
      });
  });

  it('should delete callback', () => {
    nock(constants.BASE_URL)
      .delete(constants.CALLBACKS_GLOBAL_BY_ID_ENDPOINT)
      .reply(200, { total: 1 });

    return PDFfiller.callbacksGlobal.remove()
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });
});
