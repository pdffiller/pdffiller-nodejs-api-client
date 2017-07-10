const PDFfiller = require('./index.js').PDFfiller;
const config = require('./config.json');

PDFfiller.authorization({
  grant_type: config.grant_type,
  client_id: config.client_id,
  client_secret: config.client_secret,
  username: config.username,
  password: config.password
}).then(() => PDFfiller.user.get())
  .then(data => console.log(data))
  .catch(err => console.error(err));
