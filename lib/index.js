let INSTANCE; // discus about it
// const version = require('../package.json').version;

// const baseUrl = 'https://api.pdffiller.com/v2';

class PDFfillerApi {
  constructor(config) {
    console.log(this, config);
    INSTANCE = this;
  }
}

/**
 * Create object instance
 * @param   {object} config
 * @returns {instance}
 */

function createApiClientInstance(config) {
  if (INSTANCE) return INSTANCE;
  return new PDFfillerApi(config);
}

module.exports = createApiClientInstance;

/** just good comment example
 * Exchange the client access token for one with lower scope
 * @param {string|string[]} scopes The scope(s) requested for the new token
 * @param {?string} resource The absolute URL of an API resource to scope the new token to
 * @param {Function} callback Called with the new token
 * @returns {void}
 */
