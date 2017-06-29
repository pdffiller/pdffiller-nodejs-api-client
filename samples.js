const PDFfiller = require('./index.js')();
const config = require('./config.json');

PDFfiller.authorization({
  grant_type: config.grant_type,
  client_id: config.client_id,
  client_secret: config.client_secret,
  username: config.username,
  password: config.password
}).then(() => PDFfiller.getUserInfo())
  .then(data => console.log(data))
  .catch(err => console.log(err));
