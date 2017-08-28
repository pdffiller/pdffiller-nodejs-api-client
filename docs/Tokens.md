<a name="Tokens"></a>

## Tokens
Tokens endpoint

**Kind**: global class  

* [Tokens](#Tokens)
    * [.all([search_params], [callback])](#Tokens+all) ⇒ <code>Promise</code> \| <code>void</code>
    * [.get(token_id, [callback])](#Tokens+get) ⇒ <code>Promise</code> \| <code>void</code>
    * [.create(token_info, [callback])](#Tokens+create) ⇒ <code>Promise</code> \| <code>void</code>
    * [.update(token_id, token_info, [callback])](#Tokens+update) ⇒ <code>Promise</code> \| <code>void</code>
    * [.remove(token_id, [callback])](#Tokens+remove) ⇒ <code>Promise</code> \| <code>void</code>


* * *

<a name="Tokens+all"></a>

### tokens.all([search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns a list of all tokens.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order_by] | <code>string</code> | Filter for sort by selected field |
| [search_params.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Tokens+get"></a>

### tokens.get(token_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Information about a created token.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| token_id | <code>number</code> | Id of token |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Tokens+create"></a>

### tokens.create(token_info, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Creates a new token.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| token_info | <code>object</code> | Information for creating new token |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Tokens+update"></a>

### tokens.update(token_id, token_info, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Updates a token.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| token_id | <code>number</code> | Id of token |
| token_info | <code>object</code> | Information for creating new token |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Tokens+remove"></a>

### tokens.remove(token_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Deletes a token item.

**Kind**: instance method of [<code>Tokens</code>](#Tokens)  

| Param | Type | Description |
| --- | --- | --- |
| token_id | <code>number</code> | Id of token |
| [callback] | <code>function</code> | callback function |


* * *

