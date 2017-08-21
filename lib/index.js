const Auth = require('./endpoints/auth');
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
const Tools = require('./endpoints/tools');

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
    this.user = new User();
    this.tools = new Tools();
  }
}

module.exports.PDFfiller = new PDFfillerApi();
module.exports.PDFfillerConstructor = PDFfillerApi;
