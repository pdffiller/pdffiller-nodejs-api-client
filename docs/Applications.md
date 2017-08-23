<a name="Applications"></a>

## Applications
Applications endpoint

**Kind**: global class  

* [Applications](#Applications)
    * [.all([searchParams], [callback])](#Applications+all) ⇒ <code>Promise</code>
    * [.get(applicationId, [callback])](#Applications+get) ⇒ <code>Promise</code>
    * [.create(applicationInfo, [callback])](#Applications+create) ⇒ <code>Promise</code>
    * [.update(applicationId, applicationInfo, [callback])](#Applications+update) ⇒ <code>Promise</code>
    * [.remove(applicationId, [callback])](#Applications+remove) ⇒ <code>Promise</code>
    * [.getUsers(applicationId, [searchParams], [callback])](#Applications+getUsers) ⇒ <code>Promise</code>


* * *

<a name="Applications+all"></a>

### applications.all([searchParams], [callback]) ⇒ <code>Promise</code>
Returns a list of all applications.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| [searchParams] | <code>object</code> | Object with query string filters |
| [searchParams.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [searchParams.page] | <code>number</code> | Filter by page |
| [searchParams.order_by] | <code>string</code> | Filter for sort by selected field |
| [searchParams.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+get"></a>

### applications.get(applicationId, [callback]) ⇒ <code>Promise</code>
Lists information about the created application.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| applicationId | <code>number</code> | Id of an application |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+create"></a>

### applications.create(applicationInfo, [callback]) ⇒ <code>Promise</code>
Creates a new application. Parameters for all-domains can be 0/1 or true/false.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| applicationInfo | <code>object</code> | Information for creating new application |
| applicationInfo.name | <code>string</code> | Application Name |
| applicationInfo.description | <code>string</code> | Application Description |
| applicationInfo.domain | <code>string</code> | Application Domain for authorization by grant type authorization_code for authorization by grant type authorization_code |
| applicationInfo.logo | <code>string</code> | PNG, JPG file. The input can be type of: base64 string, file or url. Only square images. |
| applicationInfo.embedded-domain | <code>string</code> | Domain, where Client will be placed |
| applicationInfo.all-domains | <code>boolean</code> \| <code>number</code> | Allow all domains flag. All domain parameters will be: 0/1 (true/false) |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+update"></a>

### applications.update(applicationId, applicationInfo, [callback]) ⇒ <code>Promise</code>
Updates application. Parameters for all-domains can be 0/1 or true/false.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| applicationId | <code>number</code> | Id of application |
| applicationInfo | <code>object</code> | Information for updating application |
| applicationInfo.name | <code>string</code> | Application Name |
| applicationInfo.description | <code>string</code> | Application Description |
| applicationInfo.domain | <code>string</code> | Application Domain for authorization by grant type authorization_code for authorization by grant type authorization_code |
| [applicationInfo.logo] | <code>string</code> | PNG, JPG file. The input can be type of: base64 string, file or url. Only square images. |
| [applicationInfo.embedded-domain] | <code>string</code> | Domain, where Client will be placed |
| [applicationInfo.all-domains] | <code>boolean</code> \| <code>number</code> | Allow all domains flag. All domain parameters will be: 0/1 (true/false) |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+remove"></a>

### applications.remove(applicationId, [callback]) ⇒ <code>Promise</code>
Deletes application item.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| applicationId | <code>number</code> | Id of application |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+getUsers"></a>

### applications.getUsers(applicationId, [searchParams], [callback]) ⇒ <code>Promise</code>
Retrieves a list of users who authorized with the requested application

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| applicationId | <code>number</code> | id of application |
| [searchParams] | <code>object</code> | Object with query string filters |
| [searchParams.per_page] | <code>number</code> | Filter by quantity of applications on the page on 1 page |
| [searchParams.page] | <code>number</code> | Filter by page |
| [searchParams.order_by] | <code>string</code> | Filter for sort by selected field |
| [searchParams.order] | <code>string</code> | Sort Method |
| [callback] | <code>function</code> | callback function |


* * *

