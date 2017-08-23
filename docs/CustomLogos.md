<a name="CustomLogos"></a>

## CustomLogos
CustomLogos endpoint

**Kind**: global class  

* [CustomLogos](#CustomLogos)
    * [.all([searchParams], [callback])](#CustomLogos+all) ⇒ <code>Promise</code> \| <code>void</code>
    * [.get(customLogoId, [callback])](#CustomLogos+get) ⇒ <code>Promise</code> \| <code>void</code>
    * [.create(customLogo, [callback])](#CustomLogos+create) ⇒ <code>Promise</code> \| <code>void</code>
    * [.remove(customLogoId, [callback])](#CustomLogos+remove) ⇒ <code>Promise</code> \| <code>void</code>


* * *

<a name="CustomLogos+all"></a>

### customLogos.all([searchParams], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves a list of added user logos.

**Kind**: instance method of [<code>CustomLogos</code>](#CustomLogos)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | Object with query string filters |
| [searchParams.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [searchParams.page] | <code>number</code> | Filter by page |
| [searchParams.order_by] | <code>string</code> | Filter for sort by selected field |
| [searchParams.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="CustomLogos+get"></a>

### customLogos.get(customLogoId, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves information about an added custom logo.

**Kind**: instance method of [<code>CustomLogos</code>](#CustomLogos)  

| Param | Type | Description |
| --- | --- | --- |
| customLogoId | <code>number</code> | Id of custom logo |
| [callback] | <code>function</code> | callback function |


* * *

<a name="CustomLogos+create"></a>

### customLogos.create(customLogo, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Adds a new custom logo from a url or multipart.

**Kind**: instance method of [<code>CustomLogos</code>](#CustomLogos)  

| Param | Type | Description |
| --- | --- | --- |
| customLogo | <code>string</code> \| <code>object</code> | PNG, JPG file. The input can be type of: file or url. |
| [callback] | <code>function</code> | callback function |


* * *

<a name="CustomLogos+remove"></a>

### customLogos.remove(customLogoId, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Deletes user custom logo item.

**Kind**: instance method of [<code>CustomLogos</code>](#CustomLogos)  

| Param | Type | Description |
| --- | --- | --- |
| customLogoId | <code>number</code> | Id of custom logos |
| [callback] | <code>function</code> | callback function |


* * *

