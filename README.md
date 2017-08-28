# pdffiller-nodejs-api-client (api-v2)

[PDFfiller API](https://api.pdffiller.com)
You can sign up for the API [here](https://developers.pdffiller.com/#tab-features).

[API Docs](https://docs.pdffiller.com/).

## Requirements

* Node.js v4

## Installation

``` sh
npm i git://github.com/pdffiller/pdffiller-nodejs-api-client.git --save
```

## Quick getting started steps

Require module and init one. You can require PDFfiller module as a singleton and use it in anywhere your app, or require constructor and create different instances:

```javascript
const PDFfiller = require('pdffiller-nodejs-api-client').PDFfiller;
const PDFFillerConstructor = require('pdffiller-nodejs-api-client').PDFFillerConstructor;
```

Or using ES6:
```javascript
import { PDFfiller, PDFFillerConstructor } from 'pdffiller-nodejs-api-client';
```


## Authentication

Access tokens will automatically initialize when you’re successfully retrieved from the given user's credentials.
The second parameter `autoUpdate` when you set up it as `true` token will automatically update when expire

```javascript
PDFfiller.auth.authorize({
    grant_type: 'password',
    client_id: 'your_client_id',
    client_secret: 'your_client_secret',
    username: 'username@mail.com',
    password: 'your_password'
}, true)
    .then(accessTokenData => console.log(accessTokenData))
    .catch(err => console.error(err));
```

When your authorization has been completed successfully you can use client for retrieving, creating, updating or deleting information from your profile.

Also you can set up token, for future request:

```javascript
PDFfiller.auth.setAccessToken('your_access_token');
```

and get current access token:

```javascript
PDFfiller.auth.getAccessToken();
```

## Usage

Use a method to retrieve a list of all applications:
```javascript
PDFfiller.applications.all()
  .then(applications => console.log(applications))
  .catch(err => console.error(err));
```

Use a method to retrieve an applications by id:
```javascript
PDFfiller.applications.get(id)
    .then(application => console.log(application))
    .catch(err => console.error(err));
```

Use a method to create an application:
```javascript
PDFfiller.applications.create({
    name: 'app name',
    description: 'app description',
    domain: 'http://domain.com'
})
    .then(application => console.log(application))
    .catch(err => console.error(err));
```

Use a method to update an application by id:
```javascript
PDFfiller.applications.update(id, {
    name: 'app name',
    description: 'app description',
    domain: 'http://domain.com'
})
    .then(application => console.log(application))
    .catch(err => console.error(err));
```

Use a method to delete an application by id:
```javascript
PDFfiller.applications.remove(id)
    .then(result => console.log(result))
    .catch(err => console.error(err));
```

Use a method to get application users:
```javascript
PDFfiller.applications.users(id)
    .then(users => console.log(users))
    .catch(err => console.error(err));
```

All examples with other endpoints are available in the [docs](https://github.com/pdffiller/pdffiller-nodejs-api-client/tree/master/docs) folder.

### Working with files
We send request using request-promise library, so to send a file you can just pass a file stream, for example:
 ```javascript
const fs = require('fs');  
  
PDFfiller.templates.create({
    file: fs.createReadStream('./file.pdf'),
    name: 'test_file_load.pdf'
})
    .then(createdTemplateInfo => console.log(createdTemplateInfo))
    .catch(err => console.error(err));
 ```
 
When you download files we will return Buffer object after you can save it as in example:
 ```javascript
const fs = require('fs');
  
PDFfiller.templates.download(1)
    .then(templateFileBuffer => {
        fs.writeFile('./your_file_name.pdf', templateFileBuffer, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('successfully saved');
        });
    })
    .catch(err => console.error(err));
 ```
 
### Callback support
Methods provide not only Promise api, you can use callbacks if you want. You can pass callback function to all methods as last argument, in this case methods dont return a Promise:
```javascript
const fs = require('fs');
  
PDFfiller.templates.create({
    file: fs.createReadStream('./file.pdf'),
    name: 'test_file_load.pdf'
}, (err, response, body) => {
    if (err) {
        console.log(err);
    }
    // YOUR CODE
    }
);
 ```
 
```javascript
PDFfiller.auth.authorize({
    grant_type: 'password',
    client_id: 'your_client_id',
    client_secret: 'your_client_secret',
    username: 'username@mail.com',
    password: 'your_password'
}, false, (err, body) => {
    if (err) {
        console.log(err);
    }
    // YOUR CODE
    }
);
 ```

## Support
If you have any problems feel free to contact us:
* On our issues page https://github.com/pdffiller/pdffiller-nodejs-api-client/issues
* Via chat or phone at our tech site http://developers.pdffiller.com

## License
This software is licensed under the following MIT [license](https://github.com/pdffiller/pdffiller-nodejs-api-client/blob/master/LICENSE)

## Contributing

See [CONTRIBUTING](https://github.com/pdffiller/pdffiller-nodejs-api-client/blob/master/CONTRIBUTING.md).

## Author
API Team (integrations@pdffiller.com)