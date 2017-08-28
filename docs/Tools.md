<a name="Tools"></a>

## Tools
Tools endpoint

**Kind**: global class  

* * *

<a name="Tools+merge"></a>

### tools.merge(merge_info, [clear_cache], [callback]) ⇒ <code>Promise</code> \| <code>void</code>
Merge up to five docs into a single document.

**Kind**: instance method of [<code>Tools</code>](#Tools)  

| Param | Type | Description |
| --- | --- | --- |
| merge_info | <code>object</code> | params for merge documents |
| merge_info.documents | <code>array</code> | array with documents id for merge |
| merge_info.name | <code>string</code> | name of new merged document |
| merge_info.folder_id | <code>number</code> | id of folder in what will save merged document |
| [clear_cache] | <code>boolean</code> | Clear cache to begin a new merge with same params |
| [callback] | <code>function</code> | callback function |


* * *

