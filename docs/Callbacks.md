<a name="Callbacks"></a>

## Callbacks
Callbacks endpoint

**Kind**: global class  

* [Callbacks](#Callbacks)
    * [.all([search_params], [callback])](#Callbacks+all) ⇒ <code>Promise</code> \| <code>void</code>
    * [.get(callback_id, [callback])](#Callbacks+get) ⇒ <code>Promise</code> \| <code>void</code>
    * [.create(params, [callback])](#Callbacks+create) ⇒ <code>Promise</code> \| <code>void</code>
    * [.update(callback_id, params, [callback])](#Callbacks+update) ⇒ <code>Promise</code> \| <code>void</code>
    * [.remove(callback_id, [callback])](#Callbacks+remove) ⇒ <code>Promise</code> \| <code>void</code>


* * *

<a name="Callbacks+all"></a>

### callbacks.all([search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns a list of callback events.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order_by] | <code>string</code> | Filter for sort by selected field |
| [search_params.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Callbacks+get"></a>

### callbacks.get(callback_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns information about a specific callback by callback id.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| callback_id | <code>number</code> | Id of callback |
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

### callbacks.update(callback_id, params, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Updates a callback.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| callback_id | <code>number</code> | Id of callback |
| params | <code>object</code> | for creating callback |
| params.callback_url | <code>string</code> | Callback destination url |
| [params.event_id] | <code>string</code> | id ID of an event which triggers a callback. Supported event ids: fill_request.done, signature_request.done, constructor.done |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Callbacks+remove"></a>

### callbacks.remove(callback_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Delete a callback.

**Kind**: instance method of [<code>Callbacks</code>](#Callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| callback_id | <code>number</code> | Id of callback |
| [callback] | <code>function</code> | callback function |


* * *

