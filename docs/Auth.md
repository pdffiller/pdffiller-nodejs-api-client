<a name="Auth"></a>

## Auth
**Kind**: global class  

* [Auth](#Auth)
    * [new Auth()](#new_Auth_new)
    * [.authorize(credentials, [autoUpdate], [callback])](#Auth+authorize) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.getAccessToken()](#Auth+getAccessToken) ⇒ <code>string</code>
    * [.setAccessToken(token)](#Auth+setAccessToken)


* * *

<a name="new_Auth_new"></a>

### new Auth()
Auth endpoint class


* * *

<a name="Auth+authorize"></a>

### auth.authorize(credentials, [autoUpdate], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Exchange the client access token

**Kind**: instance method of [<code>Auth</code>](#Auth)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | <code>object</code> | credentials for getting access token |
| [autoUpdate] | <code>boolean</code> | autoUpdate user token after one will expire |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Auth+getAccessToken"></a>

### auth.getAccessToken() ⇒ <code>string</code>
return a access token

**Kind**: instance method of [<code>Auth</code>](#Auth)  

* * *

<a name="Auth+setAccessToken"></a>

### auth.setAccessToken(token)
set access token

**Kind**: instance method of [<code>Auth</code>](#Auth)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | access token string |


* * *

