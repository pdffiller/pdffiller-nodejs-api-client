const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');

const applicationsMock = [
  {
    id: 'fd203a534c31ad20',
    secret: '9MAoB51ooCW8yKAiuyszuNJyN21C9Oui',
    name: 'Custom name',
    description: 'application description',
    domain: 'domain.com',
    logo: 'logo url',
    redirect_uri: 'http://www.domain.com',
    embedded_client: {
      domain: 'domain.com',
      allow_all_domains: true
    }
  },
];

describe('PDFfiller applications', () => {
  it('should get applications list', () => {
    nock(constants.BASE_URL)
      .get(constants.APPLICATIONS_ENDPOINT)
      .reply(200, { items: applicationsMock });

    return PDFfiller.applications.all()
      .then((response) => {
        response.items[0].id.should.be.equal(applicationsMock[0].id);
      });
  });

  it('should get application by id', () => {
    nock(constants.BASE_URL)
      .get(constants.APPLICATIONS_BY_ID_ENDPOINT.replace('{application_id}', '1'))
      .reply(200, applicationsMock[0]);

    return PDFfiller.applications.get(1)
      .then((response) => {
        response.id.should.be.equal(applicationsMock[0].id);
      });
  });

  it('should create application', () => {
    nock(constants.BASE_URL)
      .post(constants.APPLICATIONS_ENDPOINT)
      .reply(200, applicationsMock[0]);

    return PDFfiller.applications.create(applicationsMock[0])
      .then((response) => {
        response.id.should.be.equal(applicationsMock[0].id);
      });
  });

  it('should update application', () => {
    nock(constants.BASE_URL)
      .put(constants.APPLICATIONS_BY_ID_ENDPOINT.replace('{application_id}', '1'))
      .reply(200, applicationsMock[0]);

    return PDFfiller.applications.update(1, applicationsMock[0])
      .then((response) => {
        response.id.should.be.equal(applicationsMock[0].id);
      });
  });

  it('should delete application', () => {
    nock(constants.BASE_URL)
      .delete(constants.APPLICATIONS_BY_ID_ENDPOINT.replace('{application_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.applications.remove(1)
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });

  it('should get application users list', () => {
    nock(constants.BASE_URL)
      .get(constants.APPLICATIONS_USERS_BY_ID_ENDPOINT.replace('{application_id}', '1'))
      .reply(200, { user_id: 111, email: 'user@mail.com' });

    return PDFfiller.applications.users('1')
      .then((response) => {
        response.user_id.should.be.equal(111);
      });
  });
});
