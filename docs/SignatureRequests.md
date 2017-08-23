<a name="SignatureRequests"></a>

## SignatureRequests
SignatureRequests endpoint

**Kind**: global class  

* [SignatureRequests](#SignatureRequests)
    * [.all([searchParams], [callback])](#SignatureRequests+all) ⇒ <code>Promise</code>
    * [.get(signatureRequestId, [callback])](#SignatureRequests+get) ⇒ <code>Promise</code>
    * [.create(signatureRequestInfo, [callback])](#SignatureRequests+create) ⇒ <code>Promise</code>
    * [.remove(signatureRequestId, [callback])](#SignatureRequests+remove) ⇒ <code>Promise</code>
    * [.getCertificate(signatureRequestId, [callback])](#SignatureRequests+getCertificate) ⇒ <code>Promise</code>
    * [.signedDocument(signatureRequestId, [callback])](#SignatureRequests+signedDocument) ⇒ <code>Promise</code>
    * [.allInbox([searchParams], [callback])](#SignatureRequests+allInbox) ⇒ <code>Promise</code>
    * [.downloadInbox([searchParams])](#SignatureRequests+downloadInbox) ⇒ <code>Promise</code>
    * [.allRecipients(signatureRequestId, [searchParams])](#SignatureRequests+allRecipients) ⇒ <code>Promise</code>
    * [.addRecipients(signatureRequestId, recipients)](#SignatureRequests+addRecipients) ⇒ <code>Promise</code>
    * [.getRecipient(signatureRequestId, recipientId)](#SignatureRequests+getRecipient) ⇒ <code>Promise</code>
    * [.remindRecipient(signatureRequestId, recipientId)](#SignatureRequests+remindRecipient) ⇒ <code>Promise</code>
    * [.getRecipientAllAdditional(signatureRequestId, recipientId)](#SignatureRequests+getRecipientAllAdditional) ⇒ <code>Promise</code>
    * [.getRecipientAdditional(signatureRequestId, recipientId, additionalDocumentId)](#SignatureRequests+getRecipientAdditional) ⇒ <code>Promise</code>
    * [.downloadRecipientAdditional(signatureRequestId, recipientId, additionalDocumentId)](#SignatureRequests+downloadRecipientAdditional) ⇒ <code>Promise</code>
    * [.downloadRecipientAllAdditional(signatureRequestId, recipientId)](#SignatureRequests+downloadRecipientAllAdditional) ⇒ <code>Promise</code>


* * *

<a name="SignatureRequests+all"></a>

### signatureRequests.all([searchParams], [callback]) ⇒ <code>Promise</code>
Returns a list of all signature requests.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | signature requests on 1 page |
| [searchParams.date_from] | <code>string</code> | Filter by date from |
| [searchParams.date_to] | <code>string</code> | Filter by date to |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order_by] | <code>string</code> | order by |
| [searchParams.order] | <code>string</code> | order |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+get"></a>

### signatureRequests.get(signatureRequestId, [callback]) ⇒ <code>Promise</code>
Returns an signature request by id.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | id of signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+create"></a>

### signatureRequests.create(signatureRequestInfo, [callback]) ⇒ <code>Promise</code>
Create new signature request with given data.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestInfo | <code>object</code> | info for creating new signature request |
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
| [signatureRequestInfo.fillable_fields] | <code>object</code> | fillable fields |
| [signatureRequestInfo.file] | <code>string</code> \| <code>object</code> | file url or file |
| [signatureRequestInfo.folder_id] | <code>number</code> | folder id |
| [signatureRequestInfo.name name] | <code>string</code> | signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+remove"></a>

### signatureRequests.remove(signatureRequestId, [callback]) ⇒ <code>Promise</code>
Cancels a signature request for the specified SendToSign ID.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | of signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+getCertificate"></a>

### signatureRequests.getCertificate(signatureRequestId, [callback]) ⇒ <code>Promise</code>
Returns a signature request certificate by signature request id.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | of signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+signedDocument"></a>

### signatureRequests.signedDocument(signatureRequestId, [callback]) ⇒ <code>Promise</code>
Returns a signed document by Signature request id.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | of signature request |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+allInbox"></a>

### signatureRequests.allInbox([searchParams], [callback]) ⇒ <code>Promise</code>
Returns a list of all signature requests in inbox folder.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | signature requests on 1 page |
| [searchParams.status] | <code>string</code> | signature requests on 1 page |
| [searchParams.date_from] | <code>string</code> | Filter by date from |
| [searchParams.date_to] | <code>string</code> | Filter by date to |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order_by] | <code>string</code> | order by |
| [searchParams.order] | <code>string</code> | order |
| [callback] | <code>function</code> | callback function |


* * *

<a name="SignatureRequests+downloadInbox"></a>

### signatureRequests.downloadInbox([searchParams]) ⇒ <code>Promise</code>
Downloads all documents which a sender has requested your signature for in a .zip archive.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | signature requests on 1 page |
| [searchParams.status] | <code>string</code> | signature requests on 1 page |
| [searchParams.date_from] | <code>string</code> | Filter by date from |
| [searchParams.date_to] | <code>string</code> | Filter by date to |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order_by] | <code>string</code> | order by |
| [searchParams.order] | <code>string</code> | order |


* * *

<a name="SignatureRequests+allRecipients"></a>

### signatureRequests.allRecipients(signatureRequestId, [searchParams]) ⇒ <code>Promise</code>
Returns information about sendtosign recipients and signature status.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | of signature request |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | signature requests on 1 page |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order_by] | <code>string</code> | order by |
| [searchParams.order] | <code>string</code> | order |


* * *

<a name="SignatureRequests+addRecipients"></a>

### signatureRequests.addRecipients(signatureRequestId, recipients) ⇒ <code>Promise</code>
Adds an additional recipient to a sendtosign request.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | of signature request |
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


* * *

<a name="SignatureRequests+getRecipient"></a>

### signatureRequests.getRecipient(signatureRequestId, recipientId) ⇒ <code>Promise</code>
Returns information about sendtosign recipients and signature status.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | of signature request |
| recipientId | <code>number</code> | of signature request |


* * *

<a name="SignatureRequests+remindRecipient"></a>

### signatureRequests.remindRecipient(signatureRequestId, recipientId) ⇒ <code>Promise</code>
Reminds a sendtosign recipient about the sendtosign request.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | of signature request |
| recipientId | <code>number</code> | of signature request |


* * *

<a name="SignatureRequests+getRecipientAllAdditional"></a>

### signatureRequests.getRecipientAllAdditional(signatureRequestId, recipientId) ⇒ <code>Promise</code>
Returns information about sendtosign recipient`s attached additional documents.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | of signature request |
| recipientId | <code>number</code> | of signature request |


* * *

<a name="SignatureRequests+getRecipientAdditional"></a>

### signatureRequests.getRecipientAdditional(signatureRequestId, recipientId, additionalDocumentId) ⇒ <code>Promise</code>
Returns information about a sendtosign recipient and signature status.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | of signature request |
| recipientId | <code>number</code> | of signature request |
| additionalDocumentId | <code>number</code> | of signature request |


* * *

<a name="SignatureRequests+downloadRecipientAdditional"></a>

### signatureRequests.downloadRecipientAdditional(signatureRequestId, recipientId, additionalDocumentId) ⇒ <code>Promise</code>
Downloads a file of a sendtosign recipient`s additional document.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | of signature request |
| recipientId | <code>number</code> | of signature request |
| additionalDocumentId | <code>number</code> | of signature request |


* * *

<a name="SignatureRequests+downloadRecipientAllAdditional"></a>

### signatureRequests.downloadRecipientAllAdditional(signatureRequestId, recipientId) ⇒ <code>Promise</code>
Downloads a zip-file of all additional documents for a sendtosign recipient.

**Kind**: instance method of [<code>SignatureRequests</code>](#SignatureRequests)  

| Param | Type | Description |
| --- | --- | --- |
| signatureRequestId | <code>number</code> | of signature request |
| recipientId | <code>number</code> | of signature request |


* * *

