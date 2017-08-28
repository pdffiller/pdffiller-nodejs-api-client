<a name="CustomLogos"></a>

## CustomLogos
CustomLogos endpoint

**Kind**: global class  

* [CustomLogos](#CustomLogos)
    * [.all([search_params], [callback])](#CustomLogos+all) ⇒ <code>Promise</code> \| <code>void</code>
    * [.get(custom_logo_id, [callback])](#CustomLogos+get) ⇒ <code>Promise</code> \| <code>void</code>
    * [.create(custom_logo, [callback])](#CustomLogos+create) ⇒ <code>Promise</code> \| <code>void</code>
    * [.remove(custom_logo_id, [callback])](#CustomLogos+remove) ⇒ <code>Promise</code> \| <code>void</code>


* * *

<a name="CustomLogos+all"></a>

### customLogos.all([search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves a list of added user logos.

**Kind**: instance method of [<code>CustomLogos</code>](#CustomLogos)  

| Param | Type | Description |
| --- | --- | --- |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order_by] | <code>string</code> | Filter for sort by selected field |
| [search_params.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="CustomLogos+get"></a>

### customLogos.get(custom_logo_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves information about an added custom logo.

**Kind**: instance method of [<code>CustomLogos</code>](#CustomLogos)  

| Param | Type | Description |
| --- | --- | --- |
| custom_logo_id | <code>number</code> | Id of custom logo |
| [callback] | <code>function</code> | callback function |


* * *

<a name="CustomLogos+create"></a>

### customLogos.create(custom_logo, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Adds a new custom logo from a url or multipart.

**Kind**: instance method of [<code>CustomLogos</code>](#CustomLogos)  

| Param | Type | Description |
| --- | --- | --- |
| custom_logo | <code>string</code> \| <code>object</code> | PNG, JPG file. The input can be type of: file or url. |
| [callback] | <code>function</code> | callback function |


* * *

<a name="CustomLogos+remove"></a>

### customLogos.remove(custom_logo_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Deletes user custom logo item.

**Kind**: instance method of [<code>CustomLogos</code>](#CustomLogos)  

| Param | Type | Description |
| --- | --- | --- |
| custom_logo_id | <code>number</code> | Id of custom logos |
| [callback] | <code>function</code> | callback function |


* * *

