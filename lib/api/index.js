const version = require('../../package.json').version;
const request = require('request-promise');
const constants = require('../constants/');

let accessToken = null;

/**
 * get access token
 * @returns {string} access token string
 */
function getAccessToken() {
  return accessToken;
}

/**
 * set access token
 * @param {string} token token string
 */
function setAccessToken(token) {
  accessToken = token;
}

/**
 * make request depends on options object
 * @param {object} options request params
 * @param {string} options.endPoint request endpoint
 * @param {string} [options.method=GET] request method
 * @param {any} [options.data] data what will send by request
 * @param {object} [options.qs] request qs object
 * @returns {Promise}
 */
function makeRequest(options) {
  const requestConfig = makeRequestConfig(options); // eslint-disable-line
  return request(requestConfig);
}

/**
 * Exchange the client access token
 * @param {object} credentials credentials for getting access token
 * @param {boolean} [autoUpdate] autoUpdate user token after one will expire
 * @returns {Promise}
 */
function authorization(credentials, autoUpdate) {
  return makeRequest({
    endPoint: constants.AUTH_ENDPOINT,
    method: 'POST',
    data: credentials,
  }).then((data) => {
    if (typeof data.expires_in === 'number' && autoUpdate) {
      autoUpdateToken(data); // eslint-disable-line
    }
    setAccessToken(data.access_token);
    return data;
  })
    .catch((err) => {
      throw err;
    });
}
/**
 * set up a timer for auto update an access token
 * @param {object} accessTokenData access token data for refresh token flow
 */
function autoUpdateToken(accessTokenData) {
  setTimeout(() => {
    authorization({
      grant_type: 'refresh_token',
      client_id: accessTokenData.client_id,
      client_secret: accessTokenData.client_secret,
      refresh_token: accessTokenData.refresh_token,
    }).catch(err => console.error('auto update token fail', err));
  }, (accessTokenData.expires_in - 256) * 1000);
}

function makeRequestConfig(options) {
  const headers = makeHeaders(); // eslint-disable-line
  const url = makeUrl(options); // eslint-disable-line
  const isJson = options.hasOwnProperty('json') ? options.json : true; // eslint-disable-line
  const config = {
    url,
    headers,
    method: options.method || 'GET',
    json: isJson,
    qs: options.qs || null,
    encoding: null
  };

  if (options.data && !options.formData) {
    config.body = options.data;
  }

  if (options.data && options.formData) {
    config.formData = options.data;
  }

  return config;
}

function makeHeaders() {
  const headers = {
    'User-Agent': `pdffiller-node-js-client/ver-${version}`
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${getAccessToken()}`;
  }

  return headers;
}

function makeUrl(options) {
  let endPoint = options.endPoint;
  if (options.id) {
    Object.keys(options.id).forEach((key) => {
      endPoint = endPoint.replace(`{${key}}`, options.id[key]);
    });
  }
  let url = constants.BASE_URL + endPoint;

  if (options.hash) {
    url = `${url}/${options.hash}`;
  }

  return url;
}

module.exports = {
  makeRequest,
  authorization,
  getAccessToken,
  setAccessToken
};
