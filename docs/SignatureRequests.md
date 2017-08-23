<a name="SignatureRequests"></a>

## SignatureRequests
SignatureRequests endpoint

**Kind**: global class  

* [SignatureRequests](#SignatureRequests)
    * [.allInbox([searchParams], [callback])](#SignatureRequests+allInbox) ⇒ <code>Promise</code>
    * [.downloadInbox([searchParams])](#SignatureRequests+downloadInbox) ⇒ <code>Promise</code>
    * [.all([searchParams], [callback])](#SignatureRequests+all) ⇒ <code>Promise</code>
    * [.get(signatureRequestId, [callback])](#SignatureRequests+get) ⇒ <code>Promise</code>
    * [.create(signatureRequestInfo, [callback])](#SignatureRequests+create) ⇒ <code>Promise</code>
    * [.remove(signatureRequestId, [callback])](#SignatureRequests+remove) ⇒ <code>Promise</code>
    * [.getCertificate(signatureRequestId, [callback])](#SignatureRequests+getCertificate) ⇒ <code>Promise</code>
    * [.downloadSignedDocument(signatureRequestId, [callback])](#SignatureRequests+downloadSignedDocument) ⇒ <code>Promise</code>
    * [.allRecipients(signatureRequestId, [searchParams], [callback])](#SignatureRequests+allRecipients) ⇒ <code>Promise</code>
    * [.addRecipients(signatureRequestId, recipients, [callback])](#SignatureRequests+addRecipients) ⇒ <code>Promise</code>
    * [.getRecipient(signatureRequestId, recipientId, [callback])](#SignatureRequests+getRecipient) ⇒ <code>Promise</code>
    * [.remindRecipient(signatureRequestId, recipientId, [callback])](#SignatureRequests+remindRecipient) ⇒ <code>Promise</code>
    * [.getRecipientAllAdditional(signatureRequestId, recipientId, [callback])](#SignatureRequests+getRecipientAllAdditional) ⇒ <code>Promise</code>
    * [.getRecipientAdditional(signatureRequestId, recipientId, additionalDocumentId, [callback])](#SignatureRequests+getRecipientAdditional) ⇒ <code>Promise</code>
    * [.downloadRecipientAdditional(signatureRequestId, recipientId, additionalDocumentId, [callback])](#SignatureRequests+downloadRecipientAdditional) ⇒ <code>Promise</code>
    * [.downloadRecipientAllAdditional(signatureRequestId, recipientId, [callback])](#SignatureRequests+downloadRecipientAllAdditional) ⇒ <code>Promise</code>


* * *

<a name="SignatureRequests+allInbox"></a>

### signatureRequests.allInbox([searchParams], [callback]) ⇒ <code>Promise</code>
Retrieves a list of all document signature requests in the inbox folder.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | Object with query string filters |
| [searchParams.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [searchParams.page] | <code>number</code> | Filter by page |
| [searchParams.order_by] | <code>string</code> | Filter for sort by selected field |
| [searchParams.order] | <code>string</code> | Sort Method |
| [searchParams.status] | <code>string</code> | Filter by signature requests status |
| [searchParams.date_from] | <code>string</code> | Filter by date from |
| [searchParams.date_to] | <code>string</code> | Filter by date to |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+downloadInbox"></a>

### signatureRequests.downloadInbox([searchParams]) ⇒ <code>Promise</code>
Downloads all documents which a sender has requested your signature for in a .zip archive.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | Object with query string filters |
| [searchParams.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [searchParams.page] | <code>number</code> | Filter by page |
| [searchParams.order] | <code>string</code> | Sort Method |
| [searchParams.status] | <code>string</code> | Filter by signature requests status |
| [searchParams.date_from] | <code>string</code> | Filter by date from |
| [searchParams.date_to] | <code>string</code> | Filter by date to |


* * *

<a name="SignatureRequests+all"></a>

### signatureRequests.all([searchParams], [callback]) ⇒ <code>Promise</code>
Retrieves a list of all document signature requests.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | Object with query string filters |
| [searchParams.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [searchParams.page] | <code>number</code> | Filter by page |
| [searchParams.order_by] | <code>string</code> | Filter for sort by selected field |
| [searchParams.order] | <code>string</code> | Sort Method |
| [searchParams.date_from] | <code>string</code> | Filter by date from |
| [searchParams.date_to] | <code>string</code> | Filter by date to |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+get"></a>

### signatureRequests.get(signatureRequestId, [callback]) ⇒ <code>Promise</code>
Retrieves signature request information based on the signature request ID.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | Id of signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+create"></a>

### signatureRequests.create(signatureRequestInfo, [callback]) ⇒ <code>Promise</code>
Creates a new Signature request. Two Signature methods supported: SendToEach and SendToGroup. The SendToGroup method requires envelope_name, sign_in_order and role parameters.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestInfo | <code>object</code> | Information for creating new signature request |
| signatureRequestInfo.document_id | <code>string</code> | is required if file is omitted. |
| signatureRequestInfo.method | <code>string</code> | SendToEach or SendToGroup |
| signatureRequestInfo.envelope_name | <code>string</code> | is required for sengtogroup method |
| signatureRequestInfo.security_pin | <code>string</code> | Password Protected(standard, enhanced) |
| signatureRequestInfo.pin | <code>string</code> | is required when security pin is enhanced |
| signatureRequestInfo.sign_in_order | <code>boolean</code> | sign in order |
| signatureRequestInfo.recipients | <code>Array.&lt;object&gt;</code> | array of recipients |
| signatureRequestInfo.recipients[].role | <code>number</code> | role id parameter, available only for 'sendtogroup' method |
| signatureRequestInfo.recipients[].email | <code>string</code> | Recipient's email address |
| signatureRequestInfo.recipients[].name | <code>string</code> | Recipient's name |
| signatureRequestInfo.recipients[].require_photo | <code>boolean</code> | Sets the option for requirement photo |
| signatureRequestInfo.recipients[].message_subject | <code>string</code> | Message subject |
| signatureRequestInfo.recipients[].message_text | <code>string</code> | Message subject |
| signatureRequestInfo.recipients[].access | <code>string</code> | full or signature |
| signatureRequestInfo.recipients[].phone_authenticate | <code>string</code> | Option for phone notification setting |
| signatureRequestInfo.recipients[].additional_documents | <code>array</code> | Sets the list of additional documents needed to apply after filling the template. Should not exceed the allowable 5 attachments limit. |
| signatureRequestInfo.fillable_fields | <code>object</code> | fillable fields |
| signatureRequestInfo.file | <code>string</code> \| <code>object</code> | file url or file |
| signatureRequestInfo.folder_id | <code>number</code> | folder id |
| signatureRequestInfo.name | <code>string</code> | name signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+remove"></a>

### signatureRequests.remove(signatureRequestId, [callback]) ⇒ <code>Promise</code>
Cancels a signature request for the specified SendToSign ID.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | Id of signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+getCertificate"></a>

### signatureRequests.getCertificate(signatureRequestId, [callback]) ⇒ <code>Promise</code>
Returns a signature request certificate by signature request id.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | Id of signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+downloadSignedDocument"></a>

### signatureRequests.downloadSignedDocument(signatureRequestId, [callback]) ⇒ <code>Promise</code>
Returns a signed document by Signature request id.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | Id of signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+allRecipients"></a>

### signatureRequests.allRecipients(signatureRequestId, [searchParams], [callback]) ⇒ <code>Promise</code>
Returns information about sendtosign recipients and signature status.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | Id of signature request |
| [searchParams] | <code>object</code> | Object with query string filters |
| [searchParams.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [searchParams.page] | <code>number</code> | Filter by page |
| [searchParams.order_by] | <code>string</code> | Filter for sort by selected field |
| [searchParams.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+addRecipients"></a>

### signatureRequests.addRecipients(signatureRequestId, recipients, [callback]) ⇒ <code>Promise</code>
Adds an additional recipient to a sendtosign request.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | Id of signature request |
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

### signatureRequests.getRecipient(signatureRequestId, recipientId, [callback]) ⇒ <code>Promise</code>
Returns information about a sendtosign recipient and signature status.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | Id of signature request |
| recipientId | <code>number</code> | Id of recipient |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+remindRecipient"></a>

### signatureRequests.remindRecipient(signatureRequestId, recipientId, [callback]) ⇒ <code>Promise</code>
Reminds a sendtosign recipient about the sendtosign request.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | Id of signature request |
| recipientId | <code>number</code> | Id of recipient |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+getRecipientAllAdditional"></a>

### signatureRequests.getRecipientAllAdditional(signatureRequestId, recipientId, [callback]) ⇒ <code>Promise</code>
Returns information about sendtosign recipient`s attached additional documents.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | Id of signature request |
| recipientId | <code>number</code> | Id of recipient |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+getRecipientAdditional"></a>

### signatureRequests.getRecipientAdditional(signatureRequestId, recipientId, additionalDocumentId, [callback]) ⇒ <code>Promise</code>
Returns information about sendtosign recipient`s attached additional document.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | Id of signature request |
| recipientId | <code>number</code> | Id of recipient |
| additionalDocumentId | <code>number</code> | Id of additional document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+downloadRecipientAdditional"></a>

### signatureRequests.downloadRecipientAdditional(signatureRequestId, recipientId, additionalDocumentId, [callback]) ⇒ <code>Promise</code>
Downloads a file of a sendtosign recipient`s additional document.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | of signature request |
| recipientId | <code>number</code> | Id of recipient |
| additionalDocumentId | <code>number</code> | Id of additional document |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+downloadRecipientAllAdditional"></a>

### signatureRequests.downloadRecipientAllAdditional(signatureRequestId, recipientId, [callback]) ⇒ <code>Promise</code>
Downloads a zip-file of all additional documents for a sendtosign recipient. This method can give three statuses: Creating a Job with Job ID, Waiting (if zip is still in progress) or Zip content (if files ready to export).

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | Id of signature request |
| recipientId | <code>number</code> | Id of recipient |
| [callback] | <code>function</code> | callback function |


* * *

