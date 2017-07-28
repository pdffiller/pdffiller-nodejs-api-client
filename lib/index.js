const api = require('./api');
const Templates = require('./endpoints/templates');
const FillableForms = require('./endpoints/fillable-forms');
const SignatureRequests = require('./endpoints/signature-requests');
const Applications = require('./endpoints/applications');
const Callbacks = require('./endpoints/callbacks');
const CallbacksGlobal = require('./endpoints/callbacks-global');
const Tokens = require('./endpoints/tokens');
const Folders = require('./endpoints/folders');
const CustomLogos = require('./endpoints/custom-logos');
const User = require('./endpoints/users');

/**
 * The node.js client to PDFFiller api v2
 * @class PDFfillerApi
 */

class PDFfillerApi {
  /**
   * @constructor
   * @function
   */
  constructor() {
    this.authorization = api.authorization;
    this.getAccessToken = api.getAccessToken;
    this.setAccessToken = api.setAccessToken;

    this.templates = new Templates();
    this.fillableForms = new FillableForms();
    this.signatureRequests = new SignatureRequests();
    this.applications = new Applications();
    this.callbacks = new Callbacks();
    this.callbacksGlobal = new CallbacksGlobal();
    this.folders = new Folders();
    this.tokens = new Tokens();
    this.customLogos = new CustomLogos();
    this.user = new User();
  }
}

module.exports.PDFfiller = new PDFfillerApi();
