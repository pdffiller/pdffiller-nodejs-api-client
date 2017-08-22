<a name="CallbacksGlobal"></a>

## CallbacksGlobal
**Kind**: global class  

* [CallbacksGlobal](#CallbacksGlobal)
    * [new CallbacksGlobal()](#new_CallbacksGlobal_new)
    * [.get([callback])](#CallbacksGlobal+get) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.update(params, [callback])](#CallbacksGlobal+update) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.remove([callback])](#CallbacksGlobal+remove) ⇒ <code>Promise</code> \| <code>undefined</code>


* * *

<a name="new_CallbacksGlobal_new"></a>

### new CallbacksGlobal()
CallbacksGlobal endpoint class


* * *

<a name="CallbacksGlobal+get"></a>

### callbacksGlobal.get([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns a information about callback event.

**Kind**: instance method of [<code>CallbacksGlobal</code>](#CallbacksGlobal)  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | callback function |


* * *

<a name="CallbacksGlobal+update"></a>

### callbacksGlobal.update(params, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update a callback.

**Kind**: instance method of [<code>CallbacksGlobal</code>](#CallbacksGlobal)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | for creating callback |
| params.callback_url | <code>string</code> | Callback destination url |
| [callback] | <code>function</code> | callback function |


* * *

<a name="CallbacksGlobal+remove"></a>

### callbacksGlobal.remove([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a callback.

**Kind**: instance method of [<code>CallbacksGlobal</code>](#CallbacksGlobal)  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | callback function |


* * *

