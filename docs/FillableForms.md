<a name="FillableForms"></a>

## FillableForms
**Kind**: global class  

* [FillableForms](#FillableForms)
    * [new FillableForms()](#new_FillableForms_new)
    * [.all([searchParams], [callback])](#FillableForms+all) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.get(linkToFillId, [callback])](#FillableForms+get) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.create(fillableInfo, [callback])](#FillableForms+create) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.update(linkToFillId, fillableInfo, [callback])](#FillableForms+update) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.remove(linkToFillId, [callback])](#FillableForms+remove) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.download(linkToFillId, [callback])](#FillableForms+download) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.allFilled(linkToFillId, [searchParams], [callback])](#FillableForms+allFilled) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.getFilled(linkToFillId, filledFormId, [callback])](#FillableForms+getFilled) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.removeFilled(linkToFillId, filledFormId, [callback])](#FillableForms+removeFilled) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.exportFilled(linkToFillId, filledFormId, [callback])](#FillableForms+exportFilled) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.downloadFilled(linkToFillId, filledFormId, [callback])](#FillableForms+downloadFilled) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.getFilledAllAdditional(linkToFillId, filledFormId, [callback])](#FillableForms+getFilledAllAdditional) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.getFilledAdditional(linkToFillId, filledFormId, additionalDocumentId, [callback])](#FillableForms+getFilledAdditional) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.downloadFilledAdditional(linkToFillId, filledFormId, additionalDocumentId, [callback])](#FillableForms+downloadFilledAdditional) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.downloadFilledAllAdditional(linkToFillId, filledFormId, [callback])](#FillableForms+downloadFilledAllAdditional) ⇒ <code>Promise</code> \| <code>undefined</code>


* * *

<a name="new_FillableForms_new"></a>

### new FillableForms()
FillableForms endpoint class


* * *

<a name="FillableForms+all"></a>

### fillableForms.all([searchParams], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns a list of all document fill requests.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | items on 1 page |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order_by] | <code>string</code> | order by |
| [searchParams.order] | <code>string</code> | order |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+get"></a>

### fillableForms.get(linkToFillId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Information about a created fill request item.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | of fill request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+create"></a>

### fillableForms.create(fillableInfo, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Creates a new document and shares it via short url.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| fillableInfo | <code>object</code> | for creating fill request |
| [fillableInfo.access] | <code>string</code> | Access level for the fill request document |
| [fillableInfo.status] | <code>string</code> | Document access permission. |
| fillableInfo.email_required | <code>boolean</code> | Email required |
| fillableInfo.allow_downloads | <code>boolean</code> | Allow to download |
| fillableInfo.redirect_url | <code>string</code> | Redirect uri |
| [fillableInfo.name_required] | <code>boolean</code> | Name required |
| [fillableInfo.custom_message] | <code>string</code> | LinkToFill custom message |
| fillableInfo.notification_emails | <code>array</code> | LinkToFill notification emails |
| fillableInfo.notifications | <code>string</code> | The notifications mode |
| fillableInfo.enforce_required_fields | <code>boolean</code> | Prevent closing document before filling all fields |
| fillableInfo.custom_logo_id | <code>boolean</code> | Document custom logo id |
| [fillableInfo.welcome_screen] | <code>boolean</code> | Shows welcome agreement each time when user will open LinkToFill |
| fillableInfo.reusable | <code>boolean</code> | After filling the form it will be copied to the owner as the fillable form |
| fillableInfo.callback_url | <code>string</code> | Callback url |
| [fillableInfo.signature_stamp] | <code>string</code> | Signature stamp |
| fillableInfo.document_id | <code>number</code> | Id of the document template |
| fillableInfo.file | <code>string</code> | File to be uploaded |
| fillableInfo.fillable_fields | <code>object</code> | Id of the document template |
| fillableInfo.name | <code>string</code> | new document name |
| fillableInfo.folder_id | <code>number</code> | folder id |
| fillableInfo.additional_documents | <code>array</code> | Additional documents required after filling the document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+update"></a>

### fillableForms.update(linkToFillId, fillableInfo, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Updates a fill request item.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | of fill request |
| fillableInfo | <code>object</code> | for updating fill request |
| [fillableInfo.access] | <code>string</code> | Access level for the fill request document |
| [fillableInfo.status] | <code>string</code> | Document access permission. |
| fillableInfo.email_required | <code>boolean</code> | Email required |
| fillableInfo.allow_downloads | <code>boolean</code> | Allow to download |
| fillableInfo.redirect_url | <code>string</code> | Redirect uri |
| [fillableInfo.name_required] | <code>boolean</code> | Name required |
| [fillableInfo.custom_message] | <code>string</code> | LinkToFill custom message |
| fillableInfo.notification_emails | <code>array</code> | LinkToFill notification emails |
| fillableInfo.notifications | <code>string</code> | The notifications mode |
| fillableInfo.enforce_required_fields | <code>boolean</code> | Prevent closing document before filling all fields |
| fillableInfo.custom_logo_id | <code>boolean</code> | Document custom logo id |
| [fillableInfo.welcome_screen] | <code>boolean</code> | Shows welcome agreement each time when user will open LinkToFill |
| fillableInfo.reusable | <code>boolean</code> | After filling the form it will be copied to the owner as the fillable form |
| fillableInfo.callback_url | <code>string</code> | Callback url |
| [fillableInfo.signature_stamp] | <code>string</code> | Signature stamp |
| fillableInfo.fillable_fields | <code>object</code> | Id of the document template |
| fillableInfo.name | <code>string</code> | new document name |
| fillableInfo.folder_id | <code>number</code> | folder id |
| fillableInfo.additional_documents | <code>array</code> | Additional documents required after filling the document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+remove"></a>

### fillableForms.remove(linkToFillId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Deletes a fill request item.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | id of fill request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+download"></a>

### fillableForms.download(linkToFillId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
You can easily export all the completed documents created via LinkToFill as a zip file.
This method can give three statuses:
Creating a Job with Job ID, Waiting (if zip is still in progress) or Zip content (if files ready to export).

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  
**Returns**: <code>Promise</code> \| <code>undefined</code> - with buffer object or json object with created Job information  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | id of fill request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+allFilled"></a>

### fillableForms.allFilled(linkToFillId, [searchParams], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Lists all filled forms for the given fill request.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | id of fill request |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | filled forms on 1 page |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order] | <code>string</code> | order |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+getFilled"></a>

### fillableForms.getFilled(linkToFillId, filledFormId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Information about a specific filled form.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | Fill Request ID |
| filledFormId | <code>number</code> | Filled Form ID |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+removeFilled"></a>

### fillableForms.removeFilled(linkToFillId, filledFormId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Deletes a filled form.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | Fill Request ID |
| filledFormId | <code>number</code> | Filled Form ID |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+exportFilled"></a>

### fillableForms.exportFilled(linkToFillId, filledFormId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Exports filled form data in one of the available formats: json, xls, xlsx, csv, html.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | Fill Request ID |
| filledFormId | <code>number</code> | Filled Form ID |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+downloadFilled"></a>

### fillableForms.downloadFilled(linkToFillId, filledFormId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Downloads a filled PDF form.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | Fill Request ID |
| filledFormId | <code>number</code> | Filled Form ID |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+getFilledAllAdditional"></a>

### fillableForms.getFilledAllAdditional(linkToFillId, filledFormId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns a list of a LinkToFill recipient`s attached additional documents.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | Fill Request ID |
| filledFormId | <code>number</code> | Filled Form ID |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+getFilledAdditional"></a>

### fillableForms.getFilledAdditional(linkToFillId, filledFormId, additionalDocumentId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns information about one LinkToFill recipient`s attached additional document.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | Fill Request ID |
| filledFormId | <code>number</code> | Filled Form ID |
| additionalDocumentId | <code>number</code> | Attached additional document ID |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+downloadFilledAdditional"></a>

### fillableForms.downloadFilledAdditional(linkToFillId, filledFormId, additionalDocumentId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Downloads a file of a LinkToFill filled form`s additional document.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | Fill Request ID |
| filledFormId | <code>number</code> | Filled Form ID |
| additionalDocumentId | <code>number</code> | Attached additional document ID |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+downloadFilledAllAdditional"></a>

### fillableForms.downloadFilledAllAdditional(linkToFillId, filledFormId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Downloads a zip-file of all LinkToFill filled form`s additional documents.
This method can give three statuses:
Creating a Job with Job ID, Waiting (if zip is still in progress) or Zip content (if files ready to export).

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| linkToFillId | <code>number</code> | Fill Request ID |
| filledFormId | <code>number</code> | Filled Form ID |
| [callback] | <code>function</code> | callback function |


* * *

