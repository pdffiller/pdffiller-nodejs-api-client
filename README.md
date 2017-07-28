# pdffiller-nodejs-api-client (api-v2)

[![Join the chat at https://gitter.im/pdffiller/pdffiller-php-api-client](https://badges.gitter.im/pdffiller/pdffiller-php-api-client.svg)](https://gitter.im/pdffiller/pdffiller-php-api-client?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[PDFfiller API](https://api.pdffiller.com)
You can sign up for the API [here](https://developers.pdffiller.com/#tab-features).
[API Docs](https://docs.pdffiller.com/).

## Requirements

* Node.js v4.8.4

## Installation

```
npm i git://github.com/pdffiller/pdffiller-nodejs-api-client.git --save
```

### Quick getting started steps
Require module and init one. You can require PDFfiller module as a singleton and use it in anywhere your app:

```
const PDFfiller = require('pdffiller-nodejs-api-client').PDFfiller;
```

## Authentication

Access tokens will automatically initialize when you’re successfully retrieved from the given user's credentials
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

Also you can set up token, for future request:

```
PDFfiller.setAccessToken('your_access_token');
```

and get current access token:

```
PDFfiller.getAccessToken();
```

## Application

Use a method to retrieve a list of all applications:
```
PDFfiller.applications.all()
  .then(applications => console.log(applications))
  .catch(err => console.error(err));
```

Use a method to retrieve an applications by id:
```
PDFfiller.applications.get(id)
  .then(application => console.log(application))
  .catch(err => console.error(err));
```

Use a method to create an application:
```
PDFfiller.applications.create({
  name: 'app name',
  description: 'app description',
  domain: 'http://domain.com'
})
  .then(application => console.log(application))
  .catch(err => console.error(err));
```

Use a method to update an application by id:
```
PDFfiller.applications.update(id, {
  name: 'app name',
  description: 'app description',
  domain: 'http://domain.com'
})
  .then(application => console.log(application))
  .catch(err => console.error(err));
```

Use a method to delete an application by id:
```
PDFfiller.applications.remove(id)
  .then(result => console.log(result))
  .catch(err => console.error(err));
```

Use a method to get application users:
```
PDFfiller.applications.users(id)
  .then(users => console.log(users))
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