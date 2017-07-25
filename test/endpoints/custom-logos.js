const should = require('should'); // eslint-disable-line
const nock = require('nock');

const PDFfiller = require('../../index.js').PDFfiller;
const constants = require('../../lib/constants/index');

const customLogosMock = [
  {
    id: 3083,
    width: 250,
    height: 250,
    filesize: 2488,
    logo_url: 'urlToLogo'
  }
];

describe('PDFfiller custom logos', () => {
  it('should get custom logos list', () => {
    nock(constants.BASE_URL)
      .get(constants.CUSTOM_LOGOS_ENDPOINT)
      .reply(200, { items: customLogosMock });

    return PDFfiller.customLogos.all()
      .then((response) => {
        response.items[0].id.should.be.equal(customLogosMock[0].id);
      });
  });

  it('should get custom logo by id', () => {
    nock(constants.BASE_URL)
      .get(constants.CUSTOM_LOGOS_BY_ID_ENDPOINT.replace('{custom_logo_id}', '1'))
      .reply(200, customLogosMock[0]);

    return PDFfiller.customLogos.get('1')
      .then((response) => {
        response.id.should.be.equal(customLogosMock[0].id);
      });
  });

  it('should create custom logo', () => {
    nock(constants.BASE_URL)
      .post(constants.CUSTOM_LOGOS_ENDPOINT)
      .reply(200, customLogosMock[0]);

    return PDFfiller.customLogos.create('fileurl/filename.jpg')
      .then((response) => {
        response.id.should.be.equal(customLogosMock[0].id);
      });
  });

  it('should delete custom logo', () => {
    nock(constants.BASE_URL)
      .delete(constants.CUSTOM_LOGOS_BY_ID_ENDPOINT.replace('{custom_logo_id}', '1'))
      .reply(200, { total: 1 });

    return PDFfiller.customLogos.remove('1')
      .then((response) => {
        response.total.should.be.equal(1);
      });
  });
});
