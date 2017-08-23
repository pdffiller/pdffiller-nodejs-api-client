<a name="Callbacks"></a>

## Callbacks
Callbacks endpoint

**Kind**: global class  

* [Callbacks](#Callbacks)
    * [.all([searchParams], [callback])](#Callbacks+all) ⇒ <code>Promise</code> \| <code>void</code>
    * [.get(callbackId, [callback])](#Callbacks+get) ⇒ <code>Promise</code> \| <code>void</code>
    * [.create(params, [callback])](#Callbacks+create) ⇒ <code>Promise</code> \| <code>void</code>
    * [.update(callbackId, params, [callback])](#Callbacks+update) ⇒ <code>Promise</code> \| <code>void</code>
    * [.remove(callbackId, [callback])](#Callbacks+remove) ⇒ <code>Promise</code> \| <code>void</code>


* * *

<a name="Callbacks+all"></a>

### callbacks.all([searchParams], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns a list of callback events.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | Object with query string filters |
| [searchParams.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [searchParams.page] | <code>number</code> | Filter by page |
| [searchParams.order_by] | <code>string</code> | Filter for sort by selected field |
| [searchParams.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Callbacks+get"></a>

### callbacks.get(callbackId, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns information about a specific callback by callback id.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| callbackId | <code>number</code> | Id of callback |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Callbacks+create"></a>

### callbacks.create(params, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Creates a new callback associated with a specific document event.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Params for creating callback |
| params.callback_url | <code>string</code> | Callback destination url |
| params.document_id | <code>number</code> | Document id to associate callback information with |
| params.event_id | <code>string</code> | ID of an event which triggers a callback. Supported event ids: fill_request.done, signature_request.done, constructor.done |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Callbacks+update"></a>

### callbacks.update(callbackId, params, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Updates a callback.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| callbackId | <code>number</code> | Id of callback |
| params | <code>object</code> | for creating callback |
| params.callback_url | <code>string</code> | Callback destination url |
| [params.event_id] | <code>string</code> | id ID of an event which triggers a callback. Supported event ids: fill_request.done, signature_request.done, constructor.done |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Callbacks+remove"></a>

### callbacks.remove(callbackId, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Delete a callback.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| callbackId | <code>number</code> | Id of callback |
| [callback] | <code>function</code> | callback function |


* * *

