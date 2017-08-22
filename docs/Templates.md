<a name="Templates"></a>

## Templates
**Kind**: global class  

* [Templates](#Templates)
    * [new Templates()](#new_Templates_new)
    * [.all([searchParams], [callback])](#Templates+all) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.get(templateId, [callback])](#Templates+get) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.create(templateInfo, [callback])](#Templates+create) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.update(templateId, templateInfo, [callback])](#Templates+update) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.download(templateId, [callback])](#Templates+download) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.roles(templateId, [callback])](#Templates+roles) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.downloadOriginal(templateId, [callback])](#Templates+downloadOriginal) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.remove(templateId, [callback])](#Templates+remove) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.fields(templateId, [callback])](#Templates+fields) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.childs(templateId, [searchParams], [callback])](#Templates+childs) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.downloadSignatures(templateId, [callback])](#Templates+downloadSignatures) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.fill(templateId, fillableInfo, [callback])](#Templates+fill) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.createShareLink(templateId, [constructorInfo], [callback])](#Templates+createShareLink) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.getShareLink(templateId, [callback])](#Templates+getShareLink) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.removeShareLinkByHash(templateId, hash, [callback])](#Templates+removeShareLinkByHash) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.removeAllShareLink(templateId, [callback])](#Templates+removeAllShareLink) ⇒ <code>Promise</code> \| <code>undefined</code>


* * *

<a name="new_Templates_new"></a>

### new Templates()
Templates endpoint class


* * *

<a name="Templates+all"></a>

### templates.all([searchParams], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Retrieves a list of uploaded documents.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.folder_id] | <code>number</code> | folder id |
| [searchParams.date_from] | <code>number</code> | Filter by date from. Example: 2016-12-31. |
| [searchParams.date_to] | <code>number</code> | Filter by date to. Example: 2017-12-31. |
| [searchParams.per_page] | <code>number</code> | items on 1 page |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order_by] | <code>string</code> | order by |
| [searchParams.order] | <code>string</code> | order |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+get"></a>

### templates.get(templateId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns a template by id.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+create"></a>

### templates.create(templateInfo, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create new template with given data.

**Kind**: instance method of [<code>Templates</code>](#Templates)  
**Returns**: <code>Promise</code> \| <code>undefined</code> - with created template information  

| Param | Type | Description |
| --- | --- | --- |
| templateInfo | <code>object</code> | for creating new template |
| templateInfo.file | <code>string</code> \| <code>object</code> | url to file, or file |
| templateInfo.name | <code>string</code> | some_name_for_new_template |
| templateInfo.folder_id | <code>number</code> | folder id |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+update"></a>

### templates.update(templateId, templateInfo, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update template with given data.

**Kind**: instance method of [<code>Templates</code>](#Templates)  
**Returns**: <code>Promise</code> \| <code>undefined</code> - with created template information  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| templateInfo | <code>object</code> | for creating new template |
| templateInfo.name | <code>string</code> | some_name_for_new_template |
| templateInfo.folder_id | <code>number</code> | folder id |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+download"></a>

### templates.download(templateId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Download template by id.

**Kind**: instance method of [<code>Templates</code>](#Templates)  
**Returns**: <code>Promise</code> \| <code>undefined</code> - with buffer  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+roles"></a>

### templates.roles(templateId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Retrieves a list of roles for a document template.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+downloadOriginal"></a>

### templates.downloadOriginal(templateId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Download original template by id.

**Kind**: instance method of [<code>Templates</code>](#Templates)  
**Returns**: <code>Promise</code> \| <code>undefined</code> - with buffer  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+remove"></a>

### templates.remove(templateId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Deletes a document template item.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+fields"></a>

### templates.fields(templateId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get values for a fillable form.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+childs"></a>

### templates.childs(templateId, [searchParams], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Retrieves child documents for a selected document template.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | templates on 1 page |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order] | <code>string</code> | order |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+downloadSignatures"></a>

### templates.downloadSignatures(templateId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Downloads a zip archive of document signatures.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+fill"></a>

### templates.fill(templateId, fillableInfo, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Populates a fillable form template which was created with the PDFfiller editor.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| fillableInfo | <code>object</code> | object with fillable params |
| fillableInfo.fillable_fields | <code>object</code> | fields data what will be filled to template |
| fillableInfo.folder_id | <code>number</code> | folder id |
| fillableInfo.name | <code>string</code> | Name created for a newly filled document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+createShareLink"></a>

### templates.createShareLink(templateId, [constructorInfo], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Creates a new share link to a document.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| [constructorInfo] | <code>object</code> | object with fillable params |
| constructorInfo.expire | <code>number</code> | Number of days left until link expires. Max value - 1000 |
| constructorInfo.callback_url | <code>string</code> | Callback destination url |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+getShareLink"></a>

### templates.getShareLink(templateId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Retrieves a list of hash.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+removeShareLinkByHash"></a>

### templates.removeShareLinkByHash(templateId, hash, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Retrieves a list of hash.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| hash | <code>string</code> | Hash for shared link |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+removeAllShareLink"></a>

### templates.removeAllShareLink(templateId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Deletes all share links to a document by id.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | id of template |
| [callback] | <code>function</code> | callback function |


* * *

