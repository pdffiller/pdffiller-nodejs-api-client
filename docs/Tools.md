<a name="Tools"></a>

## Tools
Tools endpoint

**Kind**: global class  

* * *

<a name="Tools+merge"></a>

### tools.merge(mergeInfo, [clearCache], [callback]) ⇒ <code>Promise</code>
Merge up to five docs into a single document.

**Kind**: instance method of [<code>Tools</code>](#Tools)  

| Param | Type | Description |
| --- | --- | --- |
| mergeInfo | <code>object</code> | params for merge documents |
| mergeInfo.documents | <code>array</code> | array with documents id for merge |
| mergeInfo.name | <code>string</code> | name of new merged document |
| mergeInfo.folder_id | <code>number</code> | id of folder in what will save merged document |
| [clearCache] | <code>boolean</code> | Clear cache to begin a new merge with same params |
| [callback] | <code>function</code> | callback function |


* * *

