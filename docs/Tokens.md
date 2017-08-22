<a name="Tokens"></a>

## Tokens
**Kind**: global class  

* [Tokens](#Tokens)
    * [new Tokens()](#new_Tokens_new)
    * [.all([searchParams], [callback])](#Tokens+all) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.get(tokenId, [callback])](#Tokens+get) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.create(data, [callback])](#Tokens+create) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.update(id, data, [callback])](#Tokens+update) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.remove(tokenId, [callback])](#Tokens+remove) ⇒ <code>Promise</code> \| <code>undefined</code>


* * *

<a name="new_Tokens_new"></a>

### new Tokens()
Tokens endpoint class


* * *

<a name="Tokens+all"></a>

### tokens.all([searchParams], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns a list of all tokens.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | tokens on 1 page |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order_by] | <code>string</code> | order by |
| [searchParams.order] | <code>string</code> | order |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Tokens+get"></a>

### tokens.get(tokenId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns a token by id.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>number</code> | of token |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Tokens+create"></a>

### tokens.create(data, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create new token with given data.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  
**Returns**: <code>Promise</code> \| <code>undefined</code> - with created token information  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | will be added to a token |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Tokens+update"></a>

### tokens.update(id, data, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update token by id with given data.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  
**Returns**: <code>Promise</code> \| <code>undefined</code> - with updated token information  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | of token |
| data | <code>object</code> | for creating new token |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Tokens+remove"></a>

### tokens.remove(tokenId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
delete token by id

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>number</code> | id of token |
| [callback] | <code>function</code> | callback function |


* * *

