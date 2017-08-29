<a name="SignatureRequests"></a>

## SignatureRequests
SignatureRequests endpoint

**Kind**: global class  

* [SignatureRequests](#SignatureRequests)
    * [.allInbox([search_params], [callback])](#SignatureRequests+allInbox) ⇒ <code>Promise</code> \| <code>void</code>
    * [.downloadInbox([search_params], [callback])](#SignatureRequests+downloadInbox) ⇒ <code>Promise</code> \| <code>void</code>
    * [.all([search_params], [callback])](#SignatureRequests+all) ⇒ <code>Promise</code> \| <code>void</code>
    * [.get(signature_request_id, [callback])](#SignatureRequests+get) ⇒ <code>Promise</code> \| <code>void</code>
    * [.create(signature_request_info, [callback])](#SignatureRequests+create) ⇒ <code>Promise</code> \| <code>void</code>
    * [.remove(signature_request_id, [callback])](#SignatureRequests+remove) ⇒ <code>Promise</code> \| <code>void</code>
    * [.getCertificate(signature_request_id, [callback])](#SignatureRequests+getCertificate) ⇒ <code>Promise</code> \| <code>void</code>
    * [.downloadSignedDocument(signature_request_id, [callback])](#SignatureRequests+downloadSignedDocument) ⇒ <code>Promise</code> \| <code>void</code>
    * [.allRecipients(signature_request_id, [search_params], [callback])](#SignatureRequests+allRecipients) ⇒ <code>Promise</code> \| <code>void</code>
    * [.addRecipients(signature_request_id, recipients, [callback])](#SignatureRequests+addRecipients) ⇒ <code>Promise</code> \| <code>void</code>
    * [.getRecipient(signature_request_id, recipient_id, [callback])](#SignatureRequests+getRecipient) ⇒ <code>Promise</code> \| <code>void</code>
    * [.remindRecipient(signature_request_id, recipient_id, [callback])](#SignatureRequests+remindRecipient) ⇒ <code>Promise</code> \| <code>void</code>
    * [.getRecipientAllAdditional(signature_request_id, recipient_id, [callback])](#SignatureRequests+getRecipientAllAdditional) ⇒ <code>Promise</code> \| <code>void</code>
    * [.getRecipientAdditional(signature_request_id, recipient_id, additional_document_id, [callback])](#SignatureRequests+getRecipientAdditional) ⇒ <code>Promise</code> \| <code>void</code>
    * [.downloadRecipientAdditional(signature_request_id, recipient_id, additional_document_id, [callback])](#SignatureRequests+downloadRecipientAdditional) ⇒ <code>Promise</code> \| <code>void</code>
    * [.downloadRecipientAllAdditional(signature_request_id, recipient_id, [callback])](#SignatureRequests+downloadRecipientAllAdditional) ⇒ <code>Promise</code> \| <code>void</code>


* * *

<a name="SignatureRequests+allInbox"></a>

### signatureRequests.allInbox([search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves a list of all document signature requests in the inbox folder.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order_by] | <code>string</code> | Filter for sort by selected field |
| [search_params.order] | <code>string</code> | Sort Method |
| [search_params.status] | <code>string</code> | Filter by signature requests status |
| [search_params.date_from] | <code>string</code> | Filter by date from |
| [search_params.date_to] | <code>string</code> | Filter by date to |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+downloadInbox"></a>

### signatureRequests.downloadInbox([search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Downloads all documents which a sender has requested your signature for in a .zip archive.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order] | <code>string</code> | Sort Method |
| [search_params.status] | <code>string</code> | Filter by signature requests status |
| [search_params.date_from] | <code>string</code> | Filter by date from |
| [search_params.date_to] | <code>string</code> | Filter by date to |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+all"></a>

### signatureRequests.all([search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves a list of all document signature requests.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order_by] | <code>string</code> | Filter for sort by selected field |
| [search_params.order] | <code>string</code> | Sort Method |
| [search_params.date_from] | <code>string</code> | Filter by date from |
| [search_params.date_to] | <code>string</code> | Filter by date to |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+get"></a>

### signatureRequests.get(signature_request_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves signature request information based on the signature request ID.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_id | <code>number</code> | Id of signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+create"></a>

### signatureRequests.create(signature_request_info, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Creates a new Signature request. Two Signature methods supported: SendToEach and SendToGroup. The SendToGroup method requires envelope_name, sign_in_order and role parameters.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_info | <code>object</code> | Information for creating new signature request |
| signature_request_info.document_id | <code>string</code> | is required if file is omitted. |
| signature_request_info.method | <code>string</code> | SendToEach or SendToGroup |
| signature_request_info.envelope_name | <code>string</code> | is required for sengtogroup method |
| signature_request_info.security_pin | <code>string</code> | Password Protected(standard, enhanced) |
| signature_request_info.pin | <code>string</code> | is required when security pin is enhanced |
| signature_request_info.sign_in_order | <code>boolean</code> | sign in order |
| signature_request_info.recipients | <code>Array.&lt;object&gt;</code> | array of recipients |
| signature_request_info.recipients[].role | <code>number</code> | role id parameter, available only for 'sendtogroup' method |
| signature_request_info.recipients[].email | <code>string</code> | Recipient's email address |
| signature_request_info.recipients[].name | <code>string</code> | Recipient's name |
| signature_request_info.recipients[].require_photo | <code>boolean</code> | Sets the option for requirement photo |
| signature_request_info.recipients[].message_subject | <code>string</code> | Message subject |
| signature_request_info.recipients[].message_text | <code>string</code> | Message subject |
| signature_request_info.recipients[].access | <code>string</code> | full or signature |
| signature_request_info.recipients[].phone_authenticate | <code>string</code> | Option for phone notification setting |
| signature_request_info.recipients[].additional_documents | <code>array</code> | Sets the list of additional documents needed to apply after filling the template. Should not exceed the allowable 5 attachments limit. |
| signature_request_info.fillable_fields | <code>object</code> | fillable fields |
| signature_request_info.file | <code>string</code> \| <code>object</code> | file url or file |
| signature_request_info.folder_id | <code>number</code> | folder id |
| signature_request_info.name | <code>string</code> | name signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+remove"></a>

### signatureRequests.remove(signature_request_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Cancels a signature request for the specified SendToSign ID.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_id | <code>number</code> | Id of signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+getCertificate"></a>

### signatureRequests.getCertificate(signature_request_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns a signature request certificate by signature request id.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_id | <code>number</code> | Id of signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+downloadSignedDocument"></a>

### signatureRequests.downloadSignedDocument(signature_request_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns a signed document by Signature request id.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_id | <code>number</code> | Id of signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+allRecipients"></a>

### signatureRequests.allRecipients(signature_request_id, [search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns information about sendtosign recipients and signature status.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_id | <code>number</code> | Id of signature request |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order_by] | <code>string</code> | Filter for sort by selected field |
| [search_params.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+addRecipients"></a>

### signatureRequests.addRecipients(signature_request_id, recipients, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Adds an additional recipient to a sendtosign request.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_id | <code>number</code> | Id of signature request |
| recipients | <code>Array.&lt;object&gt;</code> | array of recipients |
| recipients[].role | <code>number</code> | role id parameter, available only for 'sendtogroup' method |
| recipients[].email | <code>string</code> | Recipient's email address |
| recipients[].name | <code>string</code> | Recipient's name |
| recipients[].require_photo | <code>boolean</code> | Sets the option for requirement photo |
| recipients[].message_subject | <code>string</code> | Message subject |
| recipients[].message_text | <code>string</code> | Message subject |
| recipients[].access | <code>string</code> | full or signature |
| recipients[].phone_authenticate | <code>string</code> | Option for phone notification setting |
| recipients[].additional_documents | <code>array</code> | Sets the list of additional documents needed to apply after filling the template. Should not exceed the allowable 5 attachments limit. |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+getRecipient"></a>

### signatureRequests.getRecipient(signature_request_id, recipient_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns information about a sendtosign recipient and signature status.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_id | <code>number</code> | Id of signature request |
| recipient_id | <code>number</code> | Id of recipient |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+remindRecipient"></a>

### signatureRequests.remindRecipient(signature_request_id, recipient_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Reminds a sendtosign recipient about the sendtosign request.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_id | <code>number</code> | Id of signature request |
| recipient_id | <code>number</code> | Id of recipient |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+getRecipientAllAdditional"></a>

### signatureRequests.getRecipientAllAdditional(signature_request_id, recipient_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns information about sendtosign recipient`s attached additional documents.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_id | <code>number</code> | Id of signature request |
| recipient_id | <code>number</code> | Id of recipient |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+getRecipientAdditional"></a>

### signatureRequests.getRecipientAdditional(signature_request_id, recipient_id, additional_document_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns information about sendtosign recipient`s attached additional document.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_id | <code>number</code> | Id of signature request |
| recipient_id | <code>number</code> | Id of recipient |
| additional_document_id | <code>number</code> | Id of additional document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+downloadRecipientAdditional"></a>

### signatureRequests.downloadRecipientAdditional(signature_request_id, recipient_id, additional_document_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Downloads a file of a sendtosign recipient`s additional document.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_id | <code>number</code> | of signature request |
| recipient_id | <code>number</code> | Id of recipient |
| additional_document_id | <code>number</code> | Id of additional document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+downloadRecipientAllAdditional"></a>

### signatureRequests.downloadRecipientAllAdditional(signature_request_id, recipient_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Downloads a zip-file of all additional documents for a sendtosign recipient. This method can give three statuses: Creating a Job with Job ID, Waiting (if zip is still in progress) or Zip content (if files ready to export).

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signature_request_id | <code>number</code> | Id of signature request |
| recipient_id | <code>number</code> | Id of recipient |
| [callback] | <code>function</code> | callback function |


* * *

