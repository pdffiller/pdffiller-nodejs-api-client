<a name="CustomLogos"></a>

## CustomLogos
**Kind**: global class  

* [CustomLogos](#CustomLogos)
    * [new CustomLogos()](#new_CustomLogos_new)
    * [.all([searchParams], [callback])](#CustomLogos+all) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.get(customLogoId, [callback])](#CustomLogos+get) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.create(customLogo, [callback])](#CustomLogos+create) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.remove(customLogoId, [callback])](#CustomLogos+remove) ⇒ <code>Promise</code> \| <code>undefined</code>


* * *

<a name="new_CustomLogos_new"></a>

### new CustomLogos()
CustomLogos endpoint class


* * *

<a name="CustomLogos+all"></a>

### customLogos.all([searchParams], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns a list of all custom logos.

**Kind**: instance method of [<code>CustomLogos</code>](#CustomLogos)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | custom logos on 1 page |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order_by] | <code>string</code> | order by |
| [searchParams.order] | <code>string</code> | order |
| [callback] | <code>function</code> | callback function |


* * *

<a name="CustomLogos+get"></a>

### customLogos.get(customLogoId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns a custom logo by id.

**Kind**: instance method of [<code>CustomLogos</code>](#CustomLogos)  

| Param | Type | Description |
| --- | --- | --- |
| customLogoId | <code>number</code> | of custom logo |
| [callback] | <code>function</code> | callback function |


* * *

<a name="CustomLogos+create"></a>

### customLogos.create(customLogo, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create new custom logo with given data.

**Kind**: instance method of [<code>CustomLogos</code>](#CustomLogos)  
**Returns**: <code>Promise</code> \| <code>undefined</code> - with created custom logo information  

| Param | Type | Description |
| --- | --- | --- |
| customLogo | <code>string</code> \| <code>object</code> | PNG, JPG file. The input can be type of: file or url. |
| [callback] | <code>function</code> | callback function |


* * *

<a name="CustomLogos+remove"></a>

### customLogos.remove(customLogoId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
delete custom logo by id

**Kind**: instance method of [<code>CustomLogos</code>](#CustomLogos)  

| Param | Type | Description |
| --- | --- | --- |
| customLogoId | <code>number</code> | of custom logos |
| [callback] | <code>function</code> | callback function |


* * *

