<a name="Tools"></a>

## Tools
**Kind**: global class  

* [Tools](#Tools)
    * [new Tools()](#new_Tools_new)
    * [.merge(mergeInfo, [clearCache], [callback])](#Tools+merge) ⇒ <code>Promise</code> \| <code>undefined</code>


* * *

<a name="new_Tools_new"></a>

### new Tools()
Tools endpoint class


* * *

<a name="Tools+merge"></a>

### tools.merge(mergeInfo, [clearCache], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Merge documents to 1.

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

