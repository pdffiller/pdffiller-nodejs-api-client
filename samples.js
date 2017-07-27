const PDFfiller = require('./index.js').PDFfiller;
const config = require('./config.json');

PDFfiller.authorization({
  grant_type: config.grant_type,
  client_id: config.client_id,
  client_secret: config.client_secret,
  username: config.username,
  password: config.password
}).then(() => PDFfiller.templates.get('125148171'))
  .then(data => console.log(data))
  .catch(data => console.log(data));
