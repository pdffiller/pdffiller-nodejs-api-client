<a name="Templates"></a>

## Templates
Templates endpoint

**Kind**: global class  

* [Templates](#Templates)
    * [.all([search_params], [callback])](#Templates+all) ⇒ <code>Promise</code> \| <code>void</code>
    * [.get(template_id, [callback])](#Templates+get) ⇒ <code>Promise</code> \| <code>void</code>
    * [.create(template_info, [callback])](#Templates+create) ⇒ <code>Promise</code> \| <code>void</code>
    * [.update(template_id, template_info, [callback])](#Templates+update) ⇒ <code>Promise</code> \| <code>void</code>
    * [.download(template_id, [callback])](#Templates+download) ⇒ <code>Promise</code> \| <code>void</code>
    * [.getRoles(template_id, [callback])](#Templates+getRoles) ⇒ <code>Promise</code> \| <code>void</code>
    * [.downloadOriginal(template_id, [callback])](#Templates+downloadOriginal) ⇒ <code>Promise</code> \| <code>void</code>
    * [.remove(template_id, [callback])](#Templates+remove) ⇒ <code>Promise</code> \| <code>void</code>
    * [.getFields(template_id, [callback])](#Templates+getFields) ⇒ <code>Promise</code> \| <code>void</code>
    * [.getChilds(template_id, [search_params], [callback])](#Templates+getChilds) ⇒ <code>Promise</code> \| <code>void</code>
    * [.downloadSignatures(template_id, [callback])](#Templates+downloadSignatures) ⇒ <code>Promise</code> \| <code>void</code>
    * [.fillTemplate(template_id, fillable_info, [callback])](#Templates+fillTemplate) ⇒ <code>Promise</code> \| <code>void</code>
    * [.createShareLink(template_id, share_link_info, [callback])](#Templates+createShareLink) ⇒ <code>Promise</code> \| <code>void</code>
    * [.getShareLink(template_id, [callback])](#Templates+getShareLink) ⇒ <code>Promise</code> \| <code>void</code>
    * [.removeShareLinkByHash(template_id, hash, [callback])](#Templates+removeShareLinkByHash) ⇒ <code>Promise</code> \| <code>void</code>
    * [.removeAllShareLink(template_id, [callback])](#Templates+removeAllShareLink) ⇒ <code>Promise</code> \| <code>void</code>


* * *

<a name="Templates+all"></a>

### templates.all([search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves a list of uploaded documents.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order_by] | <code>string</code> | Filter for sort by selected field |
| [search_params.order] | <code>string</code> | Sort Method |
| [search_params.date_from] | <code>number</code> | Filter by date from. Example: 2016-12-31. |
| [search_params.date_to] | <code>number</code> | Filter by date to. Example: 2017-12-31. |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+get"></a>

### templates.get(template_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves information about a created document template.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+create"></a>

### templates.create(template_info, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Creates a new document template. The filename must contain numbers, English letters or special characters: ( ) _ . Also, the filename extension should be .ppt; .pptx; .doc; .docx; or .pdf. You can download document from multipart

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_info | <code>object</code> | Information for creating new template |
| template_info.file | <code>string</code> \| <code>object</code> | url to file, or file |
| template_info.name | <code>string</code> | Template name |
| template_info.folder_id | <code>number</code> | folder id |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+update"></a>

### templates.update(template_id, template_info, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Updates the information for a document template.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| template_info | <code>object</code> | Information for updating template |
| template_info.name | <code>string</code> | Template name |
| template_info.folder_id | <code>number</code> | folder id |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+download"></a>

### templates.download(template_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Downloads a document template.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+getRoles"></a>

### templates.getRoles(template_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves a list of roles for a document template.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+downloadOriginal"></a>

### templates.downloadOriginal(template_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Download original template by id.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+remove"></a>

### templates.remove(template_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Deletes a document template item.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+getFields"></a>

### templates.getFields(template_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Get values for a fillable form.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+getChilds"></a>

### templates.getChilds(template_id, [search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves child documents for a selected document template.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+downloadSignatures"></a>

### templates.downloadSignatures(template_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Downloads a zip archive of document signatures.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+fillTemplate"></a>

### templates.fillTemplate(template_id, fillable_info, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Populates a fillable form template which was created with the PDFfiller editor.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| fillable_info | <code>object</code> | object with fillable params |
| fillable_info.fillable_fields | <code>object</code> | fields data what will be filled to template |
| fillable_info.folder_id | <code>number</code> | folder id |
| fillable_info.name | <code>string</code> | Name created for a newly filled document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+createShareLink"></a>

### templates.createShareLink(template_id, share_link_info, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Creates a new share link to a document.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| share_link_info | <code>object</code> | Share link params |
| share_link_info.expire | <code>number</code> | Number of days left until link expires. Max value - 1000 |
| share_link_info.callback_url | <code>string</code> | Callback destination url |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+getShareLink"></a>

### templates.getShareLink(template_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves a list of hash.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+removeShareLinkByHash"></a>

### templates.removeShareLinkByHash(template_id, hash, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Deletes one share link to a document by hash.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| hash | <code>string</code> | Hash for shared link |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+removeAllShareLink"></a>

### templates.removeAllShareLink(template_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Deletes all share links to a document by id.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| template_id | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

