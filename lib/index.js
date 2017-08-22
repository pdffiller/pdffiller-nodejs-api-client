const fs = require('fs');
const path = require('path');
/**
 * The node.js client to PDFFiller api v2
 * @class PDFfillerApi
 */
const apis = {};

function requireAPI(filename) {
  return function() { // eslint-disable-line
    try {
      const endpointPath = path.join(__dirname, filename);
      const Endpoint = require(endpointPath); // eslint-disable-line
      const ep = new Endpoint();
      ep.pdffiller = this;
      return ep;
    } catch (e) {
      console.log(e); // eslint-disable-line
    }
  };
}

fs.readdirSync(path.join(__dirname, './endpoints')).forEach((file) => {
  const apiName = file.split('.')[0];
  apis[apiName] = requireAPI(`./endpoints/${file}`);
});

class PDFfillerApi {
  /**
   * @constructor
   * @function
   */
  constructor() {
    this.addApis(apis);
  }

  addApis(apisArray) {
    Object.keys(apisArray).forEach((apiName) => {
      this[apiName] = apisArray[apiName].bind(this)();
    });
  }
}

module.exports.PDFfiller = new PDFfillerApi();
module.exports.PDFfillerConstructor = PDFfillerApi;
