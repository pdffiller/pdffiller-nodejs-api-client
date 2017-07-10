# pdffiller-nodejs-api-client

[![Join the chat at https://gitter.im/pdffiller/pdffiller-php-api-client](https://badges.gitter.im/pdffiller/pdffiller-php-api-client.svg)](https://gitter.im/pdffiller/pdffiller-php-api-client?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[PDFfiller API](https://api.pdffiller.com)
You can sign up for the API [here](https://developers.pdffiller.com/#tab-pricing)

## Requirements

* Node.js v4.8.3

## Installation

```
npm i git://github.com/pdffiller/pdffiller-nodejs-api-client.git --save
```

### Quick getting started steps
Require module and init one. Currently PDFfiller module is a singleton.

```
const PDFfiller = require('pdffiller-nodejs-api-client');
```
## Authentication
You can set up token, for future request:

```
PDFfiller.authorization('your_access_token');
```

Or access tokens will automatically initialize when you’re successfully retrieved from the given user's credentials
The second parameter `autoUpdate` when you set up it as `true` we will auto update your token when it expire

```
PDFfiller.authorization({
  grant_type: 'password',
  client_id: 'your_client_id',
  client_secret: 'your_client_secret',
  username: 'username@mail.com',
  password: 'your_password'
}, true).then(accessTokenData => console.log(accessTokenData))
  .catch(err => console.error(err));
```

When your authorization has been completed successfully you can use client for retrieving, creating, updating or deleting information from your profile.

## Application

Use a method to retrieve a list of all applications:
```
PDFfiller.applications.get()
  .then(applications => console.log(applications))
  .catch(err => console.error(err));
```

## Tokens
Use a method to retrieve a list of all tokens:
```
PDFfiller.tokens.get()
  .then(tokens => console.log(tokens))
  .catch(err => console.error(err));
```

## User information
Use a method to retrieve a information about user:
```
PDFfiller.user.get()
  .then(userInfo => console.log(userInfo))
  .catch(err => console.error(err));
```

## Support
If you have any problems feel free to contact us:
* On our issues page https://github.com/pdffiller/pdffiller-php-api-client/issues
* Via chat or phone at our tech site http://developers.pdffiller.com
* Join our Gitter chat room for technical advice https://gitter.im/pdffiller/pdffiller-php-api-client

## License
This software is licensed under the following MIT [license](https://github.com/pdffiller/pdffiller-nodejs-api-client/blob/master/README.md)

## Author
API Team (integrations@pdffiller.com)