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
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | application on 1 page |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order_by] | <code>string</code> | order by |
| [searchParams.order] | <code>string</code> | order |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+get"></a>

### applications.get(applicationId, [callback]) ⇒ <code>Promise</code>
Returns an application by id.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| applicationId | <code>number</code> | of application |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+create"></a>

### applications.create(applicationInfo, [callback]) ⇒ <code>Promise</code>
Create new application with given data.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| applicationInfo | <code>object</code> | for creating new application |
| applicationInfo.name | <code>string</code> | name of new application |
| applicationInfo.description | <code>string</code> | description of new application |
| applicationInfo.domain | <code>string</code> | application domain for authorization by grant type authorization_code |
| [applicationInfo.logo] | <code>string</code> | PNG, JPG file. The input can be type of: base64 string, file or url. Only square images. |
| [applicationInfo.embedded-domain] | <code>string</code> | Domain, where client will be placed |
| [applicationInfo.all-domains] | <code>boolean</code> \| <code>number</code> | Allow all domains flag. |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+update"></a>

### applications.update(applicationId, applicationInfo, [callback]) ⇒ <code>Promise</code>
update application by id with given data.

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| applicationId | <code>number</code> | of application |
| applicationInfo | <code>object</code> | for creating new application |
| applicationInfo.name | <code>string</code> | name of new application |
| applicationInfo.description | <code>string</code> | description of new application |
| applicationInfo.domain | <code>string</code> | application domain for authorization by grant type authorization_code |
| [applicationInfo.logo] | <code>string</code> | PNG, JPG file. The input can be type of: base64 string, file or url. Only square images. |
| [applicationInfo.embedded-domain] | <code>string</code> | Domain, where client will be placed |
| [applicationInfo.all-domains] | <code>boolean</code> \| <code>number</code> | Allow all domains flag. |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+remove"></a>

### applications.remove(applicationId, [callback]) ⇒ <code>Promise</code>
delete application by id

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| applicationId | <code>number</code> | of application |
| [callback] | <code>function</code> | callback function |


* * *

<a name="Applications+getUsers"></a>

### applications.getUsers(applicationId, [searchParams], [callback]) ⇒ <code>Promise</code>
Retrieves a list of users who authorized with the requested application

**Kind**: instance method of [<code>Applications</code>](#Applications)  

| Param | Type | Description |
| --- | --- | --- |
| applicationId | <code>number</code> | id of application |
| [searchParams] | <code>object</code> | object with params for pagination |
| [searchParams.per_page] | <code>number</code> | application on 1 page |
| [searchParams.page] | <code>number</code> | page number |
| [searchParams.order_by] | <code>string</code> | order by |
| [searchParams.order] | <code>string</code> | order |
| [callback] | <code>function</code> | callback function |


* * *

