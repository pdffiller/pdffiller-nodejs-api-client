const Auth = require('./endpoints/auth');
const Templates = require('./endpoints/templates');
const FillableForms = require('./endpoints/fillableForms');
const SignatureRequests = require('./endpoints/signatureRequests');
const Applications = require('./endpoints/applications');
const Callbacks = require('./endpoints/callbacks');
const CallbacksGlobal = require('./endpoints/callbacksGlobal');
const Tokens = require('./endpoints/tokens');
const Folders = require('./endpoints/folders');
const CustomLogos = require('./endpoints/customLogos');
const Users = require('./endpoints/users');
const Tools = require('./endpoints/tools');

const fs = require('fs');
const path = require('path');

const apis = [];

fs.readdirSync(path.join(__dirname, './endpoints')).forEach((file) => {
  const apiName = file.split('.')[0];
  if (apiName) {
    apis.push(apiName);
  }
});

/**
 * The node.js client to PDFFiller api v2
 * @class PDFfillerApi
 */
class PDFfillerApi {
  constructor() {
    this.auth = new Auth();

    this.templates = new Templates();
    this.fillableForms = new FillableForms();
    this.signatureRequests = new SignatureRequests();
    this.applications = new Applications();
    this.callbacks = new Callbacks();
    this.callbacksGlobal = new CallbacksGlobal();
    this.folders = new Folders();
    this.tokens = new Tokens();
    this.customLogos = new CustomLogos();
    this.users = new Users();
    this.tools = new Tools();

    this.addLinkToPDFFillerConstructor(apis);
  }

  /**
   * add links to PDFfillerApi constructor
   * @private
   * */
  addLinkToPDFFillerConstructor(apisArray) {
    apisArray.forEach((apiName) => {
      this[apiName].pdffiller = this;
    });
  }
}

module.exports.PDFfiller = new PDFfillerApi();
module.exports.PDFfillerConstructor = PDFfillerApi;
