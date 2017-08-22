<a name="Callbacks"></a>

## Callbacks
**Kind**: global class  

* [Callbacks](#Callbacks)
    * [new Callbacks()](#new_Callbacks_new)
    * [.all([searchParams], [callback])](#Callbacks+all) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.get(callbackId, [callback])](#Callbacks+get) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.create(params, [callback])](#Callbacks+create) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.update(callbackId, params, [callback])](#Callbacks+update) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.remove(callbackId, [callback])](#Callbacks+remove) ⇒ <code>Promise</code> \| <code>undefined</code>


* * *

<a name="new_Callbacks_new"></a>

### new Callbacks()
Callbacks endpoint class


* * *

<a name="Callbacks+all"></a>

### callbacks.all([searchParams], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns a list of all callbacks.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | callbacks on 1 page |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order_by] | <code>string</code> | order by |
| [searchParams.order] | <code>string</code> | order |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Callbacks+get"></a>

### callbacks.get(callbackId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns a callback by id.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| callbackId | <code>number</code> | of callback |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Callbacks+create"></a>

### callbacks.create(params, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a new callback with given data.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | for creating callback |
| params.callback_url | <code>string</code> | Callback destination url |
| params.document_id | <code>number</code> | Document id to associate callback information with |
| [params.event_id] | <code>string</code> | id ID of an event which triggers a callback Supported event ids: fill_request.done | signature_request.done | constructor.done |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Callbacks+update"></a>

### callbacks.update(callbackId, params, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update a new callback with given data.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| callbackId | <code>number</code> | of callback |
| params | <code>object</code> | for creating callback |
| params.callback_url | <code>string</code> | Callback destination url |
| [params.event_id] | <code>string</code> | id ID of an event which triggers a callback Supported event ids: fill_request.done | signature_request.done | constructor.done |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Callbacks+remove"></a>

### callbacks.remove(callbackId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a callback by id.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| callbackId | <code>number</code> | of callback |
| [callback] | <code>function</code> | callback function |


* * *
