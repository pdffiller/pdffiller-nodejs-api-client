<a name="Auth"></a>

## Auth
Auth endpoint

**Kind**: global class  

* [Auth](#Auth)
    * [.authorize(credentials, [autoUpdate], [callback])](#Auth+authorize) ⇒ <code>Promise</code>
    * [.getAccessToken()](#Auth+getAccessToken) ⇒ <code>string</code>
    * [.setAccessToken(token)](#Auth+setAccessToken)


* * *

<a name="Auth+authorize"></a>

### auth.authorize(credentials, [autoUpdate], [callback]) ⇒ <code>Promise</code>
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

