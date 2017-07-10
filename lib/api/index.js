const version = require('../../package.json').version;
const request = require('request-promise');
const constants = require('../constants/');

let accessToken = null;

/**
 * make request depends on options object
 * @param {object} options request params
 * @param {string} options.endPoint request endpoint
 * @param {string} [options.method=GET] request method
 * @param {string} [options.accessToken] add header Authorization: Bearer {accessToken}
 * @param {any} [options.data] data what will send by request
 * @param {object} [options.qs] request qs object
 * @returns {Promise}
 */
function makeRequest(options) { // eslint-disable-line
  if (typeof options.accessToken !== 'undefined' && !options.accessToken) {
    console.error(constants.ACCESS_TOKEN_ERROR);
    return Promise.reject(new Error(constants.ACCESS_TOKEN_ERROR));
  }
  const requestConfig = makeRequestConfig(options); // eslint-disable-line
  return request(requestConfig);
}

function authorization(credentials, autoUpdate) {
  if (typeof credentials === 'string') {
    accessToken = credentials;
    return;
  }

  return makeRequest({
    endPoint: constants.AUTH_ENDPOINT,
    method: 'POST',
    data: credentials,
    isJSON: true
  }).then((data) => {
    if (typeof data.expires_in === 'number' && autoUpdate) {
      autoUpdateToken(data); // eslint-disable-line
    }
    accessToken = data.access_token;
    return data;
  })
    .catch((err) => {
      throw err;
    });
}

function autoUpdateToken(accessTokenData) {
  setTimeout(() => {
    this.authorization({
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
  const config = {
    url,
    headers,
    method: options.method || 'GET',
    json: options.isJSON || false,
    body: options.data || null,
    qs: options.qs || null
  };

  return config;
}

function makeHeaders() {
  const headers = {
    'User-Agent': `pdffiller-node-js-client/ver-${version}`
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return headers;
}

function makeUrl(options) {
  let endPoint = options.endPoint;
  if (options.id) {
    endPoint = endPoint.replace(/{id}/, options.id);
  }
  const url = constants.BASE_URL + endPoint;

  return url;
}

module.exports = {
  makeRequest,
  authorization
};
