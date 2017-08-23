<a name="Tokens"></a>

## Tokens
Tokens endpoint

**Kind**: global class  

* [Tokens](#Tokens)
    * [.all([searchParams], [callback])](#Tokens+all) ⇒ <code>Promise</code> \| <code>void</code>
    * [.get(tokenId, [callback])](#Tokens+get) ⇒ <code>Promise</code> \| <code>void</code>
    * [.create(tokenInfo, [callback])](#Tokens+create) ⇒ <code>Promise</code> \| <code>void</code>
    * [.update(tokenId, tokenInfo, [callback])](#Tokens+update) ⇒ <code>Promise</code> \| <code>void</code>
    * [.remove(tokenId, [callback])](#Tokens+remove) ⇒ <code>Promise</code> \| <code>void</code>


* * *

<a name="Tokens+all"></a>

### tokens.all([searchParams], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns a list of all tokens.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | Object with query string filters |
| [searchParams.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [searchParams.page] | <code>number</code> | Filter by page |
| [searchParams.order_by] | <code>string</code> | Filter for sort by selected field |
| [searchParams.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Tokens+get"></a>

### tokens.get(tokenId, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Information about a created token.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>number</code> | Id of token |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Tokens+create"></a>

### tokens.create(tokenInfo, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Creates a new token.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| tokenInfo | <code>object</code> | Information for creating new token |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Tokens+update"></a>

### tokens.update(tokenId, tokenInfo, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Updates a token.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>number</code> | Id of token |
| tokenInfo | <code>object</code> | Information for creating new token |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Tokens+remove"></a>

### tokens.remove(tokenId, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Deletes a token item.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>number</code> | Id of token |
| [callback] | <code>function</code> | callback function |


* * *

