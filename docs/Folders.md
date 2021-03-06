<a name="Folders"></a>

## Folders
Folders endpoint

**Kind**: global class  

* [Folders](#Folders)
    * [.all([search_params], [callback])](#Folders+all) ⇒ <code>Promise</code> \| <code>void</code>
    * [.get(folder_id, [callback])](#Folders+get) ⇒ <code>Promise</code> \| <code>void</code>
    * [.create(params, [callback])](#Folders+create) ⇒ <code>Promise</code> \| <code>void</code>
    * [.update(folder_id, params, [callback])](#Folders+update) ⇒ <code>Promise</code> \| <code>void</code>
    * [.remove(folder_id, [callback])](#Folders+remove) ⇒ <code>Promise</code> \| <code>void</code>


* * *

<a name="Folders+all"></a>

### folders.all([search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves a list of folders.

**Kind**: instance method of [<code>Folders</code>](#Folders)  

| Param | Type | Description |
| --- | --- | --- |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order_by] | <code>string</code> | Filter for sort by selected field |
| [search_params.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Folders+get"></a>

### folders.get(folder_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves information about a created folder.

**Kind**: instance method of [<code>Folders</code>](#Folders)  

| Param | Type | Description |
| --- | --- | --- |
| folder_id | <code>number</code> | Id of folder |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Folders+create"></a>

### folders.create(params, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
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

### folders.update(folder_id, params, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Updates a folder's name.

**Kind**: instance method of [<code>Folders</code>](#Folders)  

| Param | Type | Description |
| --- | --- | --- |
| folder_id | <code>number</code> | Id of folder |
| params | <code>object</code> | for creating folder |
| params.name | <code>string</code> | new folder name |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Folders+remove"></a>

### folders.remove(folder_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Deletes a folder item.

**Kind**: instance method of [<code>Folders</code>](#Folders)  

| Param | Type | Description |
| --- | --- | --- |
| folder_id | <code>number</code> | Id of folder |
| [callback] | <code>function</code> | callback function |


* * *

