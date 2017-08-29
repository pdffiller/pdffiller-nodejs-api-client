'use strict';

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

/**
 * The node.js client to PDFFiller api v2
 * @class PDFfillerApi
 */
class PDFfillerApi {
  constructor() {
    this.auth = new Auth();

    this.templates = new Templates(this.auth);
    this.fillableForms = new FillableForms(this.auth);
    this.signatureRequests = new SignatureRequests(this.auth);
    this.applications = new Applications(this.auth);
    this.callbacks = new Callbacks(this.auth);
    this.callbacksGlobal = new CallbacksGlobal(this.auth);
    this.folders = new Folders(this.auth);
    this.tokens = new Tokens(this.auth);
    this.customLogos = new CustomLogos(this.auth);
    this.users = new Users(this.auth);
    this.tools = new Tools(this.auth);
  }
}

module.exports.PDFfiller = new PDFfillerApi();
module.exports.PDFfillerConstructor = PDFfillerApi;
