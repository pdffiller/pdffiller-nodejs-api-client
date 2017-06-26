const PDFfiller = require('./index.js');

const pdffillerInstance = new PDFfiller();
pdffillerInstance.authorization({
  grant_type: 'password',
  client_id: 'client_id',
  client_secret: 'client_secret',
  username: 'username@mail.com',
  password: 'user password'
}).then(() => {
  pdffillerInstance.getApplication().then(data => console.log(data), err => console.log(err));
}, err => console.log(err));
