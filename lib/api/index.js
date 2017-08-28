'use strict';

const version = require('../../package.json').version;
const rp = require('request-promise');
const r = require('request');
const constants = require('../constants/');

/**
 * make request depends on options object
 * @param {object} options request params
 * @param {string} options.endPoint request endpoint
 * @param {string} [options.method=GET] request method
 * @param {any} [options.data] data what will send by request
 * @param {object} [options.qs] request qs object
 * @param {function} [callback] callback function
 * @returns {Promise}
 */
function makeRequest(options, callback) {
  const requestConfig = makeRequestConfig(options); // eslint-disable-line

  if (callback) {
    r(requestConfig, callback);
    return;
  }

  return rp(requestConfig); // eslint-disable-line
}

/**
 * create request config from given options
 * @param {object} options options for creating request config
 * @return {object} request config
 */
function makeRequestConfig(options) {
  const headers = makeHeaders(options); // eslint-disable-line
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

/**
 * make headers object
 * @return {object} headers object
 */
function makeHeaders(options) {
  const headers = {
    'User-Agent': `pdffiller-nodejs-client/ver-${version}`
  };

  if (options.access_token) {
    headers.Authorization = `Bearer ${options.access_token}`;
  }

  return headers;
}

/**
 * make request url
 * @return {string} url string
 */
function makeUrl(options) {
  let endPoint = options.endPoint;
  if (options.ids) {
    Object.keys(options.ids).forEach((key) => {
      endPoint = endPoint.replace(`{${key}}`, options.ids[key]);
    });
  }
  let url = constants.BASE_URL + endPoint;

  if (options.hash) {
    url = `${url}/${options.hash}`;
  }

  return url;
}

module.exports = {
  makeRequest
};
