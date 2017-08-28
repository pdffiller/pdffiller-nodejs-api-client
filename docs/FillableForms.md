<a name="FillableForms"></a>

## FillableForms
FillableForms endpoint

**Kind**: global class  

* [FillableForms](#FillableForms)
    * [.all([search_params], [callback])](#FillableForms+all) ⇒ <code>Promise</code> \| <code>void</code>
    * [.get(link_to_fill_id, [callback])](#FillableForms+get) ⇒ <code>Promise</code> \| <code>void</code>
    * [.create(fillable_info, [callback])](#FillableForms+create) ⇒ <code>Promise</code> \| <code>void</code>
    * [.update(link_to_fill_id, fillable_info, [callback])](#FillableForms+update) ⇒ <code>Promise</code> \| <code>void</code>
    * [.remove(link_to_fill_id, [callback])](#FillableForms+remove) ⇒ <code>Promise</code> \| <code>void</code>
    * [.download(link_to_fill_id, [callback])](#FillableForms+download) ⇒ <code>Promise</code> \| <code>void</code>
    * [.allFilled(link_to_fill_id, [search_params], [callback])](#FillableForms+allFilled) ⇒ <code>Promise</code> \| <code>void</code>
    * [.getFilled(link_to_fill_id, filled_form_id, [callback])](#FillableForms+getFilled) ⇒ <code>Promise</code> \| <code>void</code>
    * [.removeFilled(link_to_fill_id, filled_form_id, [callback])](#FillableForms+removeFilled) ⇒ <code>Promise</code> \| <code>void</code>
    * [.exportFilled(link_to_fill_id, filled_form_id, [callback])](#FillableForms+exportFilled) ⇒ <code>Promise</code> \| <code>void</code>
    * [.downloadFilled(link_to_fill_id, filled_form_id, [callback])](#FillableForms+downloadFilled) ⇒ <code>Promise</code> \| <code>void</code>
    * [.getFilledAllAdditional(link_to_fill_id, filled_form_id, [callback])](#FillableForms+getFilledAllAdditional) ⇒ <code>Promise</code> \| <code>void</code>
    * [.getFilledAdditional(link_to_fill_id, filled_form_id, additional_document_id, [callback])](#FillableForms+getFilledAdditional) ⇒ <code>Promise</code> \| <code>void</code>
    * [.downloadFilledAdditional(link_to_fill_id, filled_form_id, additional_document_id, [callback])](#FillableForms+downloadFilledAdditional) ⇒ <code>Promise</code> \| <code>void</code>
    * [.downloadFilledAllAdditional(link_to_fill_id, filled_form_id, [callback])](#FillableForms+downloadFilledAllAdditional) ⇒ <code>Promise</code> \| <code>void</code>


* * *

<a name="FillableForms+all"></a>

### fillableForms.all([search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns a list of all document fill requests.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order_by] | <code>string</code> | Filter for sort by selected field |
| [search_params.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+get"></a>

### fillableForms.get(link_to_fill_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Information about a created fill request item.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+create"></a>

### fillableForms.create(fillable_info, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Creates a new document and shares it via short url.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| fillable_info | <code>object</code> | Information for creating fillable document |
| fillable_info.access | <code>string</code> | Access level for the fill request document |
| fillable_info.status | <code>string</code> | Document access permission. |
| fillable_info.email_required | <code>boolean</code> | Email required |
| fillable_info.allow_downloads | <code>boolean</code> | Allow to download |
| fillable_info.redirect_url | <code>string</code> | Redirect uri |
| fillable_info.name_required | <code>boolean</code> | Name required |
| fillable_info.custom_message | <code>string</code> | LinkToFill custom message |
| fillable_info.notification_emails | <code>array</code> | LinkToFill notification emails |
| fillable_info.notifications | <code>string</code> | The notifications mode |
| fillable_info.enforce_required_fields | <code>boolean</code> | Prevent closing document before filling all fields |
| fillable_info.custom_logo_id | <code>boolean</code> | Document custom logo id |
| fillable_info.welcome_screen | <code>boolean</code> | Shows welcome agreement each time when user will open LinkToFill |
| fillable_info.reusable | <code>boolean</code> | After filling the form it will be copied to the owner as the fillable form |
| fillable_info.callback_url | <code>string</code> | Callback url |
| fillable_info.signature_stamp | <code>string</code> | Signature stamp |
| fillable_info.document_id | <code>number</code> | Id of the document template |
| fillable_info.file | <code>string</code> | File to be uploaded |
| fillable_info.fillable_fields | <code>object</code> | Id of the document template |
| fillable_info.name | <code>string</code> | new document name |
| fillable_info.folder_id | <code>number</code> | folder id |
| fillable_info.additional_documents | <code>array</code> | Additional documents required after filling the document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+update"></a>

### fillableForms.update(link_to_fill_id, fillable_info, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Updates a fill request item.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| fillable_info | <code>object</code> | Information for updating fillable document |
| fillable_info.access | <code>string</code> | Access level for the fill request document |
| fillable_info.status | <code>string</code> | Document access permission. |
| fillable_info.email_required | <code>boolean</code> | Email required |
| fillable_info.allow_downloads | <code>boolean</code> | Allow to download |
| fillable_info.redirect_url | <code>string</code> | Redirect uri |
| fillable_info.name_required | <code>boolean</code> | Name required |
| fillable_info.custom_message | <code>string</code> | LinkToFill custom message |
| fillable_info.notification_emails | <code>array</code> | LinkToFill notification emails |
| fillable_info.notifications | <code>string</code> | The notifications mode |
| fillable_info.enforce_required_fields | <code>boolean</code> | Prevent closing document before filling all fields |
| fillable_info.custom_logo_id | <code>boolean</code> | Document custom logo id |
| fillable_info.welcome_screen | <code>boolean</code> | Shows welcome agreement each time when user will open LinkToFill |
| fillable_info.reusable | <code>boolean</code> | After filling the form it will be copied to the owner as the fillable form |
| fillable_info.callback_url | <code>string</code> | Callback url |
| fillable_info.signature_stamp]Signature | <code>string</code> | stamp |
| fillable_info.fillable_fields | <code>object</code> | Id of the document template |
| fillable_info.name | <code>string</code> | new document name |
| fillable_info.folder_id | <code>number</code> | folder id |
| fillable_info.additional_documents | <code>array</code> | Additional documents required after filling the document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+remove"></a>

### fillableForms.remove(link_to_fill_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Deletes a fill request item.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+download"></a>

### fillableForms.download(link_to_fill_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
You can easily export all the completed documents created via LinkToFill as a zip file.
This method can give three statuses:
Creating a Job with Job ID, Waiting (if zip is still in progress) or Zip content (if files ready to export).

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+allFilled"></a>

### fillableForms.allFilled(link_to_fill_id, [search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Lists all filled forms for the given fill request.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+getFilled"></a>

### fillableForms.getFilled(link_to_fill_id, filled_form_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Information about a specific filled form.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| filled_form_id | <code>number</code> | Id of filler form |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+removeFilled"></a>

### fillableForms.removeFilled(link_to_fill_id, filled_form_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Deletes a filled form.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| filled_form_id | <code>number</code> | Id of filler form |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+exportFilled"></a>

### fillableForms.exportFilled(link_to_fill_id, filled_form_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Exports filled form data in one of the available formats: json, xls, xlsx, csv, html.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| filled_form_id | <code>number</code> | Id of filler form |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+downloadFilled"></a>

### fillableForms.downloadFilled(link_to_fill_id, filled_form_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Downloads a filled PDF form.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| filled_form_id | <code>number</code> | Id of filler form |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+getFilledAllAdditional"></a>

### fillableForms.getFilledAllAdditional(link_to_fill_id, filled_form_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns a list of a LinkToFill recipient`s attached additional documents.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| filled_form_id | <code>number</code> | Id of filler form |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+getFilledAdditional"></a>

### fillableForms.getFilledAdditional(link_to_fill_id, filled_form_id, additional_document_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns information about one LinkToFill recipient`s attached additional document.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| filled_form_id | <code>number</code> | Id of filler form |
| additional_document_id | <code>number</code> | Id of attached additional document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+downloadFilledAdditional"></a>

### fillableForms.downloadFilledAdditional(link_to_fill_id, filled_form_id, additional_document_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Downloads a file of a LinkToFill filled form`s additional document.

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| filled_form_id | <code>number</code> | Id of filler form |
| additional_document_id | <code>number</code> | Id of attached additional document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="FillableForms+downloadFilledAllAdditional"></a>

### fillableForms.downloadFilledAllAdditional(link_to_fill_id, filled_form_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Downloads a zip-file of all LinkToFill filled form`s additional documents.
This method can give three statuses:
Creating a Job with Job ID, Waiting (if zip is still in progress) or Zip content (if files ready to export).

**Kind**: instance method of [<code>FillableForms</code>](#FillableForms)  

| Param | Type | Description |
| --- | --- | --- |
| link_to_fill_id | <code>number</code> | Id of fill request |
| filled_form_id | <code>number</code> | Id of filler form |
| [callback] | <code>function</code> | callback function |


* * *

