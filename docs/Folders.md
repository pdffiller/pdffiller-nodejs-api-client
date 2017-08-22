<a name="Folders"></a>

## Folders
**Kind**: global class  

* [Folders](#Folders)
    * [new Folders()](#new_Folders_new)
    * [.all([searchParams], [callback])](#Folders+all) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.get(folderId, [callback])](#Folders+get) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.create(params, [callback])](#Folders+create) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.update(folderId, params, [callback])](#Folders+update) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.remove(folderId, [callback])](#Folders+remove) ⇒ <code>Promise</code> \| <code>undefined</code>


* * *

<a name="new_Folders_new"></a>

### new Folders()
Folders endpoint class


* * *

<a name="Folders+all"></a>

### folders.all([searchParams], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns a list of all folders.

**Kind**: instance method of [<code>Folders</code>](#Folders)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | folders on 1 page |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order_by] | <code>string</code> | order by |
| [searchParams.order] | <code>string</code> | order |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Folders+get"></a>

### folders.get(folderId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Returns a folder by id.

**Kind**: instance method of [<code>Folders</code>](#Folders)  

| Param | Type | Description |
| --- | --- | --- |
| folderId | <code>number</code> | of folder |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Folders+create"></a>

### folders.create(params, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a new folder with given data.

**Kind**: instance method of [<code>Folders</code>](#Folders)  
**Returns**: <code>Promise</code> \| <code>undefined</code> - with created folder information  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | for creating folder |
| params.name | <code>string</code> | name of folder |
| params.parent_id | <code>number</code> | id of parent folder |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Folders+update"></a>

### folders.update(folderId, params, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update a folder with given data.

**Kind**: instance method of [<code>Folders</code>](#Folders)  
**Returns**: <code>Promise</code> \| <code>undefined</code> - with updated folder information  

| Param | Type | Description |
| --- | --- | --- |
| folderId | <code>number</code> | of folder |
| params | <code>object</code> | for creating folder |
| params.name | <code>string</code> | new folder name |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Folders+remove"></a>

### folders.remove(folderId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a folder by id.

**Kind**: instance method of [<code>Folders</code>](#Folders)  

| Param | Type | Description |
| --- | --- | --- |
| folderId | <code>number</code> | of folder |
| [callback] | <code>function</code> | callback function |


* * *

