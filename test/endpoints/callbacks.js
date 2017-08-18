const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');
const mocks = require('../mocks/mocksData').callbacks;

describe('PDFfiller callbacks', () => {
  it('should get callbacks list', () => {
    nock(constants.BASE_URL)
      .get(constants.CALLBACKS_ENDPOINT)
      .query({
        per_page: 15
      })
      .reply(200, { items: mocks });

    return PDFfiller.callbacks.all({
      per_page: 15
    })
      .then((response) => {
        response.items.should.deepEqual(mocks);
      });
  });

  it('should get callback by id', () => {
    nock(constants.BASE_URL)
      .get(constants.CALLBACKS_BY_ID_ENDPOINT.replace('{callback_id}', '1'))
      .reply(200, mocks[0]);

    return PDFfiller.callbacks.get('1')
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should create callback', () => {
    nock(constants.BASE_URL)
      .post(constants.CALLBACKS_ENDPOINT)
      .reply(200, mocks[0]);

    return PDFfiller.callbacks.create({
      document_id: 1,
      event_id: 'fill_request.done',
      callback_url: 'http://api.pdffiller.com'
    })
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should update callback', () => {
    nock(constants.BASE_URL)
      .put(constants.CALLBACKS_BY_ID_ENDPOINT.replace('{callback_id}', '1'))
      .reply(200, mocks[0]);

    return PDFfiller.callbacks.update(1, {
      event_id: 'signature_request.done',
      callback_url: 'http://api.newpdffiller.com'
    })
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should delete callback', () => {
    nock(constants.BASE_URL)
      .delete(constants.CALLBACKS_BY_ID_ENDPOINT.replace('{callback_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.callbacks.remove(1)
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });
});
