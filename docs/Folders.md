<a name="Folders"></a>

## Folders
Folders endpoint

**Kind**: global class  

* [Folders](#Folders)
    * [.all([searchParams], [callback])](#Folders+all) ⇒ <code>Promise</code>
    * [.get(folderId, [callback])](#Folders+get) ⇒ <code>Promise</code>
    * [.create(params, [callback])](#Folders+create) ⇒ <code>Promise</code>
    * [.update(folderId, params, [callback])](#Folders+update) ⇒ <code>Promise</code>
    * [.remove(folderId, [callback])](#Folders+remove) ⇒ <code>Promise</code>


* * *

<a name="Folders+all"></a>

### folders.all([searchParams], [callback]) ⇒ <code>Promise</code>
Retrieves a list of folders.

**Kind**: instance method of [<code>Folders</code>](#Folders)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | Object with query string filters |
| [searchParams.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [searchParams.page] | <code>number</code> | Filter by page |
| [searchParams.order_by] | <code>string</code> | Filter for sort by selected field |
| [searchParams.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Folders+get"></a>

### folders.get(folderId, [callback]) ⇒ <code>Promise</code>
Retrieves information about a created folder.

**Kind**: instance method of [<code>Folders</code>](#Folders)  

| Param | Type | Description |
| --- | --- | --- |
| folderId | <code>number</code> | Id of folder |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Folders+create"></a>

### folders.create(params, [callback]) ⇒ <code>Promise</code>
Creates a new folder. The folder name must contain numbers, English letters or special characters: ( ) _ .

**Kind**: instance method of [<code>Folders</code>](#Folders)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Params for new folder |
| params.name | <code>string</code> | name of folder |
| params.parent_id | <code>number</code> | id of parent folder |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Folders+update"></a>

### folders.update(folderId, params, [callback]) ⇒ <code>Promise</code>
Updates a folder's name.

**Kind**: instance method of [<code>Folders</code>](#Folders)  

| Param | Type | Description |
| --- | --- | --- |
| folderId | <code>number</code> | Id of folder |
| params | <code>object</code> | for creating folder |
| params.name | <code>string</code> | new folder name |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Folders+remove"></a>

### folders.remove(folderId, [callback]) ⇒ <code>Promise</code>
Deletes a folder item.

**Kind**: instance method of [<code>Folders</code>](#Folders)  

| Param | Type | Description |
| --- | --- | --- |
| folderId | <code>number</code> | Id of folder |
| [callback] | <code>function</code> | callback function |


* * *

