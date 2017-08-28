const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const endpoints = require('../../lib/constants/endpoints');
const mocks = require('../mocks/mocksData').applications;

describe('PDFfiller applications', () => {
  it('should get applications list', () => {
    nock(endpoints.BASE_URL)
      .get(endpoints.APPLICATIONS_ENDPOINT)
      .query({
        per_page: 15
      })
      .reply(200, { items: mocks });

    return PDFfiller.applications.all({
      per_page: 15
    })
      .then((response) => {
        response.items.should.deepEqual(mocks);
      });
  });

  it('should get application by id', () => {
    nock(endpoints.BASE_URL)
      .get(endpoints.APPLICATIONS_BY_ID_ENDPOINT.replace('{application_id}', '1'))
      .reply(200, mocks[0]);

    return PDFfiller.applications.get(1)
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should create application', () => {
    nock(endpoints.BASE_URL)
      .post(endpoints.APPLICATIONS_ENDPOINT)
      .reply(200, mocks[0]);

    return PDFfiller.applications.create(mocks[0])
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should update application', () => {
    nock(endpoints.BASE_URL)
      .put(endpoints.APPLICATIONS_BY_ID_ENDPOINT.replace('{application_id}', '1'))
      .reply(200, mocks[0]);

    return PDFfiller.applications.update(1, mocks[0])
      .then((response) => {
        response.should.deepEqual(mocks[0]);
      });
  });

  it('should delete application', () => {
    nock(endpoints.BASE_URL)
      .delete(endpoints.APPLICATIONS_BY_ID_ENDPOINT.replace('{application_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.applications.remove(1)
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });

  it('should get application users list', () => {
    nock(endpoints.BASE_URL)
      .get(endpoints.APPLICATIONS_USERS_BY_ID_ENDPOINT.replace('{application_id}', '1'))
      .query({
        per_page: 15
      })
      .reply(200, { user_id: 111, email: 'user@mail.com' });

    return PDFfiller.applications.getUsers(1, {
      per_page: 15
    })
      .then((response) => {
        response.user_id.should.be.equal(111);
      });
  });
});
