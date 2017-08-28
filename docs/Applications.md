<a name="Applications"></a>

## Applications
Applications endpoint

**Kind**: global class  

* [Applications](#Applications)
    * [.all([search_params], [callback])](#Applications+all) ⇒ <code>Promise</code> \| <code>void</code>
    * [.get(application_id, [callback])](#Applications+get) ⇒ <code>Promise</code> \| <code>void</code>
    * [.create(application_info, [callback])](#Applications+create) ⇒ <code>Promise</code> \| <code>void</code>
    * [.update(application_id, application_info, [callback])](#Applications+update) ⇒ <code>Promise</code> \| <code>void</code>
    * [.remove(application_id, [callback])](#Applications+remove) ⇒ <code>Promise</code> \| <code>void</code>
    * [.getUsers(application_id, [search_params], [callback])](#Applications+getUsers) ⇒ <code>Promise</code> \| <code>void</code>


* * *

<a name="Applications+all"></a>

### applications.all([search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Returns a list of all applications.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order_by] | <code>string</code> | Filter for sort by selected field |
| [search_params.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+get"></a>

### applications.get(application_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Lists information about the created application.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| application_id | <code>number</code> | Id of application |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+create"></a>

### applications.create(application_info, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Creates a new application. Parameters for all-domains can be 0/1 or true/false.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| application_info | <code>object</code> | Information for creating new application |
| application_info.name | <code>string</code> | Application Name |
| application_info.description | <code>string</code> | Application Description |
| application_info.domain | <code>string</code> | Application Domain for authorization by grant type authorization_code |
| application_info.logo | <code>string</code> | PNG, JPG file. The input can be type of: base64 string, file or url. Only square images. |
| application_info.embedded-domain | <code>string</code> | Domain, where Client will be placed |
| application_info.all-domains | <code>boolean</code> \| <code>number</code> | Allow all domains flag. All domain parameters will be: 0/1 (true/false) |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+update"></a>

### applications.update(application_id, application_info, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Updates application. Parameters for all-domains can be 0/1 or true/false.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| application_id | <code>number</code> | Id of application |
| application_info | <code>object</code> | Information for updating application |
| application_info.name | <code>string</code> | Application Name |
| application_info.description | <code>string</code> | Application Description |
| application_info.domain | <code>string</code> | Application Domain for authorization by grant type authorization_code |
| application_info.logo | <code>string</code> | PNG, JPG file. The input can be type of: base64 string, file or url. Only square images. |
| application_info.embedded-domain | <code>string</code> | Domain, where Client will be placed |
| application_info.all-domains | <code>boolean</code> \| <code>number</code> | Allow all domains flag. All domain parameters will be: 0/1 (true/false) |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+remove"></a>

### applications.remove(application_id, [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Deletes application item.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| application_id | <code>number</code> | Id of application |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+getUsers"></a>

### applications.getUsers(application_id, [search_params], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Retrieves a list of users who authorized with the requested application

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| application_id | <code>number</code> | Id of application |
| [search_params] | <code>object</code> | Object with query string filters |
| [search_params.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [search_params.page] | <code>number</code> | Filter by page |
| [search_params.order_by] | <code>string</code> | Filter for sort by selected field |
| [search_params.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

