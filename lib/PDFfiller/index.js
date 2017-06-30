const Api = require('../Api/').ApiRequests;
const constants = require('../constants/');

let INSTANCE; // discus about it

const privates = new WeakMap();

/**
 * The JavaScript API to PDFFiller services
 * @class PDFfillerApi
 */

class PDFfillerApi {
  /**
   * @constructor
   * @function
   * @param {object} [config]
   * @param {boolean} [config.autoTokenUpdate=true] set up auto update token using refresh_token
   */
  constructor(config) {
    config = config || {};
    INSTANCE = this;
    privates.set(this, {
      accessToken: null,
      api: new Api(),
      autoTokenUpdate: config.autoTokenUpdate || true
    });
  }

  /**
   * Get the client access token
   * @returns {string} access token string
   */
  getAccessToken() {
    return privates.get(this).accessToken || '';
  }

  /**
   * Set the client access token for requests
   * @param {string} accessToken token
   */
  setAccessToken(accessToken) {
    privates.set(this, {
      accessToken,
      api: privates.get(this).api,
      autoTokenUpdate: privates.get(this).autoTokenUpdate
    });
  }

  /**
   * Exchange the client access token
   * @param {object} credentials The authentication credentials for getting access token
   * @returns {Promise}
   */
  authorization(credentials) {
    return privates.get(this).api.makeRequest({
      endPoint: constants.AUTH_ENDPOINT,
      method: 'POST',
      data: credentials,
      isJSON: true
    })
      .then((data) => {
        if (typeof data.expires_in === 'number' && this.autoTokenUpdate) {
          this.autoUpdateToken(data);
        }
        this.setAccessToken(data.access_token);
        return data;
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   * function what be run if autoUpdateToken=true
   * @params {accessTokenData}
   */
  autoUpdateToken(accessTokenData) {
    setTimeout(() => {
      this.authorization({
        grant_type: 'refresh_token',
        client_id: accessTokenData.client_id,
        client_secret: accessTokenData.client_secret,
        refresh_token: accessTokenData.refresh_token,
      }).catch(err => console.error(err));
    }, (accessTokenData.expires_in - 600) * 1000);
  }

  /**
   * Returns a list of all applications.
   * @param {object} [searchParams] object with params for pagination application
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.name] order
   * @returns {Promise}
   */
  getApplications(searchParams) {
    return privates.get(this).api.makeRequest({
      endPoint: constants.APPLICATIONS_ENDPOINT,
      accessToken: this.getAccessToken(),
      qs: searchParams
    });
  }

  /**
   * Returns a list of all tokens.
   * @param {object} [searchParams] object with params for pagination application
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.name] order
   * @returns {Promise}
   */
  getTokens(searchParams) {
    return privates.get(this).api.makeRequest({
      endPoint: constants.TOKENS_ENDPOINT,
      accessToken: this.getAccessToken(),
      qs: searchParams
    });
  }

  /**
   * Returns user information.
   * @returns {Promise}
   */
  getUserInfo() {
    return privates.get(this).api.makeRequest({
      endPoint: constants.USERS_ENDPOINT,
      accessToken: this.getAccessToken()
    });
  }
}

const init = config => INSTANCE || new PDFfillerApi(config);

module.exports.init = init;
