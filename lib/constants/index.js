module.exports = {
  BASE_URL: 'https://api.pdffiller.com',
  APPLICATIONS_ENDPOINT: '/v2/applications',
  APPLICATIONS_BY_ID_ENDPOINT: '/v2/applications/{id}',
  APPLICATIONS_USER_BY_ID_ENDPOINT: '/v2/applications/{id}/users',
  AUTH_ENDPOINT: '/v2/oauth/token',
  TOKENS_ENDPOINT: '/v2/tokens',
  USERS_ENDPOINT: '/v2/users/me',
  ACCESS_TOKEN_ERROR: 'You don`t specify access token. You need authorize to get one, or set it using setAccessToken function.'
};

