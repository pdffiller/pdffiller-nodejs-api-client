const version = require('../../package.json').version;
const request = require('request-promise');
const constants = require('../constants/');

class ApiRequests {
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

  makeRequest(options) { // eslint-disable-line
    if (typeof options.accessToken !== 'undefined' && !options.accessToken) {
      console.error(constants.ACCESS_TOKEN_ERROR);
      return Promise.reject(new Error(constants.ACCESS_TOKEN_ERROR));
    }
    const requestConfig = makeRequestConfig(options); // eslint-disable-line
    return request(requestConfig);
  }
}

function makeRequestConfig(options) {
  const headers = makeHeaders(options); // eslint-disable-line
  const config = {
    url: `${constants.BASE_URL}${options.endPoint}`,
    headers,
    method: options.method || 'GET',
    json: options.isJSON || false,
    body: options.data || null,
    qs: options.qs || null
  };

  return config;
}

function makeHeaders(options) {
  const headers = {
    api_client: `node-js_ver-${version}`
  };

  if (options.accessToken) {
    headers.Authorization = `Bearer ${options.accessToken}`;
  }

  return headers;
}

module.exports = ApiRequests;
