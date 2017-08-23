<a name="Templates"></a>

## Templates
Templates endpoint

**Kind**: global class  

* [Templates](#Templates)
    * [.all([searchParams], [callback])](#Templates+all) ⇒ <code>Promise</code>
    * [.get(templateId, [callback])](#Templates+get) ⇒ <code>Promise</code>
    * [.create(templateInfo, [callback])](#Templates+create) ⇒ <code>Promise</code>
    * [.update(templateId, templateInfo, [callback])](#Templates+update) ⇒ <code>Promise</code>
    * [.download(templateId, [callback])](#Templates+download) ⇒ <code>Promise</code>
    * [.getRoles(templateId, [callback])](#Templates+getRoles) ⇒ <code>Promise</code>
    * [.downloadOriginal(templateId, [callback])](#Templates+downloadOriginal) ⇒ <code>Promise</code>
    * [.remove(templateId, [callback])](#Templates+remove) ⇒ <code>Promise</code>
    * [.getFields(templateId, [callback])](#Templates+getFields) ⇒ <code>Promise</code>
    * [.getChilds(templateId, [searchParams], [callback])](#Templates+getChilds) ⇒ <code>Promise</code>
    * [.downloadSignatures(templateId, [callback])](#Templates+downloadSignatures) ⇒ <code>Promise</code>
    * [.fillTemplate(templateId, fillableInfo, [callback])](#Templates+fillTemplate) ⇒ <code>Promise</code>
    * [.createShareLink(templateId, shareLinkInfo, [callback])](#Templates+createShareLink) ⇒ <code>Promise</code>
    * [.getShareLink(templateId, [callback])](#Templates+getShareLink) ⇒ <code>Promise</code>
    * [.removeShareLinkByHash(templateId, hash, [callback])](#Templates+removeShareLinkByHash) ⇒ <code>Promise</code>
    * [.removeAllShareLink(templateId, [callback])](#Templates+removeAllShareLink) ⇒ <code>Promise</code>


* * *

<a name="Templates+all"></a>

### templates.all([searchParams], [callback]) ⇒ <code>Promise</code>
Retrieves a list of uploaded documents.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | Object with query string filters |
| [searchParams.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [searchParams.page] | <code>number</code> | Filter by page |
| [searchParams.order_by] | <code>string</code> | Filter for sort by selected field |
| [searchParams.order] | <code>string</code> | Sort Method |
| [searchParams.date_from] | <code>number</code> | Filter by date from. Example: 2016-12-31. |
| [searchParams.date_to] | <code>number</code> | Filter by date to. Example: 2017-12-31. |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+get"></a>

### templates.get(templateId, [callback]) ⇒ <code>Promise</code>
Retrieves information about a created document template.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+create"></a>

### templates.create(templateInfo, [callback]) ⇒ <code>Promise</code>
Creates a new document template. The filename must contain numbers, English letters or special characters: ( ) _ . Also, the filename extension should be .ppt; .pptx; .doc; .docx; or .pdf. You can download document from multipart

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateInfo | <code>object</code> | Information for creating new template |
| templateInfo.file | <code>string</code> \| <code>object</code> | url to file, or file |
| templateInfo.name | <code>string</code> | some_name_for_new_template |
| templateInfo.folder_id | <code>number</code> | folder id |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+update"></a>

### templates.update(templateId, templateInfo, [callback]) ⇒ <code>Promise</code>
Updates the information for a document template.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| templateInfo | <code>object</code> | Information for updating template |
| templateInfo.name | <code>string</code> | some_name_for_new_template |
| templateInfo.folder_id | <code>number</code> | folder id |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+download"></a>

### templates.download(templateId, [callback]) ⇒ <code>Promise</code>
Downloads a document template.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+getRoles"></a>

### templates.getRoles(templateId, [callback]) ⇒ <code>Promise</code>
Retrieves a list of roles for a document template.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+downloadOriginal"></a>

### templates.downloadOriginal(templateId, [callback]) ⇒ <code>Promise</code>
Download original template by id.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+remove"></a>

### templates.remove(templateId, [callback]) ⇒ <code>Promise</code>
Deletes a document template item.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+getFields"></a>

### templates.getFields(templateId, [callback]) ⇒ <code>Promise</code>
Get values for a fillable form.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+getChilds"></a>

### templates.getChilds(templateId, [searchParams], [callback]) ⇒ <code>Promise</code>
Retrieves child documents for a selected document template.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| [searchParams] | <code>object</code> | Object with query string filters |
| [searchParams.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [searchParams.page] | <code>number</code> | Filter by page |
| [searchParams.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+downloadSignatures"></a>

### templates.downloadSignatures(templateId, [callback]) ⇒ <code>Promise</code>
Downloads a zip archive of document signatures.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+fillTemplate"></a>

### templates.fillTemplate(templateId, fillableInfo, [callback]) ⇒ <code>Promise</code>
Populates a fillable form template which was created with the PDFfiller editor.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| fillableInfo | <code>object</code> | object with fillable params |
| fillableInfo.fillable_fields | <code>object</code> | fields data what will be filled to template |
| fillableInfo.folder_id | <code>number</code> | folder id |
| fillableInfo.name | <code>string</code> | Name created for a newly filled document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+createShareLink"></a>

### templates.createShareLink(templateId, shareLinkInfo, [callback]) ⇒ <code>Promise</code>
Creates a new share link to a document.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| shareLinkInfo | <code>object</code> | Share link params |
| shareLinkInfo.expire | <code>number</code> | Number of days left until link expires. Max value - 1000 |
| shareLinkInfo.callback_url | <code>string</code> | Callback destination url |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+getShareLink"></a>

### templates.getShareLink(templateId, [callback]) ⇒ <code>Promise</code>
Retrieves a list of hash.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+removeShareLinkByHash"></a>

### templates.removeShareLinkByHash(templateId, hash, [callback]) ⇒ <code>Promise</code>
Deletes one share link to a document by hash.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| hash | <code>string</code> | Hash for shared link |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Templates+removeAllShareLink"></a>

### templates.removeAllShareLink(templateId, [callback]) ⇒ <code>Promise</code>
Deletes all share links to a document by id.

**Kind**: instance method of [<code>Templates</code>](#Templates)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>number</code> | Id of template |
| [callback] | <code>function</code> | callback function |


* * *

